<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function postTodo(Request $request){

        if(Todo::create([
            'name' => $request->name,
            'status' => 'pending'
        ])){
            return response()->json(['message' => 'Todo Sucessfully added'], 201);
       
        }else{
            return response()->json(['message' => 'Something went wrong'], 500);
        }
        
        return response()->json($request);
    }
}
