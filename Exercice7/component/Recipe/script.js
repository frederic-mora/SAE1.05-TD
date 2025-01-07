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

/* Recipe.formatOneIngredient
    . paramètre name : le nom de l'ingrédient
    . paramètre quantity : la quantité de l'ingrédient
    > valeur de retour : une chaine correspondant au contenu HTML formaté du template "Ingredient"
*/
Recipe.formatOneIngredient = function(name, quantity){
     // Reporter votre réponse de l'exercice précédent
}

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
    
    // Reporter votre réponse de l'exercice précédent
    
    return html;
}


/* Q1:
    Reportez ci-dessus vos réponses aux questions de l'exercice précédent.
    Puis complétez la fonction Recipe.render de sorte à pouvoir afficher plusieurs recettes.
    Cette fois le paramètre what représente donc un tableau d'objets décrivant des recettes.
*/

/* Recipe.render
   . paramètre where : un selecteur CSS pour désigner l'élément où insérer les recettes
   . paramètre what : un tableau d'objets décrivant des recettes
   > aucune valeur de retour   
*/
Recipe.render = function( where, what ){
    // TODO
}


export {Recipe};