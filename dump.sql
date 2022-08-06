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
    "visitCount" integer NOT NULL,
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
1	2	885324c5-7a01-488c-ae92-1a28f8044ee9	2022-08-04 18:40:53.04094
2	1	e3cd7733-a886-4280-ada2-7bc489f01a37	2022-08-05 17:08:49.714161
35	3	cec8d22b-2461-4421-acc5-30568a17442c	2022-08-06 22:39:30.376431
36	3	62b39f27-a906-4a7f-98e2-d23ea291e419	2022-08-06 22:40:24.490626
\.


--
-- Data for Name: shortlys; Type: TABLE DATA; Schema: public; Owner: rxhcdanplnoosy
--

COPY public.shortlys (id, "shortUrl", url, "userId", "visitCount", "createAt") FROM stdin;
4	Z_Mu610a	https://www.google.com	2	0	2022-08-04 23:59:55.06035
3	mACmU24Z	https://www.notion.so/Projeto-Shortly-API-fe5c5d7793cc422cab739a7b9bf3c259	2	3	2022-08-04 23:28:08.132334
5	NVJdJH7c	https://google.com	2	0	2022-08-05 17:10:11.309497
6	iW7Xu0lU	https://google.com	1	0	2022-08-05 17:10:27.007942
8	r3Gwpmaq	https://google.com	1	0	2022-08-05 17:10:30.000396
9	0SQJHAmN	https://google.com	1	0	2022-08-05 17:14:18.211838
10	JAKpbHII	https://google.com	1	0	2022-08-05 17:14:20.586025
42	RupK3xX8	https://www.youtube.com/watch?v=jfKfPfyJRdk	1	0	2022-08-06 22:50:52.753671
45	UXLMdSja	https://www.youtube.com/watch?v=jfKfPfyJRdk	3	1	2022-08-06 22:58:04.837948
44	hnvI_EJH	https://www.youtube.com/watch?v=jfKfPfyJRdk	3	1	2022-08-06 22:58:03.273858
7	DBhY8xV5	https://google.com	1	6	2022-08-05 17:10:28.5643
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: rxhcdanplnoosy
--

COPY public.users (id, name, email, password, "createAt") FROM stdin;
1	João	joao@driven.com.br	$2b$10$RIPryyThkXICbiB94Gs/9e0LEENf7uXYBvJ.5GRToDlMsE3RjBFs.	2022-08-04 18:05:06.108106
2	luis	luis@driven.com.br	$2b$10$5jzGy5aH6czdueOI6bSt6eC2wDBM0PLUzbdvFSC6td6/S3oTcG5Zu	2022-08-04 18:07:06.103547
3	João	joao@driven.com	$2b$10$ze86Wa2rl/h74svNLEEOIeWXqwXq1QkgL8JspYhF2uvZqO6dTiAv6	2022-08-06 22:14:06.398797
4	teste	teste@gmail.com	$2b$10$5XcPka2CT42TnAuPtEmJiuilb6R82V.I7ES4XerCw9ElEwAankPKO	2022-08-06 22:24:31.714049
6	teste	teste2@gmail.com	$2b$10$PBNrN5WWSZbrmXQxZdzWn.mUHNtasM42ji1RtRZqkXKLTqgIr4CYK	2022-08-06 22:28:02.010425
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rxhcdanplnoosy
--

SELECT pg_catalog.setval('public.sessions_id_seq', 36, true);


--
-- Name: shortlys_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rxhcdanplnoosy
--

SELECT pg_catalog.setval('public.shortlys_id_seq', 45, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rxhcdanplnoosy
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


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
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: rxhcdanplnoosy
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO rxhcdanplnoosy;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO rxhcdanplnoosy;


--
-- PostgreSQL database dump complete
--

