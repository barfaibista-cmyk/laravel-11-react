<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    public function index()
    {
    	$categories = Category::all();
    	return Inertia::render('Categories/index', [ 'categories' => $categories]);
    }
}
