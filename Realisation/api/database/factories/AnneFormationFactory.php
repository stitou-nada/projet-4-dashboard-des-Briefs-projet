<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use \App\Models\anneFormation;

class AnneFormationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "Annee_scolaire"=>$this->faker->year()
        ];
    }
}
