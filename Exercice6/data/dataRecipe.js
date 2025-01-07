let DataRecipe =  
{
    info: {
        name: "Cookies maison",
        photo: './assets/cookies.jpg',
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

export {DataRecipe};