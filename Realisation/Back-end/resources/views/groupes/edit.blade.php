
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
                <div class="row">
                  <div class="col-md-3 pr-md-1">
                    <div class=" form-group">
                      <img src="{{asset('assets/img/groupe')}}/{{$groupe ->Logo}}"
                          class="tm-product-img-dummy mx-auto" alt="">
                  </div>
                  <div class="form-group">
                        <input class="btn btn-primary btn-block mx-auto col-lg-6"
                        type="hidden" name="img" value="{{$groupe->Logo}}"/>
                        <label for="x_card_code" class="control-label mb-1">Logo</label>
                        <input id="x_card_code"   type="file" name="logo">
                      </div>
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
