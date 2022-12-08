

@extends('master')
@section('content')

  <div class="main-panel">

    <div class="content">
        <h1 class="titre" > Modifier apprenant </h1>
      <div class="row">
        <div class="col-md-11">
          <div class="card">

            <div class="card-body">
              <form  action="{{route('apprenant.update',$apprenant->id)}}"method="POST" >
                @csrf
                @method("PUT")
                <div class="row">
                  <div class="col-md-3 pr-md-1">
                    <div class="form-group">
                      <label>Nom </label>
                      <input type="text" class="form-control" name="nom" value="{{$apprenant->Nom}}">
                    </div>
                  </div>
                  <div class="col-md-3 pr-md-1">
                    <div class="form-group">
                      <label>Prenom </label>
                      <input type="text" class="form-control"  name="prenom" value="{{$apprenant->Prenom}}" >
                    </div>
                  </div>
                  <div class="col-md-5 pr-md-1">
                    <div class="form-group">
                      <label>Email </label>
                      <input type="text" class="form-control" placeholder="email " name="email" value="{{$apprenant->Email}}" >
                    </div>
                  </div>
                  
                </div>
                
                <div class="row">
                  <div class="col-md-3 pr-md-1">
                      
                      <div class="form-group">
                        <label>Phone</label>
                        <input type="number" class="form-control" name="phone" value="{{$apprenant->Phone}}">
                      </div>
                  </div>
                     <div class="col-md-5 pr-md-1">
                    <div class="form-group">
                      <label>Address</label>
                      <input type="text" class="form-control" name="adress" value="{{$apprenant->Adress}}">
                    </div>
                     </div>
                    <div class="col-md-2 pr-md-1">
                    <div class="form-group">
                      <label>CIN</label>
                      <input type="text" class="form-control" name="cin" value="{{$apprenant->CIN}}">
                    </div>
                    </div>
                    <div class="col-md-2 pr-md-1">
                      <div class="form-group">
                        <label>Date de naissance </label>
                        <input type="date" class="form-control" name="date_naissance" value="{{$apprenant->Date_naissance}}">
                      </div>
                      </div>
                  
                </div>
                <div class="row">
                  <div class="col-md-3 pr-md-1">
                    <div class=" form-group">
                      <img src="{{asset('assets/img/apprenant')}}/{{$apprenant ->Image}}"
                          class="tm-product-img-dummy mx-auto" alt="">
                  </div>
                  <div class="form-group">
                        <input class="btn btn-primary btn-block mx-auto col-lg-6"
                        type="hidden" name="img" value="{{$apprenant ->Image}}"/>
                        <label for="x_card_code" class="control-label mb-1">Image</label>
                        <input id="x_card_code"   type="file" name="image">
                      </div>
                  </div>
                 
                  
                </div>
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-fill btn-primary">Editer</button>
              </div>
            </form>
          </div>
          <a href="{{route('apprenant.index')}}" class="btn btn-seccess">retourn</a>
        </div>

      </div>

  </div>
  @endsection
