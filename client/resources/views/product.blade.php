<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Details</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <x-navbar />
    <div class="container mt-5">
        <div class="row" id="product-details">
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        const API_BASE_URL = 'http://localhost:4000/api/homepage';
        const productId = window.location.pathname.split('/').pop(); 


        async function fetchProductDetails() {
            try {
                const response = await fetch(`${API_BASE_URL}/item/${productId}`);
                const result = await response.json();

                if (result.status === 'success') {
                    populateProductDetails(result.data);
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        }

        // Populate product details into the DOM
        function populateProductDetails(product) {
            const productDetails = document.getElementById('product-details');
            productDetails.innerHTML = `
                <div class="col-md-6">
                    <img src="${product.img_path}" class="img-fluid" alt="${product.item_name}">
                </div>
                <div class="col-md-6">
                    <h3>${product.item_name}</h3>
                    <p>Price: Rp${product.price}</p>
                    <p>${product.description}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            `;
        }

        fetchProductDetails();
    </script>
</body>
</html>
