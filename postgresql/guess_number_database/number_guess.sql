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

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

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
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    number_guesses integer NOT NULL,
    user_id integer
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(23) NOT NULL
);


ALTER TABLE public.users OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (1, 272, 11);
INSERT INTO public.games VALUES (2, 563, 11);
INSERT INTO public.games VALUES (3, 687, 12);
INSERT INTO public.games VALUES (4, 438, 12);
INSERT INTO public.games VALUES (5, 243, 11);
INSERT INTO public.games VALUES (6, 918, 11);
INSERT INTO public.games VALUES (7, 814, 11);
INSERT INTO public.games VALUES (8, 491, 13);
INSERT INTO public.games VALUES (9, 584, 13);
INSERT INTO public.games VALUES (10, 109, 14);
INSERT INTO public.games VALUES (11, 325, 14);
INSERT INTO public.games VALUES (12, 789, 13);
INSERT INTO public.games VALUES (13, 437, 13);
INSERT INTO public.games VALUES (14, 693, 13);
INSERT INTO public.games VALUES (15, 8, 15);
INSERT INTO public.games VALUES (16, 897, 16);
INSERT INTO public.games VALUES (17, 715, 16);
INSERT INTO public.games VALUES (18, 966, 17);
INSERT INTO public.games VALUES (19, 805, 17);
INSERT INTO public.games VALUES (20, 612, 16);
INSERT INTO public.games VALUES (21, 648, 16);
INSERT INTO public.games VALUES (22, 790, 16);
INSERT INTO public.games VALUES (23, 68, 18);
INSERT INTO public.games VALUES (24, 57, 18);
INSERT INTO public.games VALUES (25, 677, 19);
INSERT INTO public.games VALUES (26, 425, 19);
INSERT INTO public.games VALUES (27, 24, 18);
INSERT INTO public.games VALUES (28, 271, 18);
INSERT INTO public.games VALUES (29, 132, 18);
INSERT INTO public.games VALUES (30, 7, 15);
INSERT INTO public.games VALUES (31, 1, 20);
INSERT INTO public.games VALUES (32, 516, 20);
INSERT INTO public.games VALUES (33, 927, 21);
INSERT INTO public.games VALUES (34, 791, 21);
INSERT INTO public.games VALUES (35, 925, 20);
INSERT INTO public.games VALUES (36, 310, 20);
INSERT INTO public.games VALUES (37, 143, 20);
INSERT INTO public.games VALUES (38, 1, 22);
INSERT INTO public.games VALUES (39, 931, 22);
INSERT INTO public.games VALUES (40, 555, 23);
INSERT INTO public.games VALUES (41, 352, 23);
INSERT INTO public.games VALUES (42, 508, 22);
INSERT INTO public.games VALUES (43, 467, 22);
INSERT INTO public.games VALUES (44, 494, 22);
INSERT INTO public.games VALUES (45, 486, 24);
INSERT INTO public.games VALUES (46, 105, 24);
INSERT INTO public.games VALUES (47, 121, 25);
INSERT INTO public.games VALUES (48, 846, 25);
INSERT INTO public.games VALUES (49, 993, 24);
INSERT INTO public.games VALUES (50, 815, 24);
INSERT INTO public.games VALUES (51, 709, 24);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.users VALUES (8, 'user_1690058839317');
INSERT INTO public.users VALUES (9, 'user_1690058839316');
INSERT INTO public.users VALUES (10, 'Davis');
INSERT INTO public.users VALUES (11, 'user_1690058896794');
INSERT INTO public.users VALUES (12, 'user_1690058896793');
INSERT INTO public.users VALUES (13, 'user_1690058927514');
INSERT INTO public.users VALUES (14, 'user_1690058927513');
INSERT INTO public.users VALUES (15, 'Parthib');
INSERT INTO public.users VALUES (16, 'user_1690059014226');
INSERT INTO public.users VALUES (17, 'user_1690059014225');
INSERT INTO public.users VALUES (18, 'user_1690059151895');
INSERT INTO public.users VALUES (19, 'user_1690059151894');
INSERT INTO public.users VALUES (20, 'user_1690059226311');
INSERT INTO public.users VALUES (21, 'user_1690059226310');
INSERT INTO public.users VALUES (22, 'user_1690059268612');
INSERT INTO public.users VALUES (23, 'user_1690059268611');
INSERT INTO public.users VALUES (24, 'user_1690059291750');
INSERT INTO public.users VALUES (25, 'user_1690059291749');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 51, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.users_user_id_seq', 25, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: games games_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

