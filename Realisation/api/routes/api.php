<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('groupe/{id}', [DashboardController::class,'Groupe'])->name('Groupe');
Route::get('formateur', [DashboardController::class,'formateur'])->name('formateur');
Route::get('BriefSelect/{idF}/{idB}', [DashboardController::class,'BriefSelect'])->name('BriefSelect');
