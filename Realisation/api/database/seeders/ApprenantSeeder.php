<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\apprenant;
use Database\Factories\ApprenantFactory;
class ApprenantSeeder extends Seeder
{
    
    public function run()
    {
        apprenant::factory(5)->create();
    }
}