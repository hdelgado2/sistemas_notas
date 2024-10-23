<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class years extends Model
{
    use HasFactory;
    protected $connection = 'pgsql';
    protected $table = 'year';
    protected $fillable = ['año','num_year'];
}
