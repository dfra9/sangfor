<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormSubmission extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'job_title',
        'company',
        'industry',
        'phone_number',
        'agree_to_contact'
    ];

    protected $casts = [
        'agree_to_contact' => 'boolean'
    ];
}