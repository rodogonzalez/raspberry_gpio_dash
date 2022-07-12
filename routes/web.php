<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Cache;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/port-status', function () {

        
    return Cache::rememberForever('ports_image',  function () {
        $ports = \App\Models\Port::all();
        return json_encode($ports);
    });
    

    
});


Route::get('/set-port-status', function () {

    
    // update del port 
    $port_record = \App\Models\Port::firstOrCreate([
        'port' => \Request::input('port')
    ]);

    $port_record->status = $port_record->status=='on' ? 'off' : 'on'  ; 
    $port_record->save();

    // destroy cache 
    Cache::forget('ports_image');


    return json_encode($port_record);

    //$gpio_record= \App\Models\ProcessQueue::firstWhere('id',$gpio_command->id);
    //$ports = \App\Models\Port::all();
    //return json_encode($ports);
});
 
Route::post('/post-gpio-order', function () {
    //return view('welcome');
})->name('enter-order');;
