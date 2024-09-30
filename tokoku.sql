PGDMP                      |            tokoku-pbkk-fp    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
    public          postgres    false    220   M       �          0    24628    user 
   TABLE DATA           E   COPY public."user" (id, username, email, password, role) FROM stdin;
    public          postgres    false    216   e(       �           0    0    category_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.category_id_seq', 1, false);
          public          postgres    false    217            �           0    0    item_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.item_id_seq', 43, true);
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
       public          postgres    false    218    220    4653            �   �   x�=��N�0E�3_�+�p[^K��FBU*��LT�y�E�{�؞{�q�%�d��;ŘH7А+:Wv�,�\4/.���3U�+9-�`��8��m$��S����Ƴ\��0Hh���0Ux(|����~⬋����<�3k��[�g���]��%.
Z�8O�/���^�֏(�hWp$�Ѯ�_�uy�^Z����{���׽����R�� ��\k      �   
  x��X�n�����b��MB��(Q*P���N,G��8)
KrInDr�R2[�k��;OrfvI�>��	�8���|3kױ��׿�7�dK.�Gv��<U�
ȥUS�O��6'F#c�ά�Jq�f��HJcF4���!�B�D�ye��cy��|��׵6��XQ���][�f�hGx-��'�YXaѳ��QevA� vK�#��� �J"s�0i�s�r��u�z�FɆU�$o��'*��
�!F���~di�d~
:ҒU��1VVI��}�K�Z��άuA�})@ٴHBBK^ɓ�rL�V�)/:2�HJ]0���yq`-
�CU�y���6;�f}�}و��!��mو�+ќLG����m��*Y�1Ix�=@�0�I/lA�W�����&2�3U$��e�z��VjM�mC���&��l	�$���b��X�Һ�%+�tES�!k�T�N��H#M+'�Aä�U���4����,3�-����)g䊪8�/C�|�؝�ņ�*V�t������UP��;���P��FG嚨���+`�b�$�&[^�ɛBt��T�0ERx@����Q[���²��#S�u�B��-iN�E��L�M�c%����E&���$��6)4-���7X��	2��npJwL�l�#$�i�isD=[Qˋ��;}a,-���u'y�+$T�ya%*<j�62��A2E�� ghl��M7L���[k
)۩�u��r��<D�e�7Pų\�����"�͈�d���q,s��y��� �'+�7a:P�-Cd<`B'�����X+�vamLj����+J�G�����Na���M�ꈡ��T����#C����
���΅���4��3�m#U4�h�)9mL�A1��}�ZA[����9R�N@����ha��m�-��z�q��i�+�JD��QNn���vMG{������V ��D�#"%s�kw��d�,���|�k��[���������mB�a錴�֖�ŷ��ٲ��X֬_!;���c���A����Ζ)�f��Yw[�>M���P�m�+5j��|6Q6�l�ݑ7� , =�`��^��z�EB�%v�F�<l�3�V=��20��.�ֵ���L�x�`Y5�7Y�S�}l�������/a��6-Qi��ހ��L*8R�2ÿm!J:^p��!-��ر�pġ�1<}�,�j�%��`�p5��?��ល��%��yd/�|ʡ��Vr�C��E=�
���qN��߻nxQ�K��0A�AHF����u�H���{Zb�*�9�ڗ���T�h��u�Ŭ���!�@�
kx����I�Y�xu.�1���hY��_�'�x� �/�!��7a+��� 4j!O����y�f���Vyc�g���Q���8�������з��Zkި<���j��B).�b-���3�e��A�Ys��u�¢�x����:��x~M$��T�nk�;K��8}X�}9��V��6�xj���k�I��-k+W��?M�Pæ�KlU�$���a�r�K�1�ˏ�����c���?}>���h��ww��I������w�/�F��aw���n`�e���8n8����m��1>�Z�7[J;�u<'x���_&<��I5����)�ƞ����,�Ȩ���6�G�í���R�2o�7�a⸞�đ����$H�e�.�d鱹�đ��E���g7p��w\gf=��)�}+E(����9��	�V+�m���N@�=���[_7>,l��%)O������p��.�Q�������ow�Ixy�.�Uh�Op��V1Ã����D0�����R� }K������1jC^'m�v}��`���hx΂M���3[Mv�5��s��h�=�l�[��|�Eg��G 4g�ޒ�*iO�}	�c.�Ǜ��xس�u�q*W'���* ��|wM>}��&J�E�)�TL1\��~8��ˏ(.7S����j�:S�Η)K{���/b�^:���H�x5��x9�w0x;U��G�0��]ԏ:�(�~��v�᭺g���g�AQ��᪀��N��+ݿ��"<��4��|{�C��	Pd�]���3��X�O�=�>޿�yuy������U0�+�B�v���i 04�z5�>)�(D֍�%��������b����w���~�h%Gy�&G9)K9��d���خ��|�	적bڅ�=Ǎ�P��s��	)���U�$�Q��&׋vy��V�ϋ��+m(ye���a)�܁���'[�{��rxdQ9\:��Z������3�����2��	�B�`1z�4�
�LI+9�|-��}�R� �A-���U`{�K��f+�1[�Jx{O�G���\��L�WLKqZP�Z�χ\D�;T&������=��5ى���8��QT��÷C�~�v�7�����_�ͮ���7> ���	���+�bQ9`�-�~�Kt�]̇!�I^���3YӤ����#ܯ�U��ь��n��'-�iuzQ��`�_Z�U�"�-���d2�ɡ�au���= q3E�Q�]������; g�      �   ]  x����n�@���]���7]�/(:LQ�
*8�P�ŧ��toN���|G�0/���~D�'F9�g�� T��Љ,I��^L��t"��	�\����~��*��i#tP��X�Ѻ֠���G��bӎ�9,�{�-O��<�x�����g��|��bD:ږ�V+3WYj���W�)��ߣiIp��d��A���*XXL���[�x*ܸ���-�-/Xrm�l��]��D�|!M��m�t�n ���jJ6Pg[HK;BI�sA����vs~�{?X�<d(\�Ӱ��rǴ/㝛�uY��~�ͼ�]g]K�i������ 5�ս�,�v,t+�8T� A]�����,���     