<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tokoku</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        .category-section {
            margin-top: 50px;
        }

        .item-card img {
            height: 200px;
            object-fit: cover;
        }

        .item-card {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <x-navbar />
    <div class="container mt-5">
        <!-- Categories Section -->
        <h2 class="text-center mb-4">Categories</h2>
        <div class="row">
            <div class="col-md-3">
                <button class="btn btn-primary w-100">Electronics</button>
            </div>
            <div class="col-md-3">
                <button class="btn btn-primary w-100">Fashion</button>
            </div>
            <div class="col-md-3">
                <button class="btn btn-primary w-100">Home Appliances</button>
            </div>
            <div class="col-md-3">
                <button class="btn btn-primary w-100">Books</button>
            </div>
        </div>

        <!-- Items Section -->
        <div class="category-section">
            <h3 class="text-center mb-4">Items</h3>
            <div class="row">
                <!-- Item Card 1 -->
                <div class="col-md-4">
                    <div class="card item-card">
                        <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Item 1">
                        <div class="card-body">
                            <h5 class="card-title">Item 1</h5>
                            <p class="card-text">$100</p>
                            <button class="btn btn-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Item Card 2 -->
                <div class="col-md-4">
                    <div class="card item-card">
                        <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Item 2">
                        <div class="card-body">
                            <h5 class="card-title">Item 2</h5>
                            <p class="card-text">$200</p>
                            <button class="btn btn-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Item Card 3 -->
                <div class="col-md-4">
                    <div class="card item-card">
                        <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Item 3">
                        <div class="card-body">
                            <h5 class="card-title">Item 3</h5>
                            <p class="card-text">$150</p>
                            <button class="btn btn-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Item Card 4 -->
                <div class="col-md-4">
                    <div class="card item-card">
                        <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Item 4">
                        <div class="card-body">
                            <h5 class="card-title">Item 4</h5>
                            <p class="card-text">$80</p>
                            <button class="btn btn-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Item Card 5 -->
                <div class="col-md-4">
                    <div class="card item-card">
                        <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Item 5">
                        <div class="card-body">
                            <h5 class="card-title">Item 5</h5>
                            <p class="card-text">$120</p>
                            <button class="btn btn-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Item Card 6 -->
                <div class="col-md-4">
                    <div class="card item-card">
                        <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Item 6">
                        <div class="card-body">
                            <h5 class="card-title">Item 6</h5>
                            <p class="card-text">$90</p>
                            <button class="btn btn-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
