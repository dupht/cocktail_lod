//https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const { URLSearchParams } = require('url');
const fs = require("fs");

fetch.Promise = Bluebird;

let url = new URL("https://www.thecocktaildb.com/api/json/v1/1/lookup.php");

for(j=21000; j<22000; j++){
    url.search = new URLSearchParams({i: j});
    fetch( url )
    .then( res => res.json() )
    .then( response => {
        if(response.drinks != null){
            cock = {
                "id" : response.drinks[0].idDrink,
                "name" : response.drinks[0].strDrink,
                "category" : response.drinks[0].strCategory,
                "strGlass" : response.drinks[0].strGlass,
                "instruction" : response.drinks[0].strInstructions,
                "Thumbnail" : response.drinks[0].strDrinkThumb,
                "Ingredient1" : response.drinks[0].strIngredient1,
                "Ingredient2" : response.drinks[0].strIngredient2,
                "Ingredient3" : response.drinks[0].strIngredient3,
                "Ingredient4" : response.drinks[0].strIngredient4,
                "Ingredient5" : response.drinks[0].strIngredient5,
                "Ingredient6" : response.drinks[0].strIngredient6,
                "Ingredient7" : response.drinks[0].strIngredient7,
                "Ingredient8" : response.drinks[0].strIngredient8,
                "Ingredient9" : response.drinks[0].strIngredient9,
                "Ingredient10" : response.drinks[0].strIngredient10,
                "Ingredient11" : response.drinks[0].strIngredient11,
                "Ingredient12" : response.drinks[0].strIngredient12,
                "Ingredient13" : response.drinks[0].strIngredient13,
                "Ingredient14" : response.drinks[0].strIngredient14,
                "Ingredient15" : response.drinks[0].strIngredient15,
                "recipes" : 
                response.drinks[0].strIngredient1 + "    " +  response.drinks[0].strMeasure1 + "\n" +
                response.drinks[0].strIngredient2 + "    " +  response.drinks[0].strMeasure2 + "\n" +
                response.drinks[0].strIngredient3 + "    " +  response.drinks[0].strMeasure3 + "\n" +
                response.drinks[0].strIngredient4 + "    " +  response.drinks[0].strMeasure4 + "\n" +
                response.drinks[0].strIngredient5 + "    " +  response.drinks[0].strMeasure5 + "\n" +
                response.drinks[0].strIngredient6 + "    " +  response.drinks[0].strMeasure6 + "\n" +
                response.drinks[0].strIngredient7 + "    " +  response.drinks[0].strMeasure7 + "\n" +
                response.drinks[0].strIngredient8 + "    " +  response.drinks[0].strMeasure8 + "\n" +
                response.drinks[0].strIngredient9 + "    " +  response.drinks[0].strMeasure9 + "\n" +
                response.drinks[0].strIngredient10 + "    " +  response.drinks[0].strMeasure10 + "\n" +
                response.drinks[0].strIngredient11 + "    " +  response.drinks[0].strMeasure11 + "\n" +
                response.drinks[0].strIngredient12 + "    " +  response.drinks[0].strMeasure12 + "\n" +
                response.drinks[0].strIngredient13 + "    " +  response.drinks[0].strMeasure13 + "\n" +
                response.drinks[0].strIngredient14 + "    " +  response.drinks[0].strMeasure14 + "\n" +
                response.drinks[0].strIngredient15 + "    " +  response.drinks[0].strMeasure15 + "\n"
            }
            console.log("毎度ありっ！！カクテル一丁！！")
            fs.appendFile("cocktail_list.json", JSON.stringify(cock) + ",", function(err, result) {
                if(err) console.log('error', err);
            } );
        }
    })
    .catch( error => console.error( 'Error:', error ) );
}
