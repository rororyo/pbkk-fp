<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar Example</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        /* Custom styles to match the Tokopedia design */
        .navbar-custom {
            background-color: white;
            padding: 10px 30px;
            border-bottom: 1px solid #ddd;
        }

        .navbar-custom .navbar-brand img {
            height: 30px;
        }

        .navbar-custom .nav-link {
            color: #333;
            font-weight: bold;
            margin-right: 15px;
        }

        .navbar-custom .search-bar {
            width: 60%;
        }

        .navbar-custom .btn-outline-success {
            color: #28a745;
            border-color: #28a745;
        }

        .navbar-custom .btn-outline-success:hover {
            background-color: #28a745;
            color: white;
        }

        .navbar-custom .btn-primary {
            background-color: #28a745;
            border: none;
        }

        .navbar-custom .btn-outline-primary {
            border: 1px solid #28a745;
            color: #28a745;
        }

        .navbar-custom .btn-outline-primary:hover {
            background-color: #28a745;
            color: white;
        }

        .navbar-custom .btn-outline-secondary:hover {
            background-color: #6c757d;
            color: white;
        }

        .navbar-custom .cart-icon {
            font-size: 1.5rem;
            margin-right: 10px;
        }
    </style>
</head>

<body>

    <nav class="navbar navbar-custom" >
        <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" onclick="window.location.href='/'">
                <img src="/images/logo.png" alt="Logo">
            </a>



            <!-- Search bar -->
<form class="d-flex search-bar" role="search" id="search-form">
    <input class="form-control me-2" type="search" placeholder="Cari di Tokoku" aria-label="Search" id="search-input">
    <button class="btn btn-outline-success" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
    </button>
</form>




            <!-- Auth buttons (login/signup) -->
            <div class="d-flex">
                <button class="btn btn-outline-primary me-2" onclick="location.href='/login'">Masuk</button>
                <button class="btn btn-primary" onclick="location.href='/register'">Daftar</button>
            </div>
        </div>
    </nav>

    <!-- Bootstrap JS and Icon Library -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.js"></script>

</body>

</html>