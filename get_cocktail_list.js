const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const { URLSearchParams } = require('url');

fetch.Promise = Bluebird;

let url = new URL("https://en.wikipedia.org/w/api.php");
let ingredient = ["gin", "vodka", "rum", "tequila"]
let params = {}
url.search = new URLSearchParams(params);


fetch( url )
.then( res => res.json() )
.then( response => {
    console.log( 'Success:');
    link_array = [];
    manifest_array = [];
    response.items.forEach( function(value) {
        link_array.push(value.link);
    });
    link_array.forEach( function(value) {
        fetch(value)
        .then(res => res.json() )
        .then( response => {
            for(var i = 0; i < 3; i++ ){
                if(response.object.aggregations[0].webResources[i].dctermsIsReferencedBy != null){
                    manifest_array.push(response.object.aggregations[0].webResources[i].dctermsIsReferencedBy[0]);
                    console.log(response.object.aggregations[0].webResources[i].dctermsIsReferencedBy[0]);
                }
            }
            Promise.all(manifest_array)
            .then(function(arr) {
                return arr;
            });
        });
    });
})
.catch( error => console.error( 'Error:', error ) );