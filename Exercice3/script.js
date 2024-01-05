/*
    Objectif de l'exercice :
    
    . Comprendre à travers des exemples simples le principe du templating
    . Savoir faire bon usage de l'élément HTML <template>

    Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css 

*/

/* Q0 

   Les petites questions qui suivent illustrent comment formater une chaine de caractères et comment l'appliquer à un template.
   Les question Q0.a à Q0.d sont indépendantes. Commentez vos réponses au fur et à mesure pour éviter les "interférences"
*/
// variables utiles à toutes les questions (ne pas commenter)
let chaine, chaine_formatee;
let prez = "Chan Santokhi";

/* Q0.a
   Considérant la chaine "name est le président du Suriname", on souhaite remplacer name en début 
   de chaine par la valeur de la variable prez ("Chan Santokhi"). Pour ce, documentez vous sur la méthode replace :
   https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   Puis complétez les instructions ci-dessous pour afficher le résultat souhaité dans la console du navigateur. */
chaine = "name est le président du Suriname."
// ??
console.log(chaine_formatee); // --> "Chan Santokhi est le président du Suriname."

/* Q0.b
   La méthode replace remplace la première occurence (apparition) d'une sous-chaîne dans une chaîne.
   Appelons 'tag' la sous-chaine à remplacer. Mais si le tag est présent plusieurs fois dans la chaîne,
   on voudra certainement remplacer toutes les occurences du tag et pas seulement la première.
   Documentez-vous sur la méthode replaceAll :
   https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
   Puis remplacez toutes les occurences du tag "name" dans "Connaissez-vous name ? Oui, name est le président du Suriname." */
/*  (décommentez)
chaine = "Connaissez-vous name ? Oui, name est le président du Suriname.";
// ??
console.log(chaine_formatee); // --> "Connaissez-vous Chan Santokhi ? Oui, Chan Santokhi est le président du SuriChan Santokhi."
*/

/* Q0.c
   L'exemple précédent illustre le problème qui se pose lorsque le tag à remplacer fait parti d'un autre mot.
   La machine ne sait pas que le "name" de Suriname ne doit pas être remplacé.
   Pour éviter ce genre d'aléa, une pratique courante est d'encadrer les tags pour être certain
   qu'ils ne formeront pas une sous-partie du reste de la chaîne. Par exemple {{name}} au lieu de name.
   Cette notation {{...}} est souvent utilisée dans des templates par différents frameworks JS.
   Refaite la précédente question en remplaçant cette fois {{name}} dans la chaine : */
/* (décommentez)
chaine = "Connaissez-vous {{name}} ? Oui, {{name}} est le président du Suriname.";
// ??
console.log(chaine_formatee); // --> "Connaissez-vous Chan Santokhi ? Oui, Chan Santokhi est le président du Suriname."
*/

/* Q0.d
   Comme vous venez de le voir, il est plutôt simple de formater une chaine avec des tags que l'on remplace par d'autres données.
   Et si cette chaîne correspond à un "morceau" de code HTML dans lequel on a placé des tags là où l'on veut faire apparaître 
   certaines données, et bien on parle d'un template HTML.
   Un template HTML est un bout de code HTML avec des tags. Le template n'est pas directement utilisable dans la page.
   Il doit êtres formaté (remplacement des tags) avant d'être ajouté à la page.
   Par exemple, un template simpliste peut être : "<h1>{{title}}</h1>" 
   Où le tag {{title}} sera remplacé par un vrai titre avant que le tout ne soit utilisé dans la page.

   Vous constaterez dans index.html qu'il y a un élément <template> d'identifiant "ingredient_template".
   Il contient un bout d'HTML (un élément de liste) avec 2 tags.
   Notez qu'un élément <template> est ignoré par le navigateur. Celui-ci sait que son contenu n'est pas prêt à être affiché.
   Pour autant, un élément <template> est sélectionnable en Javascript (querySelector !) de sorte à ce qu'on puisse accéder
   à son contenu.

   Pour vérifier que vous avez saisi le principe du templating, vous allez utiliser les données de l'objet data (ci-dessous)
   pour formater le template "ingredient_template". Et vous ajouterez le template formaté à la liste <ul> présente dans 
   la page.
   Bien qu'il existe plusieurs façon de procéder, je vous recommande de faire bon usage de la propriété innerHTML d'un élément.
   Elle va vous permettre d'obtenir sous forme de chaîne tout le contenu HTML d'un élément (quel qu'il soit, template ou autre) :
   https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML
   La propriété innerHTML soulève certaines questions de sécurité. Mais, pour débuter, on les laissera de côté.
*/

let data = {
   name: 'arsenic', 
   quantity:'1 louche'
};
// ??
