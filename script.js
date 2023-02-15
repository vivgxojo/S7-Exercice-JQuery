$(document).ready(function (){

    // Validation à compléter :
    // L'idéale est de gérer les évenement change ou autre de chaque éléments
    // inputs du formulaire et d'activer/désactiver le bouton Soumettre.

    // gestionnaire d'évènement du bouton
    $("#soumettre").click(function (){
        // récupérer les données (description) du formulaire :
        $desc = $("#desc").val();
        // afficher les post-it
        $("#frigo").append("<p>" + $desc + "</p>");

        // cliquer sur les post-it va les effacer : manger les items.
        $("p").click(function (){
            //$key = $(this).attr("id")
            //sessionStorage.removeItem($key);
            $(this).hide(500);
        });
    });

    // gestionnaire d'évènement du bouton soumettre
/*   $("form").submit(function (event){
       $description = $("#desc").val();
       if ($description === ""){
           event.preventDefault(); // empêche la soumission
       }
   }); */

   //au chargement, vérifier la session
 /*   $compteur = sessionStorage.getItem("compteur")
    if ($compteur > 0){
        for ($i = 0; $i < $compteur; $i++){
            $ident = "item"+(+$i + 1);
            $item = sessionStorage.getItem($ident);
            if($item !== null){
                $("#frigo").append("<p id="+$ident+">"+$item+"</p>");
            }
        }
    } */

   // au chargement, vérifier les données de l'URL
 /*  $urldata = location.search.substring(1);
   if($urldata !== "" && $urldata.split('&')[0].split('=')[0] === "desc"){

       $desc = $urldata.split('&')[0].split('=')[1];

       // ajouter les items à la session pour les conserver
       $compteur = +$compteur + 1;
       sessionStorage.setItem("compteur", $compteur);
       sessionStorage.setItem("item"+$compteur, $desc);

       // ajouter la description sur un post-it
       $ident = "item"+$compteur;
       $("#frigo").append("<p id=" + $ident + ">" + $desc + "</p>");

   }*/


});