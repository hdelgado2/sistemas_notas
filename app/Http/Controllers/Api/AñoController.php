<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\years;



class AñoController extends Controller
{
    

       public function index(){
            
             return [
                'years' =>$years = years::all() 
            ];


        }

        public function destroy($id){
            
            try {
                
                $years = years::find($id)->delete();
                
                if($years) return [
                    'years' => years::all(),
                    'msg' => 'Se ha borrado'
                ];
                
            } catch (\Throwable $th) {
                //throw $th;
            }

        }


}
