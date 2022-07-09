<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProcessQueueRequest;
use App\Http\Requests\UpdateProcessQueueRequest;
use App\Models\ProcessQueue;

class ProcessQueueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProcessQueueRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProcessQueueRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProcessQueue  $processQueue
     * @return \Illuminate\Http\Response
     */
    public function show(ProcessQueue $processQueue)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProcessQueue  $processQueue
     * @return \Illuminate\Http\Response
     */
    public function edit(ProcessQueue $processQueue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProcessQueueRequest  $request
     * @param  \App\Models\ProcessQueue  $processQueue
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProcessQueueRequest $request, ProcessQueue $processQueue)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProcessQueue  $processQueue
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProcessQueue $processQueue)
    {
        //
    }
}
