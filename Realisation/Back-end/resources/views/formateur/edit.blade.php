<form action="{{route('formateur.update',$formateur->id)}}"method="POST">
    @csrf
    @method("PUT")
Nom_formateur <input type="text" name="nom" value="{{$formateur->Nom_formateur}}">
Prenom_formateur <input type="text"name="prenom"value="{{$formateur->Prenom_formateur}}">
Email_formateur <input type="email"name="email"value="{{$formateur->Email_formateur}}">
Phone <input type="number"name="phone"value="{{$formateur->Phone}}">
Adress <input type="text"name="adress"value="{{$formateur->Adress}}">
CIN <input type="text"name="cin"value="{{$formateur->CIN}}">
<button>Edit</button>
    
</form>