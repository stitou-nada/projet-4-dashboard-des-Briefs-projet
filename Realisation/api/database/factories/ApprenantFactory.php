<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use \App\Models\apprenant;

class ApprenantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model=apprenant::class;
    public function definition()
    {
        return [
            "Nom"=>$this->faker->firstName(),
            "Prenom"=>$this->faker->lastName(),
            "Email"=>$this->faker->email(),
            "Phone"=>$this->faker->phoneNumber(),
            "Adress"=>$this->faker->address (),
            "CIN"=>$this->faker->secondaryAddress(),
            "Image"=>$this->faker->imageUrl(true, 'Faker',true),
            "Date_naissance"=>$this->faker->date(),

        ];
    }
}
