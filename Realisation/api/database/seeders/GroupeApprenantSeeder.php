<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\GroupeApprenant;
use Database\Factories\GroupeApprenantFactory;
class GroupeApprenantSeeder extends Seeder
{
    
    public function run()
    {
        GroupeApprenant::factory(4)->create();
    }
}
