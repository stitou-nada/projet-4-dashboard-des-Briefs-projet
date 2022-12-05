<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js" integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<a href="{{route("formateur.create")}}">Ajouter un formateur</a>
<table class="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Adress</th>
            <th>CIN</th>
            
        </tr>
    </thead>
    <tbody>
        @foreach ($formateur as $value)
            
       
        <tr>
            <td>{{$value->id}}</td>
            <td>{{$value->Nom_formateur}}</td>
            <td>{{$value->Prenom_formateur}}</td>
            <td>{{$value->Email_formateur}}</td>
            <td>{{$value->Phone}}</td>
            <td>{{$value->Adress}}</td>
            <td>{{$value->CIN}}</td>
            <td>
                <a  href="{{route("formateur.edit",$value->id)}}" class="btn btn-warning" >Edit</a>
                <form action="{{route("formateur.destroy",$value->id)}}" method="POST">
                    @csrf
                    @method("DELETE")
                <button class="btn btn-danger">Supprimer</button>
            </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>