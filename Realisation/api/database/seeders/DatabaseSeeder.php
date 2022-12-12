<?php

namespace Database\Seeders;
use App\Models\formateur;
use database\factories\userFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        {
            \App\Models\formateur::factory(5)->create();

}
    }
}
