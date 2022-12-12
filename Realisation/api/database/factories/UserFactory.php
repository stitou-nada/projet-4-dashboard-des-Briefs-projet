<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\formateur;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = formateur::class;
    public function definition()
    {
        return [
            "Nom_formateur"=>$this->faker->name,
        // "Prenom_formateur"=>$this->faker->name,
        // "Email_formateur"=>Str::random(),
        // "Phone",
        // "Adress",
        // "CIN",
        // "Image"
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
