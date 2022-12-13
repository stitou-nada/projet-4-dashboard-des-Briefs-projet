<?php

namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\anneFormation;
use App\Models\apprenant;
use App\Models\apprenant_preparation_brief;
use App\Models\formateur;
use App\Models\GroupeApprenant;
use App\Models\groupe;
use App\Models\preparationBrief;
use \App\Models\preparationTache;
use Database\Factories\PreparationBriefFactory;
use Database\Factories\PreparationTacheFactory;
use Database\Factories\GroupeFactory;
use Database\Factories\GroupeApprenantFactory;
use Database\Factories\FormateurFactory;
use Database\Factories\ApprenantFactory;
use Database\Factories\AnneFormationFactory;
use Database\Factories\apprenant_preparation_briefFactory;

class AnneFormationSeeder extends Seeder
{

    public function run()
    {
        formateur::factory(3)->create();
        anneFormation::factory(3)->create();
        groupe::factory(4)->create();
        apprenant::factory(5)->create();
        GroupeApprenant::factory(4)->create();
        preparationBrief::factory(4)->create();
        preparationTache::factory(4)->create();
        apprenant_preparation_brief::factory(3)->create();

    }
}
