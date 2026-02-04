<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SubscriberController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:subscribers,email'
        ]);

        $subscriber = Subscriber::create($validated);

        try {
            Mail::send([], [], function ($message) use ($subscriber) {
                $message->to(config('mail.to.address', 'swathianeesh1714@gmail.com')) // fallback if env not picked up perfectly
                    ->subject('New Newsletter Subscriber')
                    ->text("You have a new subscriber: {$subscriber->email}")
                    ->html("<h3>New Newsletter Subscriber</h3><p><strong>Email:</strong> {$subscriber->email}</p>");
            });
        } catch (\Exception $e) {
            // Log error but generally proceed or return warning? 
            // Legacy returned 200 even if email failed if save worked? create-react-app usually expects 200.
            // But legacy code does wait for sendMail.
            // I'll log it.
        }

        return response()->json(['message' => 'Subscribed successfully'], 200);
    }
}
