const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const { URLSearchParams } = require('url');

fetch.Promise = Bluebird;

let url = new URL("https://www.thecocktaildb.com/api/json/v1/1/lookup.php");

ingredient_list = []
for(i=1; i<574; i++){
    url.search = new URLSearchParams({iid: i});
    fetch( url )
    .then( res => res.json() )
    .then( response => {
        if(response.ingredients != null){
            ingre = {
                "id" : response.ingredients[0].idIngredient,
                "name" : response.ingredients[0].strIngredient,
                "type" : response.ingredients[0].strType
            }
            ingredient_list.push(ingre);
            console.log(ingre);
            console.log(",");
        }
    })
    .catch( error => console.error( 'Error:', error ) );
}
