<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profesion extends Model
{
    use HasFactory;

    protected $connection = 'pgsql';
    protected $table = 'profesion';
    protected $fillable = ['profesion'];
}
