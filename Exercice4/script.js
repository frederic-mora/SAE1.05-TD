/*
    Objectif de l'exercice :
    
    . Formater puis afficher un template à l'aide de données structurées.

    En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
    au visuel objectif.jpg disponible dans le répertoire asset.

    Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css 

*/


/*  Objet oneRecipe
   
    Contient les données décrivant une recette de cookie.
*/
let oneRecipe = {
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
    }
}; // fin oneRecipe



/* Objet View
   La vue (View) représente l'interface web. Elle contient toutes les fonctions qui permettent de 
   modifier/formater (et plus tard interagir) avec la page web (tout ou partie).
*/
let View = {}; 

/* Q1 : comment formater une recette ?

    Complétez la fonction formatOnRecipe qui formate le template
    "#recipe_template" avec les données d'une recette. 
*/

/* formatOneRecipe 
   . paramètre r : un objet similaire à oneRecipe 
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template "#recipe_template"
*/
View.formatOneRecipe = function(r){
    // ??
}


/* Q2 : comment afficher une recette formatée ?

    Utilisez la fonction formatOneRecipe pour formater une recette puis faites là
    apparaître dans la div de classe 'content'
*/

/* renderRecipe
   . paramètre r : un objet décrivant une recette similaire à oneRecipe
   > aucune valeur de retour   
*/
View.renderRecipe = function( r ){
    // ??
}

// ??


/* Q3 : Et si l'on modifie le template ? Pas de JS à écrire ici, juste les mêmes petits que dans l'exercice prédédent.

    . Modifier le template "#recipe_template" : au lieu d'afficher le temps, le niveau, le coût, affichez le niveau, le cout, le temps.
      Que constatez-vous ?

    . Finalement on ne veut plus afficher le coût, supprimez l'élément de liste correspondant du template.
      Que constatez-vous ?

*/
