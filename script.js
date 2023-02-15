$(document).ready(function (){
    // getsionnaire d'évènement du bouton soumettre
   $("form").submit(function (){
       // validation à compléter...
       $description = $("desc").val();
       if ($description === ""){
           event.preventDefault(); // empêche la soumission
       }
   });

   //au chargement, vérifier la session
    $compteur = sessionStorage.getItem("compteur")
    if ($compteur > 0){
        for ($i = 0; $i < $compteur; $i++){
            $item = sessionStorage.getItem("item"+$compteur);
            $("#frigo").append("<p>"+$item+"</p>");
        }
    }

   // au chargement, vérifier les données de l'URL
   $urldata = location.search.substring(1);
   if($urldata !== "" && $urldata.split('&')[0].split('=')[0] === "desc"){

       // ajouter la description sur un post-it
       $desc = $urldata.split('&')[0].split('=')[1];
       $("#frigo").append("<p>"+$desc+"</p>");

       // ajouter les items à la session pour les conserver
       $compteur = +$compteur + 1;
       sessionStorage.setItem("compteur", $compteur);
       sessionStorage.setItem("item"+$compteur, $desc);
   }
});