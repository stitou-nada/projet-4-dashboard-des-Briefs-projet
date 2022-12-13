<?php

namespace Database\Seeders;
use App\Models\formateur;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Factories\FormateurFactory;
class FormateurSeeder extends Seeder
{
    
    public function run()
    {
        formateur::factory(3)->create();

    }
}
