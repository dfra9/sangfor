<?php

namespace App\Http\Controllers;

use App\Http\Requests\FormSubmissionRequest;
use App\Models\FormSubmission;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormSubmissionController extends Controller
{
    public function store(FormSubmissionRequest $request)
    {
        // The request is automatically validated due to FormSubmissionRequest
        
        FormSubmission::create([
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'email' => $request->email,
            'job_title' => $request->jobTitle,
            'company' => $request->company,
            'industry' => $request->industry,
            'phone_number' => $request->phoneNumber,
            'agree_to_contact' => $request->agreeToContact,
        ]);

        return redirect()->route('thankyou');
    }
}