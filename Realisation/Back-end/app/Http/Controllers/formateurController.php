<?php

namespace App\Http\Controllers;
use App\Models\formateur;

use Illuminate\Http\Request;

class formateurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $formateur= formateur::all();
        
        return view('formateur.index',compact('formateur'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("formateur/create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        formateur::create([
        "Nom_formateur"=>$request->nom,
        "Prenom_formateur"=>$request->prenom,
        "Email_formateur"=>$request->email,
        "Phone"=>$request->phone,
        "Adress"=>$request->adress,
        "CIN"=>$request->cin,
      ])->save();
      return redirect('formateur');
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
       $formateur = formateur::find($id);
        return view('formateur.edit',compact('formateur'));
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
        formateur::find($id)
            ->update([
            "Nom_formateur"=>$request->nom,
            "Prenom_formateur"=>$request->prenom,
            "Email_formateur"=>$request->email,
            "Phone"=>$request->phone,
            "Adress"=>$request->adress,
            "CIN"=>$request->cin,
          ]);
          return redirect('formateur');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        formateur::find($id)
        ->delete();
        return redirect("formateur");
    }
}
