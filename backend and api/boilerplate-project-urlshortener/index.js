require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dns = require("dns");
const urlparser = require("url");
const connectDB = require("./config/db.js");
const mongoose = require("mongoose");

// Basic Configuration
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(`${process.cwd()}/public`));

const urlModel = mongoose.Schema({
  url: { type: String, required: true },
  short_url: { type: Number, required: true },
});

const urls = mongoose.model("urls", urlModel);

let urlCount = 0;

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.post("/api/shorturl", async function (req, res) {
  const url_string = req.body.url;
  const urlCount = await urls.countDocuments({}).exec();
  const dnslookup = dns.lookup(
    urlparser.parse(url_string).hostname,
    async (err, address) => {
      if (!address) {
        res.json({ error: "Invalid URL" });
      } else {
        const url = await urls.create({ url: url_string, short_url: urlCount });
        if (url) {
          res.json({ original_url: url.url, short_url: url.short_url });
        } else {
          res.status(400);
          throw new Error("Failed to create the User");
        }
      }
    }
  );
});

app.get("/api/shorturl/:short_url", async (req, res) => {
  const shorturl = req.params.short_url;
  const urlDoc = await urls.findOne({ short_url: +shorturl });
  res.redirect(urlDoc.url);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
