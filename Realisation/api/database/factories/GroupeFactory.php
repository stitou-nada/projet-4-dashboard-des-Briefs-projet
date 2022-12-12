<?php

namespace Database\Factories;


 use Illuminate\Database\Eloquent\Factories\Factory;
 use App\Models\groupe;
 use App\Models\formateur;

class GroupeFactory extends Factory
{

    protected $model=groupe::class;
    public function definition()
    {
        $formateur =formateur::all()->pluck('id')->toArray();



        return [
            "Nom_groupe"=>$this->faker->name(),
            "Annee_formation_id"=>$this->faker->year(),
            'Formateur_id'=> $this->faker->randomElement($formateur),

            "Logo"=>$this->faker->imageUrl(true, 'Faker',true),
        ];
    }
}
