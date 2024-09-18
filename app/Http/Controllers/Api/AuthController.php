<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;



class AuthController extends Controller
{
    public function register(Request $request){

        $response = ["success" => false];

        $validator = Validator::make($request->all(),[
                'name'     => 'required',
                'email'    => 'required|email',
                'password' => 'required'

        ]);

        if($validator->fails()){
            $response = ["error" => $validator->errors()];
            return response()->json($response,200);
        }


        $input = $request->all();
        $input["password"] = bcrypt($input['password']);

        $user = User::create($input);

        $response["success"] = true;
        $response["token"] = $user->createToken($input["password"])->plainTextToken;

        return response()->json($response,200);

    }



    public function login(Request $request) {
            
        $response = ["success" => false];

        $validator = Validator::make($request->all(),[
                
                'email'    => 'required|email',
                'password' => 'required'
        ]);

        if($validator->fails()){
            $response = ["error" => $validator->errors()];
            return response()->json($response,200);
        }

        if(auth()->attempt(['email' => $request->email,'password' => $request->password])){
            $user = auth()->user();
            $response['token'] = $user->createToken('codea.app')->plainTextToken;
            $response["user"] = $user;
            $response['success'] = true;
            $response['message'] = 'Logueado';
        }

        return response()->json($response,200);

    }


    public function logout() {
        
        $response = ["success" => false]; 
        
        auth()->user()->tokens()->delete();
        
        $response = [
            "success" => true,
            "message" => "Session Cerrada"
            ];

        return response()->json($response,200);
    }
}
