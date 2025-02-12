<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $todos = Todo::all();

        return Inertia::render('Home', compact('todos'));
    }

    public function createTodo(){
        // $todos = Todo::all();

        return Inertia::render('Home-create');
    }

    public function buttons(){


        return Inertia::render('Buttons');
    }

    public function fields(){


        return Inertia::render('Fields');
    }

    public function Modals(){


        return Inertia::render('Modals');
    }
}
