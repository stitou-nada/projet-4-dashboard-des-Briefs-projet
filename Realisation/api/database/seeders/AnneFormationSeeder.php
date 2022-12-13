<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\anneFormation;
use Database\Factories\AnneFormationFactory;
class AnneFormationSeeder extends Seeder
{
    
    public function run()
    {
        anneFormation::factory(3)->create();

    }
}
