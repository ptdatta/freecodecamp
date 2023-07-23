const mongoose= require("mongoose");

const connectDB = async ()=>{
    try {
        const conn=await mongoose.connect("mongodb+srv://ptdatta:Parthib12@cluster0.anfvbez.mongodb.net/urlshortner?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error ${error.message}`);
        process.exit();
    }
}
mongoose.set('strictQuery',true)
module.exports= connectDB;