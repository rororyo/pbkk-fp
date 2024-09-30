<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tokoku</title>
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

        .pagination {
            margin-top: 30px;
            display: flex;
            justify-content: center;
        }

        .pagination .page-item {
            margin: 0 5px;
        }
    </style>
</head>
<body>
    <x-navbar />
    <div class="container mt-5">
        <h2 class="text-center mb-4">Categories</h2>
        <div class="row" id="category-section">
        </div>

        <div class="category-section">
            <h3 class="text-center mb-4">Items</h3>
            <div class="row" id="item-section">
            </div>
        </div>

        <nav>
            <ul class="pagination" id="pagination-section">
            </ul>
        </nav>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    const API_BASE_URL = 'http://localhost:4000/api/homepage';
    let currentPage = 1;
    let selectedCategory = null;
    let searchQuery = null;

    async function fetchCategories() {
        try {
            const response = await fetch(`${API_BASE_URL}/categories`);
            const result = await response.json();

            if (result.status === 'success') {
                populateCategories(result.data);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    async function fetchItems(page = 1) {
        try {
            const url = new URL(`${API_BASE_URL}/items`);
            url.searchParams.append('page', page);
            if (selectedCategory !== null) {
                url.searchParams.append('category_id', selectedCategory);
            }
            if (searchQuery) {
                url.searchParams.append('search', searchQuery);
            }

            const response = await fetch(url);
            const result = await response.json();

            if (result.status === 'success') {
                populateItems(result.data);
                populatePagination(result.page, result.lastPage);
            }
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    }
    function populateCategories(categories) {
        const categorySection = document.getElementById('category-section');
        categorySection.innerHTML = '';

        const allCategoryButton = document.createElement('div');
        allCategoryButton.classList.add('col-md-3');
        allCategoryButton.innerHTML = `
            <button class="btn btn-primary w-100" onclick="setCategory(null)">All</button>
        `;
        categorySection.appendChild(allCategoryButton);
        categories.forEach(category => {
            const categoryButton = document.createElement('div');
            categoryButton.classList.add('col-md-3');
            categoryButton.innerHTML = `
                <button class="btn btn-primary w-100" onclick="setCategory(${category.id})">${category.name}</button>
            `;
            categorySection.appendChild(categoryButton);
        });
    }


    function setCategory(categoryId) {
        selectedCategory = categoryId;
        fetchItems(1);
    }


    document.getElementById('search-form').addEventListener('submit', function (e) {
        e.preventDefault();
        searchQuery = document.getElementById('search-input').value.trim().toLowerCase(); 
        fetchItems(1); 
    });

    // Populate items into the DOM
    function populateItems(items) {
        const itemSection = document.getElementById('item-section');
        itemSection.innerHTML = '';

        items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('col-md-4');
            itemCard.innerHTML = `
                <div class="card item-card" onclick="window.location.href='/product/${item.id}'">
                    <img src="${item.img_path}" class="card-img-top" alt="${item.item_name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.item_name}</h5>
                        <p class="card-text">Rp${item.price}</p>
                        <button class="btn btn-primary w-100">Add to Cart</button>
                    </div>
                </div>
            `;
            itemSection.appendChild(itemCard);
        });
    }

    // Populate pagination buttons
    function populatePagination(currentPage, lastPage) {
        const paginationSection = document.getElementById('pagination-section');
        paginationSection.innerHTML = '';

        for (let page = 1; page <= lastPage; page++) {
            const pageItem = document.createElement('li');
            pageItem.classList.add('page-item');
            if (page === currentPage) {
                pageItem.classList.add('active');
            }
            pageItem.innerHTML = `
                <button class="page-link" onclick="fetchItems(${page})">${page}</button>
            `;
            paginationSection.appendChild(pageItem);
        }
    }

    // Initial fetch for categories and items (page 1)
    fetchCategories();
    fetchItems(1);
</script>

</body>
</html>
