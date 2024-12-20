--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2024-11-20 22:00:23

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
-- TOC entry 218 (class 1259 OID 32778)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 32777)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_id_seq OWNER TO postgres;

--
-- TOC entry 4811 (class 0 OID 0)
-- Dependencies: 217
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 220 (class 1259 OID 32816)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id integer NOT NULL,
    item_name character varying NOT NULL,
    img_path character varying NOT NULL,
    description character varying NOT NULL,
    stock integer NOT NULL,
    price integer NOT NULL,
    category_id integer,
    tags text[]
);


ALTER TABLE public.item OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 32815)
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.item_id_seq OWNER TO postgres;

--
-- TOC entry 4812 (class 0 OID 0)
-- Dependencies: 219
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- TOC entry 216 (class 1259 OID 24628)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    role character varying DEFAULT 'user'::character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24627)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 4813 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 4646 (class 2604 OID 32781)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 4647 (class 2604 OID 32819)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 4644 (class 2604 OID 24631)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 4803 (class 0 OID 32778)
-- Dependencies: 218
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, name) FROM stdin;
1	Sandals
2	Sneakers
3	Crocs
4	High Heels
5	Boots
\.


--
-- TOC entry 4805 (class 0 OID 32816)
-- Dependencies: 220
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item (id, item_name, img_path, description, stock, price, category_id, tags) FROM stdin;
54	iPhone 14	Latest iPhone model	path/to/iphone14.jpg	15999000	100	1	\N
44	Casual Beach Sandals	https://images.tokopedia.net/img/cache/700/hDjmkQ/2024/1/24/8d34dee9-ed0d-4229-a120-31a1896f747d.jpg	Comfortable sandals for beach outings.	100	300000	1	{sandals,beach,casual}
45	Sporty Sneakers	https://down-id.img.susercontent.com/file/ae9e90bf2ea823be9d95c47b1a9f63ba	Durable sneakers for everyday use.	150	600000	2	{sneakers,sport,running}
46	Classic Crocs	https://www.crocs.co.id/media/catalog/product/cache/94b40b305aac1a23ab36b89567ee43e0/0/1/01-CROCS-FFSSDCCRA-CCR10001-2Y2-White.jpg	Classic Crocs for casual wear.	200	400000	3	{crocs,classic,casual}
47	Elegant High Heels	https://down-id.img.susercontent.com/file/id-11134207-7r98q-ln10oin0310df7	Elegant high heels perfect for formal occasions.	50	900000	4	{"high heels",formal,elegant}
48	Leather Boots	https://contents.mediadecathlon.com/p2439815/k$a8e150866e34c30a1232b6e833a39864/women-s-waterproof-leather-high-trekking-boots-vibram-mt500-leather-forclaz-8786160.jpg?f=1920x0&format=auto	Sturdy leather boots for outdoor adventures.	75	1000000	5	{boots,leather,outdoor}
49	Summer Flip Flops	https://i.pinimg.com/originals/a0/8b/bc/a08bbc17b64bbe2bec1a7f5a3da59f25.jpg	Lightweight flip flops for summer.	120	200000	1	{sandals,summer,"flip flops"}
50	Fashion Sneakers	https://down-id.img.susercontent.com/file/id-11134601-7r98y-lsubb7ctmbnhdc	Trendy sneakers for everyday wear.	140	500000	2	{sneakers,fashion,trendy}
51	Kids Crocs	https://media.crocs.com/images/f_auto,q_auto,dpr_auto/products/category-carousel-kidsclassics.jpg/Crocs	Crocs designed for kids with fun colors.	180	350000	3	{crocs,kids,fun}
52	Casual High Heels	https://dynamic.zacdn.com/GJ6KXUuoHY9hKvg-fd_vYs-YsaA=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/heliva-0549-2421854-1.jpg	Comfortable casual high heels for daily wear.	60	700000	4	{"high heels",casual,comfort}
53	Hiking Boots	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ323UnbxQI3sWDZ0Gl15ImuDt6Fs3Oqd5eHQ&s	Durable boots for hiking and rough terrains.	90	1200000	5	{boots,hiking,durable}
\.


--
-- TOC entry 4801 (class 0 OID 24628)
-- Dependencies: 216
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, email, password, role) FROM stdin;
4	test	test@mail.com	$argon2id$v=19$m=65536,t=3,p=4$hXi3iD6vLwQdLDmsQmRCMA$vKBujOOZ7jnKMLiMwFJ7XVfbFLTQLSjeDJtJXkkGKY4	user
5	testadmin	test@admin.com	$argon2id$v=19$m=65536,t=3,p=4$E8lZIOTurFw7CX7GF+NPVA$cejWP0/mpulQ/WQl8OY1yGFjvdEPo4hqK+6YEdcjB3k	admin
6	test store	store@mail.com	$argon2id$v=19$m=65536,t=3,p=4$a/2XPlJnAva3pnMZoYNo5g$SU1JsxHHBlNJIoTJmuSiOn+YXOlOuAWbnyQ81SyfLwQ	store-owner
7	rororyo	rororyo@mail.com	$argon2id$v=19$m=65536,t=3,p=4$WLSg9UXsewut6ozZUCY9zA$fIFp7B0HJ0QKU6PhKlwomvzyFPKSWPOkuGQeA6dOJII	user
\.


--
-- TOC entry 4814 (class 0 OID 0)
-- Dependencies: 217
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- TOC entry 4815 (class 0 OID 0)
-- Dependencies: 219
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_id_seq', 54, true);


--
-- TOC entry 4816 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 7, true);


--
-- TOC entry 4653 (class 2606 OID 32785)
-- Name: category PK_9c4e4a89e3674fc9f382d733f03; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY (id);


--
-- TOC entry 4649 (class 2606 OID 24636)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 4655 (class 2606 OID 32823)
-- Name: item PK_d3c0c71f23e7adcf952a1d13423; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY (id);


--
-- TOC entry 4651 (class 2606 OID 24638)
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- TOC entry 4656 (class 2606 OID 32824)
-- Name: item FK_91ba90f150e8804bdaad7b17ff8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "FK_91ba90f150e8804bdaad7b17ff8" FOREIGN KEY (category_id) REFERENCES public.category(id);


-- Completed on 2024-11-20 22:00:23

--
-- PostgreSQL database dump complete
--

