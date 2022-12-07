<?php

namespace App\Http\Controllers;

use App\Models\groupe;
use App\Models\Anne;
use App\Models\formateur;
use Illuminate\Http\Request;

class groupeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $groupe =groupe::select('*','groupes.id as groupeID')
        ->join("annee_formation","groupes.Annee_formation_id","annee_formation.id")
        ->join("formateur","groupes.formateur_id","formateur.id")
        ->get();
        return view('groupes.index',compact('groupe'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $annee =Anne::all();
        $formateur=formateur::all();
        return view("groupes/create",compact('annee','formateur'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        groupe::create([
            "Nom_groupe"=>$request->nom,
            "Annee_formation_id"=>$request->annee,
            "Formateur_id"=>$request->formateur,
            
          ])->save();
          return redirect('groupe');
        
    
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
        $groupe = groupe::select('*','annee_formation.id as anneeID','formateur.id as formateurID','groupes.id as groupeID')
        ->where('groupes.id',$id)
        ->join("annee_formation","groupes.Annee_formation_id","annee_formation.id")
        ->join("formateur","groupes.formateur_id","formateur.id")
        ->get();
        
        $formateur = formateur::all();
        $annee = Anne::all();
        return view('groupes.edit',compact('groupe','formateur','annee'));
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
        groupe::finf($id)
        ->update([
            "Nom_groupe"=>$request->nom,
            "Annee_formation_id"=>$request->annee,
            "Formateur_id"=>$request->formateur,
            
          ]);
          return redirect('groupe');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
