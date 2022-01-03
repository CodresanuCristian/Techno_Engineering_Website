<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubscribersTable;

class TEAController extends Controller
{
    public function Subscribe(Request $request)
    {
        $table = new SubscribersTable;
        $table->email = $request['subscribe'];
        $table->save();

        return back();
    }



    public function SendEmail(Request $request)
    {
        
        return response()->json(['response'=>'gata']);
    }
}
