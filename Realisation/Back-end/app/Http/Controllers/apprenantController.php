<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\apprenant;

class apprenantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $apprenant = apprenant::all();
        return view ("apprenant.index",compact('apprenant'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('apprenant.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        apprenant::create([
            "Nom"=>$request->nom,
            "Prenom"=>$request->prenom,
            "Email"=>$request->email,
            "Phone"=>$request->phone,
            "Adress"=>$request->adress,
            "CIN"=>$request->cin,
            "Date_naissance"=>$request->date_naissance,

          ])->save();
          return redirect('apprenant');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $apprenant = apprenant::find($id);
        return view('apprenant.edit',compact('apprenant'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        apprenant::find($id)
            ->update([
            "Nom"=>$request->nom,
            "Prenom"=>$request->prenom,
            "Email"=>$request->email,
            "Phone"=>$request->phone,
            "Adress"=>$request->adress,
            "CIN"=>$request->cin,
            "Date_naissance"=>$request->date_naissance,
          ]);
          return redirect('apprenant');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        apprenant::find($id)
        ->delete();
        return redirect("apprenant");
    }
}
