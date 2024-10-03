<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function searchByCategory(Request $request)
    {
        // Dapatkan class yang dideteksi dari query parameter
        $detectedClass = $request->query('detectedClass');

        // Cari produk yang sesuai dengan class yang dideteksi (kategori)
        $products = Product::where('category', 'LIKE', '%' . $detectedClass . '%')->get();

        // Kirimkan hasil ke view welcome.blade.php
        return view('welcome', ['products' => $products, 'detectedClass' => $detectedClass]);
    }
}
