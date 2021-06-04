const cocktails = [
    {
        name:"Cosmopolitan",
        imgId:"cosmopolitan.jpg",
        mainAlcohol:"Vodka",
        ingredients:":1 1/2 oz Vodka Citron, 1 oz Cranberry juice, 1/2 oz Cointreau, 1/2 oz Fresh lime juice.",
        served:"Straight up; without ice.",
        garnish:"Lemon slice, Lime wedge",
        drinkware:"Cocktail Glass",
        category:"vodka",
        price:8,
        categoryId:1,
    },
    {
        name:"Bloody Mary",
        imgId:"bloody_mary.jpg",
        mainAlcohol:"Vodka",
        ingredients:":1 1/2 oz Vodka, 1/2 oz Lemon juice, 3 oz Tomato juice, Pepper, Salt, Tabasco, Worcestershire Sauce.",
        served:"On the rocks; poured over ice.",
        garnish:"Celery stalk or dill pickle spear",
        drinkware:"Highball Glass",
        category:"vodka",
        price:5,
        categoryId:1,
    },
    {
        name:"Blue Lagoon",
        imgId:"blue_lagoon.jpg",
        mainAlcohol:"Vodka",
        ingredients:"1 part Blue Curacao, 1 part Vodka, 4 parts Lemonade.",
        served:"On the rocks; poured over ice.",
        garnish:"Orange slice or lemon slice",
        drinkware:"Highball Glass or Cocktail Glass",
        category:"vodka",
        price:8,
        categoryId:1,
    },
    {
        name:"Sex on the Beach",
        imgId:"sex_on_the_beach.jpg",
        mainAlcohol:"Vodka",
        ingredients:":1 1/3 oz Cranberry juice, 1 1/3 oz Orange juice, 1 1/3 oz Vodka, 2/3 oz Peach schnapps.",
        served:"On the rocks; poured over ice.",
        garnish:"Orange slice",
        drinkware:"Highball Glass",
        category:"vodka",
        price:6,
        categoryId:1,
    },
    {
        name:"Screwdriver",
        imgId:"screwdriver.jpg",
        mainAlcohol:"Vodka",
        ingredients:":1 3/4 oz (1 part) Vodka, 3 1/2 oz (2 parts) Orange juice.",
        served:"On the rocks; poured over ice.",
        garnish:"Orange Slice",
        drinkware:"Highball Glass",
        category:"vodka",
        price:6,
        categoryId:1,
    },
    {
        name:"White Russian",
        imgId:"white_russian.jpg",
        mainAlcohol:"Vodka",
        ingredients:":1 2/3 oz (5 parts) Vodka, 1 oz (3 parts) Fresh cream, 2/3 oz (2 parts) Coffee liqueur.",
        served:"On the rocks; poured over ice.",
        garnish:"None",
        drinkware:"Old Fashioned glass",
        category:"vodka",
        price:7,
        categoryId:1,
    },
    {
        name:"Gin & Tonic",
        imgId:"gin_and_tonic.jpg",
        mainAlcohol:"Gin",
        ingredients:":1 part to 3 parts gin (to taste), 3 parts tonic water.",
        served:" On the rocks; poured over ice.",
        garnish:"A slice or wedge of lime",
        drinkware:"Highball glass or Rocks glass",
        category:"gin",
        price:6,
        categoryId:2,
    },
    
    {
        name:"Pink Gin",
        imgId:"pink_gin.jpg",
        mainAlcohol:"Gin",
        ingredients:":Dash of Angostura Bitters, One part Plymouth gin.",
        served:"Straight up; without ice",
        garnish:"Lemon",
        drinkware:"Cocktail glass",
        category:"gin",
        price:7,
        categoryId:2,
    },
    
    {
        name:"Tom Collins",
        imgId:"tom_collins.jpg",
        mainAlcohol:"Gin",
        ingredients:":1 1/2 oz (3 parts) Old Tom Gin, 1 oz (2 parts) Freshly squeezed lemon juice, 1/2 oz (1 part) sugar syrup, 2 oz (4 parts) carbonated water.",
        served:"On the rocks; poured over ice.",
        garnish:"Lemon slice, Maraschino cherry",
        drinkware:"Collins glass",
        category:"gin",
        price:8,
        categoryId:2,
    },
    
    {
        name:"Negroni",
        imgId:"Negroni.jpg",
        mainAlcohol:"Gin",
        ingredients:":1 oz (1 part) Campari, 1 oz (1 part) Gin, 1 oz (1 part) Sweet red Vermouth.",
        served:"On the rocks; poured over ice.",
        garnish:"Orange peel",
        drinkware:"Old Fashioned glass",
        category:"gin",
        price:8,
        categoryId:2,
    },
    
    {
        name:"Martini",
        imgId:"martini.jpg",
        mainAlcohol:"Gin",
        ingredients:":1/2 oz (1 part) Dry vermouth, 3 oz (6 parts) Gin.",
        served:"Straight (or on the rocks).",
        garnish:"Lemon twist, Olive",
        drinkware:"Cocktail glass",
        category:"gin",
        price:6,
        categoryId:2,
    },
    
    {
        name:"Gimlet",
        imgId:"gimlet.jpg",
        mainAlcohol:"Gin",
        ingredients:":Four parts Gin, One part sweetened Lime Juice.",
        served:"Straight or on the rocks",
        garnish:"Orange peel or lime",
        drinkware:"Cocktail glass",
        category:"gin",
        price:6,
        categoryId:2,
    },
    {
        name:"Tequila Sunrise",
        imgId:"tequila_sunrise.jpg",
        mainAlcohol:"Tequila",
        ingredients:":1 1/2 oz (3 parts) Tequila, 1/2 oz (1 part) Grenadine syrup, 3 oz (6 parts) Orange juice.",
        served:"On the rocks; poured over ice.",
        garnish:"Cherry, Orange slice",
        drinkware:"Collins glass",
        category:"tequila",
        price:8,
        categoryId:3,
    },
    {
        name:"Paloma",
        imgId:"paloma.jpg",
        mainAlcohol:"Tequila",
        ingredients:":One part tequila, Three parts grapefruit soda.",
        served:"On the rocks; poured over ice.",
        garnish:"Lime wedge",
        drinkware:"Highball glass",
        category:"tequila",
        price:7,
        categoryId:3,
    },
    {
        name:"Margarita",
        imgId:"margarita.jpg",
        mainAlcohol:"Tequila",
        ingredients:":1 oz Cointreau, 1 oz Lime juice, 2 oz Tequila.",
        served:"On the rocks; poured over ice.",
        garnish:"Lime slice, Salt on the rim",
        drinkware:"Margarita glass",
        category:"tequila",
        price:6,
        categoryId:3,
    },
    {
        name:"Tequila Slammer",
        imgId:"tequila_slammer.jpg",
        mainAlcohol:"Tequila",
        ingredients:":One part 7 Up, Ginger Ale or Mountain Dew, One part Tequila.",
        served:"Straight up; without ice.",
        garnish:"Lime",
        drinkware:"Rocks glass",
        category:"tequila",
        price:6,
        categoryId:3,
    },
    {
        name:"Long Island Iced Tea",
        imgId:"long_island_iced_tea.jpg",
        mainAlcohol:"Tequila",
        ingredients:"1 oz Gomme Syrup, 1 oz Lemon juice, 1/2 oz Tequila, 1/2 oz Gin, 1/2 oz Triple sec, 1/2 oz Vodka, 1/2 oz White rum, splash of cola.",
        served:"On the rocks; poured over ice.",
        garnish:"Lemon Spiral",
        drinkware:"Highball glass",
        category:"tequila",
        price:7,
        categoryId:3,
    },
    {
        name:"Matador",
        imgId:"matador.jpg",
        mainAlcohol:"Tequila",
        ingredients:":1 to 1.5 parts Silver or Blanco tequila, 2 to 3 parts Pineapple juice, Juice of half a Lime, Sour mix.",
        served:"Shaken",
        garnish:" Lime slice or twist",
        drinkware:"Champagne flute, Cocktail glasss",
        category:"tequila",
        price:5,
        categoryId:3,
    },
    
    
];
const categories = [
    // {
    //     id: 0, 
    //     title: "Popular", 
    // },
    {
        id: 1, 
        title: "Vodka", 
    },
    {
        id: 2, 
        title: "Gin", 
    },
    {
        id: 3, 
        title: "Tequila", 
    },
]

function init(){
    initScreens();

    initItemDetails();

    displayCocktails(cocktails);

    displayCategories(categories);
    
    addFilterListener();
};

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
    // addThumbnailClickListeners();
};

function displayCategories(categoriesArray){
    console.log(categoriesArray)
    let html = ``;
    for( const category of categoriesArray){
        html += `<li class="category" data-id="${category.id}"><h4>${category.title}</h4></li>`;
    }; 
    $("#categories").html(html);
    addCategoryClickListeners();

}

function addCategoryClickListeners(){
    $('.category').click(function(){
        const selectedCategory = $(this).data('id');
        
        const filteredCategories = cocktails.filter(function(cocktail){
            return cocktail.categoryId === selectedCategory;
        });
        displayCocktails(filteredCategories);

    });

    $('#all-category').click(function(){displayCocktails(cocktails)})
};


function addThumbnailClickListeners(){
    $('.cocktail-thumbnail').click(function(){
        const cocktailId = $(this).data('id');
        openItemDetail();
    })
};

function openItemDetail(){
    $('#item-details').show();
}

function initItemDetails(){
    $('#item-details').hide();
    // $('#item-details').click(function(){
    //     $(this).hide()
    //     $('#item-details img').attr('src', '');

    // });
}

function addFilterListener(){
    $("#search-input").keyup(function(){
        const searchString = $("#search-input").val();
        const filteredArray = cocktails.filter(function(cocktail){
            return cocktail.name.toLowerCase().includes(searchString.toLowerCase())
        });
        displayCocktails(filteredArray);
    });
}

function initScreens(){
    $('.view').slice(1).hide();
    $('.nav-link').click(changeScreen);
};

function changeScreen(){
    $('.view').hide();
    let view = $(this).data('view');
    $('#' + view).show();
}

init();

// let obj = {
//     hello: "hello"
// }