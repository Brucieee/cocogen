<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/home-create', [HomeController::class, 'createTodo'])->name('home.create');
Route::get('/buttons', [HomeController::class, 'buttons'])->name('buttons');
Route::get('/fields', [HomeController::class, 'fields'])->name('fields');
Route::get('/modals', [HomeController::class, 'modals'])->name('modals');
Route::get('/progressbar', [HomeController::class, 'progressbar'])->name('progressbar');






require __DIR__.'/auth.php';
