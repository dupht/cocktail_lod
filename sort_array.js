const fs = require("fs");
const ingredients_txt = fs.readFileSync("ingredients.json");
const ingredients_json = JSON.parse(ingredients_txt);
const ingredients_array = ingredients_json.ingredients;

function compare(a, b) {
    var r = 0;
    if( 1*a.id < 1*b.id ) {
        r = -1;
    }else if( 1*a.id > 1*b.id ) {
        r = 1;
    }
    return r;
}

ingredients_array.sort( compare );

fs.writeFileSync("test.json", JSON.stringify(ingredients_array) );