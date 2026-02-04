<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EnquiryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'message' => 'nullable|string',
            'category' => 'nullable|string'
        ]);

        // Set default category if null
        $validated['category'] = $validated['category'] ?? 'General';

        $enquiry = Enquiry::create($validated);

        try {
            Mail::send([], [], function ($message) use ($enquiry) {
                $category = $enquiry->category;
                $message->to(config('mail.to.address', 'swathianeesh1714@gmail.com'))
                    ->subject("New Enquiry: {$category}")
                    ->text("Name: {$enquiry->name}\nPhone: {$enquiry->phone}\nCategory: {$category}\nMessage: {$enquiry->message}")
                    ->html("
                        <h3>New Enquiry Received</h3>
                        <p><strong>Name:</strong> {$enquiry->name}</p>
                        <p><strong>Phone:</strong> {$enquiry->phone}</p>
                        <p><strong>Category:</strong> {$category}</p>
                        <p><strong>Message:</strong> {$enquiry->message}</p>
                    ");
            });
        } catch (\Exception $e) {
            // Log error
        }

        return response()->json(['message' => 'Enquiry sent successfully'], 200);
    }
}
