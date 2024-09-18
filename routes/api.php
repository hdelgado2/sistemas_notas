<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\{
    EstudianteController,
    AuthController,
    UserController
};
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    //PUBLIC
    Route::get('/public/{slug}',[EstudianteController::class,'profesional']);
    //Auth
    Route::post('/auth/register',[AuthController::class,'register']);
    Route::post('/auth/login',[AuthController::class,'login']);
    

    //PRIVATE
    Route::group(['middleware' => 'auth:sanctum'],function (){
        //auth
        Route::post('/auth/logout',[AuthController::class,'logout']);

        //rol Instituto puede ser profesor o Estudiante
        Route::apiResource('/admin/estudiantes',UserController::class);

    });
});




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
