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
        $fullname = $request['name'];
        $email = $request['email'];
        $subject = $request['subject'];
        $message = $request['message'];
        $message = str_replace("<br />", "\n", $message);

        if(($request['country'] == 'nav-ro-left') || ($request['country'] == 'nav-ro-mid')) $to = "codresanucristian@gmail.com";
        if(($request['country'] == 'nav-bg-left') || ($request['country'] == 'nav-bg-mid')) $to = "codresanucristian1@gmail.com";
        if(($request['country'] == 'nav-qa-left') || ($request['country'] == 'nav-qa-mid')) $to = "codresanucristian@yahoo.com";

        $headers = "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers = "From: " . $fullname . '<' . $email . '>' . "\r\n";
        
        mail($to, $subject, $message, $headers);
        header( 'Location: ../index.html' );

        return response()->json(['country' => $request['country'], 'name'=>$fullname, 'email' =>$email, 'subject' => $subject, 'message' =>$message]);
    }
}
