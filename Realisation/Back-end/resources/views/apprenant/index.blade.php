@extends('master')
@section('content')


<div class="main-panel">

    <!-- table -->
    <div class="content">
        <h1 class="titre" > Gestion apprenant </h1>
      <div class="row">
        <div class="col-md-12">
          <div class="card ">
            <div class="card-header">
              <a  href="{{route("apprenant.create")}}" class="btn btn-primary">Ajouter un apprenant</a>
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
                         <th>Image</th>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Adress</th>
                        <th>CIN</th>
                        <th>Date naissance</th>

                      <th class="text-center">
                        Action
                      </th>

                    </tr>
                  </thead>
                  <tbody id="tbody">
                    @foreach ($apprenant as $value)
                    <tr>
                      <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="{{asset('assets/img/apprenant')}}/{{$value ->Image}}" class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                        </div>
                        
                      </div>
                    </td>
                        <td>{{$value->id}}</td>
                        <td>{{$value->Nom}}</td>
                        <td>{{$value->Prenom}}</td>
                        <td>{{$value->Email}}</td>
                        <td>{{$value->Phone}}</td>
                        <td>{{$value->Adress}}</td>
                        <td>{{$value->CIN}}</td>
                        <td>{{$value->Date_naissance}}</td>

                      <td class="text-center">
                        <a  href="{{route("apprenant.edit",$value->id)}}"  style="font-size:25px"><i class="fa fa-edit"></i></a>
                        <form  action="{{route("apprenant.destroy",$value->id)}}" method="POST">
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

