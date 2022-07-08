<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProcessQueue extends Model
{
    use HasFactory;
    protected $table = 'process_queue';


    protected $fillable = [
        'command',
        'port',
        'status',
        'executed_at',      
    ];
}
