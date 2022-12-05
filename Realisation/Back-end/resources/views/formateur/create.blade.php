<form action="{{route('formateur.store')}}"method="POST">
    @csrf
Nom_formateur <input type="text" name="nom">
Prenom_formateur <input type="text"name="prenom">
Email_formateur <input type="email"name="email">
Phone <input type="number"name="phone">
Adress <input type="text"name="adress">
CIN <input type="text"name="cin">
<button>Ajouter</button>
    
</form>