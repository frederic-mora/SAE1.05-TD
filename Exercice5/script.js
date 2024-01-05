/*
    Objectif de l'exercice :
    
    . Comme l'exercice précédent il s'agit de formater la recette des cookies
    . Mais en y ajoutant la liste des ingrédients à l'aide du template '#incgredient_template'
  
    En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
    au visuel objectif.jpg disponible dans le répertoire asset (c'est le même que l'exercice précédent).

    Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css 

*/



/* Objet recipe : 
   Il contient les données de l'application (ce qu'on appelle aussi : le modèle de l'application)
   On retrouve les données de notre recette de cookie mais avec en plus une propriété ingredients
   qui est un tableau d'objet. Chaque objet décrit un ingrédient de la recette via une propriété
   name (le nom de l'ingrédient) et une propriété quantity (combien il en faut).
*/
let oneRecipe = 
    // un objet décrivant une recette
    {
        info: {
            name: "Cookies maison",
            photo: './asset/cookies.jpg',
            time: {
                preparation: 15,
                cooking: 10
            },
            cost: 'Bon marché',
            difficulty: 'Facile',
            description: "Réalisez de délicieux cookies en un clin d'oeil !"
        },

        // ingredients est un tableau d'objets, chaque objet contient le nom 
        // et la quantité d'un ingrédient de la recette
        ingredients : [
            {name:'sel', quantity:'1cac'},
            {name:'chocolat noir', quantity:'100g'},
            {name:'farine', quantity:'150g'},
            {name:'sucre vanillé', quantity:'1 sachet'},
            {name:'beurre', quantity:'85g'},
            {name:'oeuf', quantity:'1'},
            {name:'sucre', quantity:'85g'},
            {name:'levure chimique', quantity:'1cac'}
        ]
    };

/* Objet View
   La vue (View) désigne l'interface web. Elle contient toutes les fonctions qui permettent de 
   modifier/formater (et plus tard interagir) avec la page web (tout ou partie).
   Et oui, contrairement au précédent exercice, elle vous est donnnée vide. Mais c'est parce
   qu'il y a moins de chose à mettre dedans !
*/
let View = {}; 

/* Q1 : comment formater un élément de liste avec les données d'un ingrédient ? (on a bien dit *un*)

    Ajoutez à l'objet View une fonction formatOneIngredient qui formate le template 
    "#ingredient_template" avec les valeurs données en paramètre et retourne une chaine formatée.
    C'est toujours et sera toujours le même principe : on sélectionne le template, on prend son
    contenu sous forme de chaîne de caractères, on remplace les tags par les données et on retourne le tout.
*/

/* formatOneIngredient
   . paramètre name : le nom de l'ingrédient
   . paramètre quantity : la quantité de l'ingrédient
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template "#ingredient_template"

*/
View.formatOneIngredient = function(name, quantity){
    // ???
}

/* Q2 : comment formater une recette en y ajoutant ses ingrédient ?

    Bien que l'on utilise qu'une seule recette, les cookies, il faut garder en tête que le mieux
    sera d'avoir un code qui peut formater n'importe quelle recette. Et toutes les recettes n'auront
    pas le même nombre d'ingrédient. Par conséquent, il faut produire un code qui supporte un nombre
    quelconque d'ingrédient. Et pas uniquement un code fait pour les ingrédients de la recette de cookies.

    On vous donne ci-dessous une correction de formatOneRecipe telle que demandée dans l'exercice précédent.
    Ce code formate donc le template mais sans ses ingrédient. A vous de le compléter pour remplacer le 
    tag {{liste}} par les ingrédients de la recette.
*/
/* formatOneRecipe 
   . paramètre r : un objet tel que ceux contenus dans le tableau "recipes"
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template "#recipe_template"
*/
View.formatOneRecipe = function(r){
    let template = document.querySelector('#recipe_template');
    let html = template.innerHTML;
    html = html.replace('{{url}}', r.info.photo);
    html = html.replace('{{titre}}', r.info.name);
    html = html.replace('{{temps}}', r.info.time.cooking+r.info.time.preparation);
    html = html.replace('{{niveau}}', r.info.difficulty);
    html = html.replace('{{cout}}', r.info.cost);
    html = html.replace('{{texte}}', r.info.description);

    // TODO : Ajouter ici les instructions pour formater les ingrédients de la recette
    // pour remplacer le tag {{liste}} du template "#recipe_template"
    
    return html;
}



/* renderRecipe
   . paramètre r : un objet décrivant une recette similaire à oneRecipe
   > aucune valeur de retour   
*/
View.renderRecipe = function( r ){
    // sélection de la div de classe '.content' où insérer la recette donnée par le paramètre r
    let div = document.querySelector('.content');
    // modification du contenu HTML de la div avec le template formatée de la recette r
    div.innerHTML = View.formatOneRecipe(r);
}

// Formatage / affichage de la recette de cookies décrite par l'objet oneRecipe
View.renderRecipe( oneRecipe );
