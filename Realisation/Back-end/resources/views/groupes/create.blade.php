
@extends('master')
@section('content')

  <div class="main-panel">

    <div class="content">
        <h1 class="titre" >Ajouter groupe </h1>
      <div class="row">
        <div class="col-md-11">
          <div class="card">

            <div class="card-body">
              <form  action="{{route('groupe.store')}}"method="POST" >
                @csrf
               
                <div class="row">
                  <div class="col-md-3 pr-md-1">
                    <div class="form-group">
                      <label>Nom </label>
                      <input type="text" class="form-control"  name="nom" >
                    </div>
                  </div>
                  <div class="col-md-3 pr-md-1">
                    <label for="cars">Année scolaire:</label>

                          <select name="annee">
                            <option >select...</option>
                            @foreach ($annee as $value)
                                
                           
                            <option value={{$value->id}} >{{$value->Annee_scolaire}}</option>
                            @endforeach
                          </select>
                  </div>
                  <div class="col-md-3 pr-md-1">
                    <label for="cars">formateur</label>

                          <select name="formateur">
                            select...
                            @foreach ($formateur as $value)
                                
                           
                            <option value={{$value->id}} >{{$value->Nom_formateur}} {{$value->Prenom_formateur}} </option>
                            @endforeach
                          </select>
                  </div>
                  
                  
                </div>
                
                
                 
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-fill btn-primary">Ajouter</button>
              </div>
            </form>
          </div>
          <a href="{{route('groupe.index')}}" class="btn btn-seccess">retourn</a>
        </div>

      </div>

  </div>
  @endsection
