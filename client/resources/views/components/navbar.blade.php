<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar Example</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
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

        .navbar-custom .search-bar img {
            width: 25px;
            height: 25px;
            cursor: pointer;
            margin-left: 10px;
        }

    </style>
</head>

<body>

    <nav class="navbar navbar-custom">
        <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" onclick="window.location.href='/'">
                <img src="/images/logo.png" alt="Logo">
            </a>

            <!-- Search bar -->
            <form class="d-flex search-bar" role="search" id="search-form">
                <input class="form-control me-2" type="search" placeholder="Cari di Tokoku" aria-label="Search"
                    id="search-input">
                <button class="btn btn-outline-success" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path
                            d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z">
                        </path>
                    </svg>
                </button>
            </form>

            <!-- Search by image -->
            <form class="d-flex align-items-center ms-3" id="image-search-form" enctype="multipart/form-data">
                <label for="image-input" class="btn btn-outline-secondary d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                        <path d="M10.5 3a.5.5 0 0 1 .492.41L11 3.5V4h.999a2 2 0 0 1 1.995 1.85L14 6.5v6a2 2 0 0 1-1.85 1.995L12 14.5H4a2 2 0 0 1-1.995-1.85L2 12.5v-6a2 2 0 0 1 1.85-1.995L4 4h.999v-.5a.5.5 0 0 1 .41-.492L5.5 3h5zm-3.5 0a1.5 1.5 0 0 1 1.493 1.356L8.5 4h-1l-.007-.144A1.5 1.5 0 0 1 7.5 3zM4 5H3v1h1V5zm9 0h-1v1h1V5zm1 1.5a1 1 0 0 0-.883-.993L13 5.5h-1v1h1v6H4v-6h1v-1H4l-.117.007A1 1 0 0 0 3 6.5v6a1 1 0 0 0 .883.993L4 13.5h8a1 1 0 0 0 .993-.883L13 12.5v-6z"/>
                    </svg>
                    <span class="ms-2">Search by Image</span>
                </label>
                <input type="file" id="image-input" accept="image/*" style="display:none;" />
            </form>

            <div class="d-flex">
                <button class="btn btn-outline-primary me-2" onclick="location.href='/login'">Masuk</button>
                <button class="btn btn-primary" onclick="location.href='/register'">Daftar</button>
            </div>
        </div>
    </nav>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.js"></script>

    <script>
        document.getElementById('image-input').addEventListener('change', async function () {
        const imageFile = this.files[0];

        if (!imageFile) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append('file', imageFile);

        try {
            const response = await fetch('https://detect.roboflow.com/pbkk-footwear/1?api_key=n3srtvio0FyZNRt19mra', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log('Full Response:', data);

            if (data && data.predictions && data.predictions.length > 0) {
                const detectedClass = data.predictions[0].class;

                const categoryMap = {
                    "Sandals": 1,
                    "Sneakers": 2,   
                    "Crocs": 3,
                    "High Heels": 4,    
                    "Boots": 5,
                };

                const categoryId = categoryMap[detectedClass];
                console.log(categoryId);
                if (categoryId) {
                    setCategory(categoryId);
                } else {
                    alert("No category found for the detected object.");
                }
            } else {
                alert("No objects detected.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });

    </script>

</body>

</html>
