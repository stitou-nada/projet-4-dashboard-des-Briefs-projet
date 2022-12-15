<?php

namespace App\Http\Controllers;

use App\Models\groupe;
use App\Models\formateur;
use App\Models\GroupeApprenant;
use Illuminate\Support\Facades\DB;
use App\Models\ApprenantPreparationTache;


class DashboardController extends Controller
{
    // get tous formateur
    function  formateur(){
        $formateur = formateur::All();
        return $formateur ;
    }



//détail de groupe
    function Groupe($id){

// get dernier Groupe
        $Groupes = groupe::select("*","groupes.id as idGroupe")
        ->where('Formateur_id',$id)
        ->join('formateur', 'groupes.Formateur_id', '=', 'formateur.id')
        ->join('annee_formation', 'groupes.Annee_formation_id', '=', 'annee_formation.id')
        ->orderBy('annee_formation.id','desc')
        ->first();

 // get dernier Brief
        $IdBrief= ApprenantPreparationTache::select(
            "preparation_brief.Nom_du_brief",'preparation_brief.id as id' ,
            )
            ->join('apprenant', 'apprenant_preparation_tache.Apprenant_id', '=','apprenant.id')
            ->join('preparation_tache', 'apprenant_preparation_tache.Preparation_tache_id', '=','preparation_tache.id')
            ->join('apprenant_preparation_brief', 'apprenant_preparation_tache.Apprenant_P_Brief_id', '=','apprenant_preparation_brief.id')
            ->join('preparation_brief', 'apprenant_preparation_brief.Preparation_brief_id', '=','preparation_brief.id')
            ->join('groupes_preparation_brief','apprenant_preparation_brief.id','=','groupes_preparation_brief.Apprenant_preparation_brief_id')
            ->where([
                ['groupes_preparation_brief.Groupe_id',$Groupes->idGroupe],
                ])
            ->groupBy("Nom_du_brief")
            ->groupBy("preparation_brief.id")
            ->orderBy('preparation_brief.id','desc')
                ->first();

// Toutal des apprenants
         $CountApprenants = GroupeApprenant::select("*")
        ->where([
            ['Formateur_id',$id],
            ['groupes_apprenant.Groupe_id',$Groupes->idGroupe]
            ])

            ->join('groupes', 'groupes_apprenant.Groupe_id', '=', 'groupes.id')
            ->join('apprenant', 'groupes_apprenant.Apprenant_id', '=', 'apprenant.id')
            ->count();

// list des apprenant
            $GetAppenants = GroupeApprenant::select("*")
            ->where([
            ['Formateur_id',$id],
            ['groupes_apprenant.Groupe_id',$Groupes->idGroupe]
            ])

            ->join('groupes', 'groupes_apprenant.Groupe_id', '=', 'groupes.id')
            ->join('apprenant', 'groupes_apprenant.Apprenant_id', '=', 'apprenant.id')
            ->get();

// Avancement de dernier groupe
        $AvancementGroupe= ApprenantPreparationTache::select(
        DB::raw(" 100 / count('apprenant_preparation_tache')   * count(CASE Etat WHEN 'terminer' THEN 1 ELSE NULL END) as Percentage"),
        )
        ->join('apprenant', 'apprenant_preparation_tache.Apprenant_id', '=','apprenant.id')
        ->join('preparation_tache', 'apprenant_preparation_tache.Preparation_tache_id', '=','preparation_tache.id')
        ->join('apprenant_preparation_brief', 'apprenant_preparation_tache.Apprenant_P_Brief_id', '=','apprenant_preparation_brief.id')
        ->join('preparation_brief', 'apprenant_preparation_brief.Preparation_brief_id', '=','preparation_brief.id')
        ->join('groupes_preparation_brief','apprenant_preparation_brief.id','=','groupes_preparation_brief.Apprenant_preparation_brief_id')
        ->where([

            ['groupes_preparation_brief.Groupe_id',$Groupes->idGroupe],

            ])
            ->groupBy("groupes_preparation_brief.Groupe_id")
            ->get();




//list des briefs
                 $listBrief= ApprenantPreparationTache::select(

                    "preparation_brief.Nom_du_brief",'preparation_brief.id as id' ,
                    DB::raw(" 100 / count('apprenant_preparation_tache.Etat')   * count(CASE Etat WHEN 'terminer' THEN 1 ELSE NULL END) as Percentage"),
                    )
                    ->join('apprenant', 'apprenant_preparation_tache.Apprenant_id', '=','apprenant.id')
                    ->join('preparation_tache', 'apprenant_preparation_tache.Preparation_tache_id', '=','preparation_tache.id')
                    ->join('apprenant_preparation_brief', 'apprenant_preparation_tache.Apprenant_P_Brief_id', '=','apprenant_preparation_brief.id')
                    ->join('preparation_brief', 'apprenant_preparation_brief.Preparation_brief_id', '=','preparation_brief.id')
                    ->join('groupes_preparation_brief','apprenant_preparation_brief.id','=','groupes_preparation_brief.Apprenant_preparation_brief_id')
                    ->where([

                        ['groupes_preparation_brief.Groupe_id',$Groupes->idGroupe],


                        ])
                    ->groupBy("Nom_du_brief")
                    ->groupBy("preparation_brief.id")
                    ->orderBy('preparation_brief.id','desc')
                        ->get();


//get first brief
            $FirstBrief= ApprenantPreparationTache::select(
                    "apprenant.Nom",
                    "preparation_brief.Nom_du_brief",'preparation_brief.id as id' ,
                    DB::raw(" 100 / count('apprenant_preparation_tache.Etat')   * count(CASE Etat WHEN 'terminer' THEN 1 ELSE NULL END) as Percentage"),
                    )
                    ->join('apprenant', 'apprenant_preparation_tache.Apprenant_id', '=','apprenant.id')
                    ->join('preparation_tache', 'apprenant_preparation_tache.Preparation_tache_id', '=','preparation_tache.id')
                    ->join('apprenant_preparation_brief', 'apprenant_preparation_tache.Apprenant_P_Brief_id', '=','apprenant_preparation_brief.id')
                    ->join('preparation_brief', 'apprenant_preparation_brief.Preparation_brief_id', '=','preparation_brief.id')
                    ->join('groupes_preparation_brief','apprenant_preparation_brief.id','=','groupes_preparation_brief.Apprenant_preparation_brief_id')
                    ->where([

                        ['groupes_preparation_brief.Groupe_id',$Groupes->idGroupe],
                        ['preparation_brief.id',$IdBrief->id],


                        ])
                    ->groupBy("Nom_du_brief")
                    ->groupBy("Nom")
                    ->groupBy("preparation_brief.id")
                    ->orderBy('preparation_brief.id','desc')

                        ->get();

                    //     return response()->json([
                    //         'Groupes' =>$Groupes
                    //     ]);
                    // }
                    return  response()->json([
                       'Groupe'=> $Groupes,
                       "ToutalApprenants"=> $CountApprenants,
                       "ListApprenants"=> $GetAppenants,
                        "AvancementGroupe"=>$AvancementGroupe,
                       "ListBrifes"=> $listBrief,
                        "FirstBrief"=>$FirstBrief
                    ]);

            }

// Avancement des Apprenant
         function Av_ApprenantTache($idG,$idB){

            $BriefAV= ApprenantPreparationTache::select(

                "apprenant.Nom",
                DB::raw(" 100 / count('apprenant_preparation_tache.Etat')   * count(CASE Etat WHEN 'terminer' THEN 1 ELSE NULL END) as Percentage"),

                )
            ->join('apprenant', 'apprenant_preparation_tache.Apprenant_id', '=','apprenant.id')
            ->join('preparation_tache', 'apprenant_preparation_tache.Preparation_tache_id', '=','preparation_tache.id')
            ->join('apprenant_preparation_brief', 'apprenant_preparation_tache.Apprenant_P_Brief_id', '=','apprenant_preparation_brief.id')
            ->join('preparation_brief', 'apprenant_preparation_brief.Preparation_brief_id', '=','preparation_brief.id')
            ->join('groupes_preparation_brief','apprenant_preparation_brief.id','=','groupes_preparation_brief.Apprenant_preparation_brief_id')
            ->where([

                ['groupes_preparation_brief.Groupe_id',$idG],

                ['preparation_brief.id',$idB]
            ])
            ->groupBy('Nom')
            ->get()
            ;
            dd($BriefAV);

            return response()->json(["avancemantBrief"=> $BriefAV]);
    }
}
