<?php

namespace Database\Seeders;

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

        $puertos_disponibles = ['20','17','18','26'];
        $estados = ['on','off','on','on','on'];        
        $total = 4; 
        /*
        for ($x = 0; $x < $total; $x++){
            $command_io = new \App\Models\ProcessQueue([
                'command' => $estados[rand(0,1)] ,
                'port' => $puertos_disponibles[ rand(0,3) ],            
                'delay'=>  rand(1,5) ,            
                'status' => 'pending'           
            ]);                 
            $command_io->save();
        }
*/

        $command_io = new \App\Models\ProcessQueue(['command' => 'on' ,'port' => $puertos_disponibles[ 0 ],'delay'=>  0 ,'status' => 'pending' ]);                 
        $command_io->save();
        $command_io = new \App\Models\ProcessQueue(['command' => 'on' ,'port' => $puertos_disponibles[ 1 ],'delay'=>  0 ,'status' => 'pending' ]);                 
        $command_io->save();
        $command_io = new \App\Models\ProcessQueue(['command' => 'on' ,'port' => $puertos_disponibles[ 2 ],'delay'=>  0 ,'status' => 'pending' ]);                 
        $command_io->save();
        $command_io = new \App\Models\ProcessQueue(['command' => 'on' ,'port' => $puertos_disponibles[ 3 ],'delay'=>  0 ,'status' => 'pending' ]);                 
        $command_io->save();     
        


        return ;
         //\App\Models\ProcessQueue::factory(10)->create();
    }
}
