<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Empresa;
class EmpresaController extends Controller
{
    function store(Request $request) {

        try {
            
            $data = $request->all();
            Empresa::create([
                'name' => $data['Empresa']
            ]);
            return response()->json(['message' => 'Empresa creada con exito'], 200);
        } catch (\Exception $th) {
            return response()->json(['message' => 'Error al crear la empresa'], 500);
        }
        
    }


}
