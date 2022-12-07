<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anne extends Model
{
    use HasFactory;
    protected $table = "annee_formation";
    public $timestamps= false;
    protected $fillable = [
    	
        
        "Annee_scolaire",
        
        
    ];
   
}
