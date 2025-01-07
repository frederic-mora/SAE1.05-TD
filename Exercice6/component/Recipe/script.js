// const permet de déclarer une variable en lecture seule. 
// Une variable déclarée avec const ne peut pas être modifiée ultérieurement.
// C'est une façon de "protéger" une variable pour éviter qu'elle soit modifiée par erreur.

// fetch permet de lire le fichier à l'emplacement indiqué.
// cette lecture est une opération qui "prend du temps" (asynchrone).
// await est donc l'instruction utilisée pour dire que l'on attend que l'opération soit terminée.
const templateFile = await fetch("component/Recipe/template.html");

// templateFile.text() pemret de lire et retourner le contenu du fichier sous forme de chaîne de caractères.
// c'est aussi une opération asynchrone, donc on utilise aussi await pour attendre la fin de l'opération.
const template = await templateFile.text();

// A ce stade template contient le contenu du fichier template.html sous forme de chaîne de caractères.

// On fait de même avec le (sous) template des ingrédients
const templateFile2 = await fetch("component/Recipe/templateIngredient.html");
const templateIngredient = await templateFile2.text();

let Recipe = {}; 

/* Q1 : Recipe.formatOneIngredient
    Complétez la fonction formatOneIngredient qui formate un ingrédient 
    en remplaçant les tags {{nom}} et {{combien}} par les valeurs passées en paramètres.
    La fonction retournera le templateIngredient formaté sous forme de chaine de caractères.
*/
Recipe.formatOneIngredient = function(name, quantity){
    // TODO
}

/* Q2 : comment formater une recette en y ajoutant ses ingrédient ?

    Bien que l'on utilise qu'une seule recette pour le moment (les cookies), il faut garder en tête que le mieux
    sera d'avoir un code qui peut formater n'importe quelle recette. Et toutes les recettes n'auront
    pas le même nombre d'ingrédient. Par conséquent, il faut produire un code qui supporte un nombre
    quelconque d'ingrédient. Et pas uniquement un code fait pour les ingrédients de la recette des cookies.

    On vous donne ci-dessous une correction de Recipe.format telle que demandée dans l'exercice précédent.
    Ce code formate donc le template mais sans ses ingrédient. A vous de le compléter pour remplacer le 
    tag {{liste}} par les ingrédients de la recette.
*/
/* Recipe.format
   . paramètre r : un objet similaire à DataRecipe
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template de la recette
*/
Recipe.format = function(r){
    let html = template;
    html = html.replace('{{url}}', r.info.photo);
    html = html.replace('{{titre}}', r.info.name);
    html = html.replace('{{temps}}', r.info.time.cooking+r.info.time.preparation);
    html = html.replace('{{niveau}}', r.info.difficulty);
    html = html.replace('{{cout}}', r.info.cost);
    html = html.replace('{{texte}}', r.info.description);

    // TODO : Ajouter ici les instructions pour formater les ingrédients de la recette
    // pour remplacer le tag {{liste}} du template "Ingredient"
    
    
    return html;
}



/* Recipe.render
   . paramètre where : un selecteur CSS pour désigner l'élément où insérer les recettes
   . paramètre what : un objet décrivant une recette
   > aucune valeur de retour   
*/
Recipe.render = function( where, what ){
    // sélection de la div de classe '.content' où insérer la recette donnée par le paramètre r
    let element = document.querySelector(where);
    // modification du contenu HTML de l'élément div avec le template formatée de la recette r
    element.innerHTML = Recipe.format(what);
}


export {Recipe};