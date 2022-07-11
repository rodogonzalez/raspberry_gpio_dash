<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProcessQueueFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {        

        return [
            'command' => 'activar ' ,
            'port' => $this->faker->randomElements(['18','17','20','26']),            
            'status' => 'pending'           
        ];
    }

}
