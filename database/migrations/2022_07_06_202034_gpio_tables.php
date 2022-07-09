<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class GpioTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('process_queue', function (Blueprint $table) {
            $table->id();
            $table->string('command');                       
            $table->string('port');
            $table->enum('status', ['pending', 'processed']);
            $table->timestamps();
            $table->timestamp('executed_at', $precision = 0)->nullable();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('process_queue');
    }
}
