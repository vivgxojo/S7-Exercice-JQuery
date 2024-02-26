function Aliment(description, categorie, portions, commentaire = "", identifiant, remettre){
    this.desc = description
    this.cat = categorie
    this.port = portions
    this.comm = commentaire
    this.id = identifiant
    this.svp = remettre
    this.toString = function (){
        return this.desc + " " + this.port
    };
}

// Validation à compléter :
// L'idéale est de gérer les évenement change ou autre de chaque éléments
// inputs du formulaire et d'activer/désactiver le bouton Soumettre.
$descValide = false;
$portionValide = false;
$idValide = false;

$("#desc").blur(function (){
    //Valider la description
    $desc = $("#desc").val();
    if($desc.length > 100 || $desc.length < 20) {
        $descValide = false;
    }
    else {
        $descValide = true;
    }
    GererBouton();
});

$("#portions").blur(function (){
    //Valider portions
    $portions = $("#portions").val();
    $categorie = $("#cat").val();
    $min = 2;
    if ($categorie === "dessert"){
        $min = 1;
    }
    if ($portions < $min || $portions > 8){
        $portionValide = false;
    }
    else {
        $portionValide = true;
    }
    GererBouton();
});

$("#identifiant").blur(function () {
    //Valider identifiant
    $identifiant = $("#identifiant").val();
    $regex = new RegExp("^#[a-z]{4,10}[0-9]{4}$");
    // Valider l'identifiant à l'aide d'une expression régulière
    if ($regex.test($identifiant)) {
        $idValide = true;
    } else {
        $idValide = false;
    }
    GererBouton();
});

//Décider si on active ou désactive le bouton soumettre
function GererBouton() {
    if(true) //($descValide && $portionValide && $idValide)
    {
        $("#soumettre").removeAttr("disabled");
    }
    else
    {
        $("#soumettre").attr("disabled", "disabled");
    }
}


// gestionnaire d'évènement du bouton
$("form").submit(function (){
    // récupérer les données du formulaire :
    $desc = $("#desc").val();
    $categorie = $("#cat").val();
    $portions = $("#portions").val();
    $comm = $("#commentaire").val();
    $id = $("#identifiant").val();
    $svp = $("#plat").val();
    //Créer l'objet
    const $aliment = new Aliment($desc, $categorie, $portions, $comm, $id, $svp)
    // afficher les post-it
    $("#frigo").append("<p class='postIt'>" + $aliment.toString() + "</p>");

    // cliquer sur les post-it va les effacer : manger les items.
    $(".postIt").click(function (){
        $(this).fadeOut(500).remove(500);
    });

    return false
});
