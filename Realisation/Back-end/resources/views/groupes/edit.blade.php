
@extends('master')
@section('content')

  <div class="main-panel">

    <div class="content">
        <h1 class="titre" >Modifier groupe </h1>
      <div class="row">
        <div class="col-md-11">
          <div class="card">
              @foreach ($groupe as $groupe)
                  
             
            <div class="card-body">
              <form  action="{{route('groupe.update',$groupe->groupeID)}}"method="POST" >
                @csrf
               @method('PUT')
                <div class="row">
                  <div class="col-md-3 pr-md-1">
                    <div class="form-group">
                      <label>Nom </label>
                      <input type="text" class="form-control"  value={{$groupe->Nom_groupe}} name="nom" >
                    </div>
                  </div>
                  <div class="col-md-3 pr-md-1">
                    <label for="cars">Année scolaire</label>

                          <select name="annee">
                            <option  selected disabled value={{$groupe->anneeID}} >{{$groupe->Annee_scolaire}}</option>
                            @foreach ($annee as $valuee)
                                
                           
                            <option value={{$valuee->id}} >{{$valuee->Annee_scolaire}}</option>
                            @endforeach
                          </select>
                  </div>
                  <div class="col-md-3 pr-md-1">
                    <label for="cars">formateur</label>

                          <select name="formateur">
                          <option selected disabled value={{$groupe->formateurID}} > {{$groupe->Nom_formateur}} {{$groupe->Prenom_formateur}}</option>
                            @foreach ($formateur as $valuee)
                                
                           
                            <option value={{$valuee->id}} >{{$valuee->Nom_formateur}} {{$valuee->Prenom_formateur}} </option>
                            @endforeach
                          </select>
                  </div>
                  
                  
                </div>
                
                @endforeach
                 
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-fill btn-primary">Editer</button>
              </div>
            </form>
          </div>
          <a href="{{route('groupe.index')}}" class="btn btn-seccess">retourn</a>
        </div>

      </div>

  </div>
  @endsection
