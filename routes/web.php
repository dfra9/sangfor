<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FormSubmissionController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']);        // Get all users
    Route::get('/{id}', [UserController::class, 'show']);     // Get user by ID
    Route::post('/', [UserController::class, 'store']);       // Create a new user
    Route::put('/{id}', [UserController::class, 'update']);   // Update user
    Route::delete('/{id}', [UserController::class, 'destroy']); // Delete user
});

// Your routes here
Route::post('/submit-form', [FormSubmissionController::class, 'store'])->name('submit.form');
Route::get('/thank-you', function () {
    return Inertia::render('Thankyou');
})->name('thankyou');

require __DIR__.'/auth.php';
