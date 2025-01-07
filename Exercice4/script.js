/*
    Objectif de l'exercice :
    
    . Formater puis afficher un template à l'aide de données structurées.

    En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
    au visuel objectif.jpg disponible dans le répertoire asset.

    Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css 

    IMPORTANT :

    On vous l'a déjà dit : il faut toujours séparer le fond de la forme.
    En développement, c'est la clé pour un code propre, maintenable et évolutif.
    Sans cela, vous vous perdrez. Et très vite.

    En développement web, le fond, ce sont les données de l'application (par exemple les informations à afficher).
    La forme, c'est comment on affiche ces données (par exemple un composant formé d'un template HTML/CSS).

    On ne parle pas de fond et de forme en développement, mais de modèle (les données) et de vue (l'affichage).
    C'est affaire de vocabulaire essentiellement.

    Et pour lier le fond/modèle à la forme/vue, on utilise un troisième concept : le contrôleur.
    Le contrôleur est la partie du code on l'on choisira les données à transmettre au bon composant pour affichage.
*/




/*  Objet DataRecipe
   
    DataRecipe décrit les données d'une recette. DataRecipe relève du modèle de notre "application".
    Dans une application réelle, ces données pourraient provenir d'une base de données.
*/
let DataRecipe = {
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
}; // fin DataRecipe



/* Objet Recipe
   Recipe est un objet qui symbolise le composant Recipe. Il relève de la vue de notre "application".
   Recipe va être en charge de l'affichage d'une recette (peu importe laquelle, DataRecipe ou autre).
   Dans un objet on sait qu'on peut ajouter des variables qu'on appelle propriétés.
   Et bien on peut aussi ajouter des fonctions qu'on appelle méthodes.
   On va donc ajouter à Recipe une méthode "format" qui sera chargée de formater le template
   "#recipe_template" avec les données d'une recette.
*/
let Recipe = {}; 


/* Q1 : comment formater une recette ?

    Complétez la fonction/méthode Recipe.format qui formate le template
    "#recipe_template" avec les données d'une recette. 
*/

/* Recipe.format
   . paramètre r : un objet dont la structure est similaire à DataRecipe 
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template "#recipe_template"
*/
Recipe.format = function(r){
    // TODO
}


/* Q2 : comment afficher une recette formatée ?

    Utilisez la fonction formatOneRecipe pour formater une recette puis faites là
    apparaître dans la div de classe 'content'
*/

/* Recipe.render
   . paramètre where : le selecteur CSS de l'élément où afficher la recette r
   . paramètre r : un objet décrivant une recette, avec un structure similaire à DataRecipe
   > aucune valeur de retour   
*/
Recipe.render = function( where, r ){
    // TODO
}


/* Partie Contrôleur 
    Ici, le contrôleur est très simple : il va juste demander à Recipe d'afficher la recette
    DataRecipe dans l'élément HTML de classe 'content'.
*/
// TODO


/* Q3 : Et si l'on modifie le template ? P(as de JS à écrire ici)

    . Modifier le template "#recipe_template" : au lieu d'afficher le temps, le niveau, le coût, affichez le niveau, le cout, le temps.
      Que constatez-vous ?

    . Finalement on ne veut plus afficher le coût, supprimez l'élément de liste correspondant du template.
      Que constatez-vous ?

*/
