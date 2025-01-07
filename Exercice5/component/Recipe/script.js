
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


/* Objet Recipe
   Recipe est un objet qui symbolise le composant Recipe. Il relève de la vue de notre "application".
*/
let Recipe = {}; 


/* Recipe.format
   . paramètre r : un objet similaire à oneRecipe 
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template
*/
Recipe.format = function(r){
    let html = template;
    html = html.replace('{{url}}', r.info.photo);
    html = html.replace('{{titre}}', r.info.name);
    html = html.replace('{{temps}}', r.info.time.cooking+r.info.time.preparation);
    html = html.replace('{{niveau}}', r.info.difficulty);
    html = html.replace('{{cout}}', r.info.cost);
    html = html.replace('{{texte}}', r.info.description);

    return html;
}


/* Recipe.render
   . paramètre where : le selecteur CSS de l'élément où afficher la recette r
   . paramètre r : un objet décrivant une recette, avec un structure similaire à DataRecipe
   > aucune valeur de retour   
*/
Recipe.render = function( where, r ){
    let element = document.querySelector(where)
    element.innerHTML = Recipe.format(r);
}


// On "exporte" l'objet Recipe pour qu'il soit utilisable ailleurs.
// Seul Recipe pourra être utilisé ailleurs, pas le reste.
// Par exemple la variable/constante template ne sera pas accessible depuis l'extérieur.
export {Recipe};