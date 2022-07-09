<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class process_gpio_queue extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'queue_gpio:process';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command executes the commands in the remote queue for be processed locally';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        return 0;
    }
}
