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
            $ident = "item"+(+$i + 1);
            $item = sessionStorage.getItem($ident);
            if($item !== null){
                $("#frigo").append("<p id="+$ident+">"+$item+"</p>");
            }
        }
    }

   // au chargement, vérifier les données de l'URL
   $urldata = location.search.substring(1);
   if($urldata !== "" && $urldata.split('&')[0].split('=')[0] === "desc"){

       $desc = $urldata.split('&')[0].split('=')[1];

       // ajouter les items à la session pour les conserver
       $compteur = +$compteur + 1;
       sessionStorage.setItem("compteur", $compteur);
       sessionStorage.setItem("item"+$compteur, $desc);

       // ajouter la description sur un post-it
       $ident = "item"+$compteur;
       $("#frigo").append("<p id="+$ident+">"+$desc+"</p>");

   }

   // cliquer sur les post-it va les effacer : manger les items.
    $("p").click(function (){
        $key = $(this).attr("id")
        sessionStorage.removeItem($key);
        //$compteur = +$compteur - 1;
        //sessionStorage.setItem("compteur", $compteur);
        $(this).hide(500);
    });
});