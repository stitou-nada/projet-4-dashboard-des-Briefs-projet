<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\preparationBrief;
use Database\Factories\PreparationBriefFactory;
class PreparationBriefSeeder extends Seeder
{

    public function run()
    {
        preparationBrief::factory(4)->create();
    }
}
