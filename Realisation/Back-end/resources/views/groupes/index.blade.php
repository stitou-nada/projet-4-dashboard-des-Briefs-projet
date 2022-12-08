@extends('master')
@section('content')


<div class="main-panel">

    <!-- table -->
    <div class="content">
        <h1 class="titre" > Gestion du groupe </h1>
      <div class="row">
        <div class="col-md-12">
          <div class="card ">
            <div class="card-header">
              <a  href="{{route("groupe.create")}}" class="btn btn-primary">Ajouter groupe</a>
            </div>
            <div class="card-body">
                {{-- search  --}}
                <div class="search-box-promotion">
                   <input type="hidden" value="" id="IdKey"   class="form-control  searchInput" >
                   <input type="text" id="search" class="form-control searchEdit searchInput " placeholder="Recherche&hellip;">
                 </div>
             </div>
             {{-- fin search --}}
              <div class="table-responsive">
                <table class="table tablesorter " id="">
                  <thead class=" text-primary">
                    <tr>
                        <th>Logo</th>
                        <th>id</th>
                        <th>Nom groupe</th>
                        <th>Annee formation </th>
                        <th>Formateur</th>
                       

                      <th class="text-center">
                        Action
                      </th>

                    </tr>
                  </thead>
                  <tbody id="tbody">
                    @foreach ($groupe as $value)
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src="{{asset('assets/img/groupe')}}/{{$value ->Logo}}" class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                          </div>
                          
                        </div>
                      </td>
                        <td>{{$value->groupeID}}</td>
                        <td>{{$value->Nom_groupe}}</td>
                        <td>{{$value->Annee_scolaire}}</td>
                        <td>
                          {{$value->Nom_formateur}} {{$value->Prenom_formateur}}</td>
                        

                      <td class="text-center">
                        <a  href="{{route("groupe.edit",$value->groupeID)}}"  style="font-size:25px"><i class="fa fa-edit"></i></a>
                        <form  action="{{route("groupe.destroy",$value->groupeID)}}" method="POST">
                          @csrf
                          @method('DELETE')
                         <button style=" all: unset; cursor: pointer; font-size:25px"><i class="fa fa-trash"></i></button>
                        </form>
                      </td>
                    </tr>

                    @endforeach


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

    </div>
    <!-- fin table -->
  </div>
</div>


@endsection

