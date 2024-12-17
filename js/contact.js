function verif(){
    var prenom=document.getElementById("prenom").value;
    var nom=document.getElementById("nom").value;
    var pays=document.getElementById("pays").value;
    var msg=document.getElementById("msg").value;

    if (prenom==""){
        alert('Ajouter votre prénom!');
        document.getElementById("prenom").focus();
    }

    if (nom==""){
        alert('Ajouter votre nom!');
        document.getElementById("nom").focus();
    }


    if (pays==""){
        alert('Vous devez choisir le pays!');
    }

    if (msg==""){
        alert('Vous devez entrer votre message!');
    }

}