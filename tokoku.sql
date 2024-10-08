PGDMP  "                	    |            tokoku-pbkk-fp    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24626    tokoku-pbkk-fp    DATABASE     �   CREATE DATABASE "tokoku-pbkk-fp" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
     DROP DATABASE "tokoku-pbkk-fp";
                postgres    false            �            1259    32778    category    TABLE     _   CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    32777    category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public          postgres    false    218            �           0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public          postgres    false    217            �            1259    32816    item    TABLE       CREATE TABLE public.item (
    id integer NOT NULL,
    item_name character varying NOT NULL,
    img_path character varying NOT NULL,
    description character varying NOT NULL,
    stock integer NOT NULL,
    price integer NOT NULL,
    category_id integer,
    tags text[]
);
    DROP TABLE public.item;
       public         heap    postgres    false            �            1259    32815    item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.item_id_seq;
       public          postgres    false    220            �           0    0    item_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;
          public          postgres    false    219            �            1259    24628    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    role character varying DEFAULT 'user'::character varying NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    24627    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    216            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    215            &           2604    32781    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            '           2604    32819    item id    DEFAULT     b   ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);
 6   ALTER TABLE public.item ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            $           2604    24631    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    32778    category 
   TABLE DATA           ,   COPY public.category (id, name) FROM stdin;
    public          postgres    false    218   Y       �          0    32816    item 
   TABLE DATA           e   COPY public.item (id, item_name, img_path, description, stock, price, category_id, tags) FROM stdin;
    public          postgres    false    220   �       �          0    24628    user 
   TABLE DATA           E   COPY public."user" (id, username, email, password, role) FROM stdin;
    public          postgres    false    216   "       �           0    0    category_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.category_id_seq', 1, false);
          public          postgres    false    217            �           0    0    item_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.item_id_seq', 53, true);
          public          postgres    false    219            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 7, true);
          public          postgres    false    215            -           2606    32785 '   category PK_9c4e4a89e3674fc9f382d733f03 
   CONSTRAINT     g   ALTER TABLE ONLY public.category
    ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.category DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03";
       public            postgres    false    218            )           2606    24636 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    216            /           2606    32823 #   item PK_d3c0c71f23e7adcf952a1d13423 
   CONSTRAINT     c   ALTER TABLE ONLY public.item
    ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.item DROP CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423";
       public            postgres    false    220            +           2606    24638 #   user UQ_e12875dfb3b1d92d7d7c5377e22 
   CONSTRAINT     c   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22";
       public            postgres    false    216            0           2606    32824 #   item FK_91ba90f150e8804bdaad7b17ff8    FK CONSTRAINT     �   ALTER TABLE ONLY public.item
    ADD CONSTRAINT "FK_91ba90f150e8804bdaad7b17ff8" FOREIGN KEY (category_id) REFERENCES public.category(id);
 O   ALTER TABLE ONLY public.item DROP CONSTRAINT "FK_91ba90f150e8804bdaad7b17ff8";
       public          postgres    false    218    220    4653            �   >   x�3�N�KI�)�2��KM�N-*�2�t.�O.�2���L�P�HMʛr:��s��qqq ��      �   a  x��Uko�8�L~�VU+a0o�U�d����Jg�nV+U~1��`��4��k�d�4_vG�����s�9$�� z$��VV�K�q�h�6��GA [��7j�z�%�;a��*`-��>�֮/�GI�<N�%s�DQ�Ha�$,ʬʓ������Pm�Ch#\=���NP�hd�Ҿb�����й�zS��&�wI�,{ȵu�� k1�K�j�!�}@��Q���Έ��L�A%Q��*��b*J^�,�iH�*�)qN�a��=�7b�r�u!'�L��� # ����c�A- 3s�Z2w1(���l|f� *_�dɆ4j��#3;�˄&��8%��$�	�3Z�i�����C���q�D�����b������U���҈��M�ͤ�A߉��d.,vn'�����ϝ��"�q��vυh�K$Ga�I�s�eq��.�Jv81���k�����^�`f� +���`f��:qn���9�sF�^81�ܷJ�=�J�O���Q7��P�Q�E���H!��E��8a1�I�#��"�	�dI�Q��Fb� �Tj��Ņ� �k�D���Fҁ��5)�� 8������۾����2���"sLF����uw��)�D��+�~E����S����Թ�b��No���rl[Hv���?������%Er%;�f@pPЀ2�)(eaN��RQ�W)�9I�*J�� ,����[�3*{ƄZO'��"l��o����û��)�5������I�@&v���#�93-�jΜ?���;���0>��jF�) ���#����
ڝ�W�^�z��~�n�A[�+5l#������;�jKs0�3��-W��|�n���j�\�5X�-@��Ϻ��������i%��g����.��<�󫲾�Y������J�7ǖxP�>��t�l_����<�/7�������#�m�>sԢ�7�4)Q�Da�&(�����GbK�D6�m˰�?o�^�����9�V�OCtl��Fpdh��Ռ�Q__Û�7��]�Q����/��������	�w�xb�S��8�|��={)��� z0���Hk{%�R�Y�s���<w���'���      �   ]  x����n�@���]���7]�/(:LQ�
*8�P�ŧ��toN���|G�0/���~D�'F9�g�� T��Љ,I��^L��t"��	�\����~��*��i#tP��X�Ѻ֠���G��bӎ�9,�{�-O��<�x�����g��|��bD:ږ�V+3WYj���W�)��ߣiIp��d��A���*XXL���[�x*ܸ���-�-/Xrm�l��]��D�|!M��m�t�n ���jJ6Pg[HK;BI�sA����vs~�{?X�<d(\�Ӱ��rǴ/㝛�uY��~�ͼ�]g]K�i������ 5�ս�,�v,t+�8T� A]�����,���     