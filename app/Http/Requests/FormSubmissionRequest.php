<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormSubmissionRequest extends FormRequest  // Changed from Request to FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'jobTitle' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'industry' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:255',
            'agreeToContact' => 'required|boolean',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'firstName.required' => 'First name is required',
            'lastName.required' => 'Last name is required',
            'email.required' => 'Email address is required',
            'email.email' => 'Please enter a valid email address',
            'jobTitle.required' => 'Job title is required',
            'company.required' => 'Company name is required',
            'industry.required' => 'Industry is required',
            'phoneNumber.required' => 'Phone number is required',
            'agreeToContact.required' => 'You must agree to be contacted',
        ];
    }
}