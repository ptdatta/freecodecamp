--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(40) NOT NULL,
    age_in_millions_of_years integer,
    distance_from_earth numeric(5,2),
    description text,
    has_life boolean NOT NULL,
    is_spherical boolean NOT NULL
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(40) NOT NULL,
    age_in_millions_of_years integer,
    distance_from_earth numeric(5,2),
    description text,
    has_life boolean NOT NULL,
    is_spherical boolean NOT NULL,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(40) NOT NULL,
    age_in_millions_of_years integer,
    distance_from_earth numeric(5,2),
    description text,
    has_life boolean NOT NULL,
    is_spherical boolean NOT NULL,
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(40) NOT NULL,
    age_in_millions_of_years integer,
    distance_from_earth numeric(5,2),
    description text,
    has_life boolean NOT NULL,
    is_spherical boolean NOT NULL,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: stmoon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.stmoon (
    stmoon_id integer NOT NULL,
    name character varying(40),
    age integer,
    distance integer,
    description text,
    has_life boolean NOT NULL,
    is_shere boolean NOT NULL
);


ALTER TABLE public.stmoon OWNER TO freecodecamp;

--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky way', 5, 20.36, '', true, false);
INSERT INTO public.galaxy VALUES (2, 'Andromida', 8, 28.36, '', true, false);
INSERT INTO public.galaxy VALUES (3, 'Triangulum', 10, 32.36, '', true, false);
INSERT INTO public.galaxy VALUES (4, 'Nightwing', 18, 32.46, '', true, false);
INSERT INTO public.galaxy VALUES (5, 'Wirlpool', 68, 92.46, '', true, false);
INSERT INTO public.galaxy VALUES (6, 'sombero', 38, 2.46, '', true, false);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Moon', 1, 2.30, '', false, true, 1);
INSERT INTO public.moon VALUES (2, 'A1', 1, 2.30, '', false, true, 1);
INSERT INTO public.moon VALUES (3, 'B', 1, 2.30, '', false, true, 1);
INSERT INTO public.moon VALUES (4, 'C', 1, 2.30, '', false, true, 1);
INSERT INTO public.moon VALUES (5, 'D', 1, 2.30, '', false, true, 1);
INSERT INTO public.moon VALUES (6, 'E', 1, 2.30, '', false, true, 1);
INSERT INTO public.moon VALUES (7, 'F', 1, 2.30, '', false, true, 1);
INSERT INTO public.moon VALUES (8, 'G', 1, 2.30, '', false, true, 5);
INSERT INTO public.moon VALUES (9, 'H', 1, 2.30, '', false, true, 8);
INSERT INTO public.moon VALUES (10, 'I', 1, 2.30, '', false, true, 8);
INSERT INTO public.moon VALUES (11, 'J', 1, 2.30, '', false, true, 2);
INSERT INTO public.moon VALUES (21, 'K', 1, 2.30, '', false, true, 3);
INSERT INTO public.moon VALUES (13, 'M', 1, 2.30, '', false, true, 3);
INSERT INTO public.moon VALUES (14, 'N', 1, 2.30, '', false, true, 4);
INSERT INTO public.moon VALUES (15, 'O', 1, 2.30, '', false, true, 7);
INSERT INTO public.moon VALUES (16, 'P', 1, 2.30, '', false, true, 11);
INSERT INTO public.moon VALUES (17, 'Q', 1, 2.30, '', false, true, 11);
INSERT INTO public.moon VALUES (18, 'R', 1, 2.30, '', false, true, 12);
INSERT INTO public.moon VALUES (19, 'W', 1, 2.30, '', false, true, 9);
INSERT INTO public.moon VALUES (20, 'Z', 1, 2.30, '', false, true, 9);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'A', 8, 11.46, '', true, true, 1);
INSERT INTO public.planet VALUES (2, 'B', 8, 11.46, '', true, true, 1);
INSERT INTO public.planet VALUES (3, 'C', 8, 11.46, '', true, true, 2);
INSERT INTO public.planet VALUES (4, 'D', 8, 11.46, '', true, true, 2);
INSERT INTO public.planet VALUES (5, 'E', 8, 11.46, '', true, true, 3);
INSERT INTO public.planet VALUES (6, 'F', 8, 11.46, '', true, true, 4);
INSERT INTO public.planet VALUES (7, 'G', 8, 11.46, '', true, true, 2);
INSERT INTO public.planet VALUES (8, 'H', 8, 11.46, '', true, true, 5);
INSERT INTO public.planet VALUES (9, 'I', 8, 11.46, '', true, true, 4);
INSERT INTO public.planet VALUES (10, 'J', 8, 11.46, '', true, true, 3);
INSERT INTO public.planet VALUES (11, 'K', 8, 11.46, '', true, true, 2);
INSERT INTO public.planet VALUES (12, 'L', 8, 11.46, '', true, true, 1);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Sun', 2, 9.46, '', true, false, 1);
INSERT INTO public.star VALUES (2, 'Alpha', 3, 10.46, '', true, false, 2);
INSERT INTO public.star VALUES (3, 'Beta', 8, 11.46, '', true, true, 2);
INSERT INTO public.star VALUES (4, 'Gama', 8, 11.46, '', true, true, 3);
INSERT INTO public.star VALUES (5, 'Delta', 8, 11.46, '', true, true, 4);
INSERT INTO public.star VALUES (6, 'Eita', 8, 11.46, '', true, true, 6);


--
-- Data for Name: stmoon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.stmoon VALUES (1, 'Z', 1, 2, '', false, true);
INSERT INTO public.stmoon VALUES (2, 'A', 1, 2, '', false, true);
INSERT INTO public.stmoon VALUES (3, 'B', 1, 2, '', false, true);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: stmoon stmoon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.stmoon
    ADD CONSTRAINT stmoon_name_key UNIQUE (name);


--
-- Name: stmoon stmoon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.stmoon
    ADD CONSTRAINT stmoon_pkey PRIMARY KEY (stmoon_id);


--
-- Name: galaxy unique_name_constraint; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT unique_name_constraint UNIQUE (name);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

