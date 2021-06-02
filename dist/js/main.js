const cocktails = [
    {
        name:"Cosmopolitan",
        imgId:"cosmopolitan.jpg",
        mainAlcohol:"Vodka",
        ingredients:"1 1/2 oz Vodka Citron, 1 oz Cranberry juice, 1/2 oz Cointreau, 1/2 oz Fresh lime juice.",
        served:"Straight up; without ice.",
        garnish:"Lemon slice, Lime wedge",
        drinkware:"Cocktail Glass",
        category:"vodka",
        price:8,
    },
    {
        name:"Bloody Mary",
        imgId:"bloody_mary.jpg",
        mainAlcohol:"Vodka",
        ingredients:": 1 1/2 oz Vodka, 1/2 oz Lemon juice, 3 oz Tomato juice, Pepper, Salt, Tabasco, Worcestershire Sauce.",
        served:" On the rocks; poured over ice.",
        garnish:"Celery stalk or dill pickle spear",
        drinkware:"Highball Glass",
        category:"vodka",
        price:7,
    },
    
];

function init(){
    displayCocktails(cocktails);
    displayCategories();
}

function displayCocktails(cocktailArray){
    let html = ``;
    for (const cocktail of cocktailArray){
        html += `<div class ="cocktail-thumbnail">
            <img src="../assets/imgDrinks/cropped_${cocktail.imgId}" alt="${cocktail.name} Cocktail">
            <div>
                <span>
                    <h6>${cocktail.name}</h6>
                    <p>${cocktail.mainAlcohol}</p>
                </span>
                <h5>$${cocktail.price}</h5>
            </div>
        </div>`;    
    }
    $('.cocktails').html(html);
}



init();