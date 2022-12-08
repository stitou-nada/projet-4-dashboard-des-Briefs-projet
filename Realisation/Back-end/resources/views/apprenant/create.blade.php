
@extends('master')
@section('content')

  <div class="main-panel">

    <div class="content">
        <h1 class="titre" > Ajouter apprenant </h1>
      <div class="row">
        <div class="col-md-11">
          <div class="card">

            <div class="card-body">
              <form  action="{{route('apprenant.store')}}"method="POST" >
                @csrf
               
                <div class="row">
                  <div class="col-md-3 pr-md-1">
                    <div class="form-group">
                      <label>Nom </label>
                      <input type="text" class="form-control"  name="nom" >
                    </div>
                  </div>
                  <div class="col-md-3 pr-md-1">
                    <div class="form-group">
                      <label>Prenom </label>
                      <input type="text" class="form-control"  name="prenom"  >
                    </div>
                  </div>
                  <div class="col-md-5 pr-md-1">
                    <div class="form-group">
                      <label>Email </label>
                      <input type="text" class="form-control"  name="email" >
                    </div>
                  </div>
                  
                </div>
                
                <div class="row">
                  <div class="col-md-3 pr-md-1">
                      
                      <div class="form-group">
                        <label>Phone</label>
                        <input type="number" class="form-control" name="phone" min="0" max="10" step="0.25">
                      </div>
                  </div>
                     <div class="col-md-5 pr-md-1">
                    <div class="form-group">
                      <label>Address</label>
                      <input type="text" class="form-control" name="adress">
                    </div>
                     </div>
                    <div class="col-md-2 pr-md-1">
                    <div class="form-group">
                      <label>CIN</label>
                      <input type="text" class="form-control" name="cin" >
                    </div>
                    </div>
                    <div class="col-md-2 pr-md-1">
                    <div class="form-group">
                      <label>Date de naissance</label>
                      <input type="date" class="form-control" name="date_naissance" >
                    </div>
                    </div>
                  
                </div>
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-fill btn-primary">Ajouter</button>
              </div>
            </form>
          </div>
          <a href="{{route('apprenant.index')}}" class="btn btn-seccess">retourn</a>
        </div>

      </div>

  </div>
  @endsection
