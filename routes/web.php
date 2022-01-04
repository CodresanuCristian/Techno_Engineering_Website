<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TEAController;
use App\Mail\TEAMail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/legal-notice', function () {
    return view('legal-notice');
});

Route::get('/home', function(){
    return view('home');
});
Route::get('/subscribe', [TEAController::class, 'Subscribe']);


Route::get('/about', function(){
    return view('about');
});


Route::get('/services', function(){
    return view('services');
});


Route::get('/portfolio', function(){
    return view('portfolio');
});


Route::get('/publications', function(){
    return view('publications');
});


Route::get('/contact', function(){
    return view('contact');
});
Route::get('/send-email', [TEAController::class, 'SendEmail']);
Route::get('/email', function(){
    return new TEAMail();
});


Route::get('/careers', function(){
    return view('careers');
});