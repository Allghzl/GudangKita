<?php

use App\Http\Controllers\DataController;
use App\Http\Controllers\ProfileController;
use GuzzleHttp\Middleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return Inertia::render('Homepage', []);
});

Route::post('/data', [DataController::class, 'store'])->middleware(['auth', 'verified']);
Route::get('/data/{id}/edit', [DataController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.item');
Route::post('/data/update', [DataController::class, 'update'])->middleware(['auth', 'verified'])->name('update.item');
Route::post('/data/delete', [DataController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.item');
Route::get('/report', [DataController::class, 'index'])->middleware(['auth', 'verified'])->name('display.items');


Route::get('/dashboard', [DataController::class, 'Dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
