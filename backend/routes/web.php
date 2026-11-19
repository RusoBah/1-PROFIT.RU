<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;

Route::get('/', function () {
    return redirect('/admin');
});

Route::get('/about',[AboutController::class, 'index']);


