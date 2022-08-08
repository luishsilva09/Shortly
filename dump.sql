--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4

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

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: u882ucn8g7h6m9
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO u882ucn8g7h6m9;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: rxhcdanplnoosy
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.sessions OWNER TO rxhcdanplnoosy;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: rxhcdanplnoosy
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO rxhcdanplnoosy;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rxhcdanplnoosy
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: shortlys; Type: TABLE; Schema: public; Owner: rxhcdanplnoosy
--

CREATE TABLE public.shortlys (
    id integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "userId" integer NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.shortlys OWNER TO rxhcdanplnoosy;

--
-- Name: shortlys_id_seq; Type: SEQUENCE; Schema: public; Owner: rxhcdanplnoosy
--

CREATE SEQUENCE public.shortlys_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shortlys_id_seq OWNER TO rxhcdanplnoosy;

--
-- Name: shortlys_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rxhcdanplnoosy
--

ALTER SEQUENCE public.shortlys_id_seq OWNED BY public.shortlys.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: rxhcdanplnoosy
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO rxhcdanplnoosy;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: rxhcdanplnoosy
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO rxhcdanplnoosy;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rxhcdanplnoosy
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: rxhcdanplnoosy
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: shortlys id; Type: DEFAULT; Schema: public; Owner: rxhcdanplnoosy
--

ALTER TABLE ONLY public.shortlys ALTER COLUMN id SET DEFAULT nextval('public.shortlys_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: rxhcdanplnoosy
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: rxhcdanplnoosy
--

COPY public.sessions (id, "userId", token, "createAt") FROM stdin;
1	1	edbe5381-62ff-463f-a64c-eb7099b17bf9	2022-08-08 15:03:03.032132
2	2	8d2c354d-97d7-4bc2-919c-3ee6ea843a6c	2022-08-08 15:03:29.38108
3	3	66cb670f-686d-404f-97a0-fc383624de02	2022-08-08 15:03:44.672643
\.


--
-- Data for Name: shortlys; Type: TABLE DATA; Schema: public; Owner: rxhcdanplnoosy
--

COPY public.shortlys (id, "shortUrl", url, "userId", "visitCount", "createAt") FROM stdin;
1	ah7Fii8z	https://...	1	0	2022-08-08 15:22:09.665221
2	mysI3FAc	https://...	1	0	2022-08-08 15:22:11.547105
3	U1SvnQz5	https://...	1	0	2022-08-08 15:22:12.403121
4	Vg8IZbI1	https://...	1	0	2022-08-08 15:22:13.152596
5	TQzJtqfz	https://...	1	0	2022-08-08 15:22:13.937761
6	vdKATtkN	https://...	1	0	2022-08-08 15:22:14.688043
7	77W9Wmc7	https://...	1	4	2022-08-08 15:22:46.603613
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: rxhcdanplnoosy
--

COPY public.users (id, name, email, password, "createAt") FROM stdin;
1	João	joao@driven.com.br	$2b$10$eV73SRwK7rwL9M5IiaCCae.8dTkHBMfXuaKXWw.MQxpx.I10Flrea	2022-08-08 15:01:17.640909
2	luis	luis@driven.com.br	$2b$10$HeD3CD1E6NXrhbcLoV3UtuoGPwSnZVSHmP7FP6jwL38UekPS5FnX2	2022-08-08 15:01:34.955549
3	teste	teste@driven.com.br	$2b$10$b2PEL/KgAWfSt4JsAxwAJu1phHKapz.FaVZZqiv7X.CMYETQD1sWm	2022-08-08 15:01:44.391122
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rxhcdanplnoosy
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: shortlys_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rxhcdanplnoosy
--

SELECT pg_catalog.setval('public.shortlys_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rxhcdanplnoosy
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: rxhcdanplnoosy
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: shortlys shortlys_pkey; Type: CONSTRAINT; Schema: public; Owner: rxhcdanplnoosy
--

ALTER TABLE ONLY public.shortlys
    ADD CONSTRAINT shortlys_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: rxhcdanplnoosy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: rxhcdanplnoosy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rxhcdanplnoosy
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: shortlys shortlys_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rxhcdanplnoosy
--

ALTER TABLE ONLY public.shortlys
    ADD CONSTRAINT "shortlys_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: u882ucn8g7h6m9
--

GRANT USAGE ON SCHEMA heroku_ext TO rxhcdanplnoosy;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO rxhcdanplnoosy;


--
-- PostgreSQL database dump complete
--

