https://www.thecocktaildb.com/api.php

Search cocktail by name
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
Search ingredient by name
https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
Lookup full cocktail details by id
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
Lookup ingredient by ID
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552
Lookup a random cocktail
https://www.thecocktaildb.com/api/json/v1/1/random.php
List Popular cocktails (only available to $1+ Patreon supporters)
https://www.thecocktaildb.com/api/json/v1/1/popular.php
List most recent cocktails (only available to $1+ Patreon supporters)
https://www.thecocktaildb.com/api/json/v1/1/recent.php
Search by ingredient
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka
Filter by multi-ingredient (only available to $1+ Patreon supporters)
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis 
Filter by alcoholic
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
Filter by Category
https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
Filter by Glass
https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute
List the categories, glasses, ingredients or alcoholic filters
https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list



get_ingredient_list.jsではCocktail.dbからカクテルの材料一覧を取得する
JSONに直しやすいように標準出力する脳筋コードである(しかも非同期処理のせいでIDバラバラ)
JSON形式の材料一覧をID順に並べるのがsort_array.jsである(上のJSONだけに適応するため使いまわしはできない)
そうして生まれたのがingredients.json。以下のような配列である。IDはこのJSONの中で一意であり、Typeの振り分け規則は分からないけどVodka系のお酒はVodkaというTypeを持つという認識。しかし「Cherry liqueur」のTypeがnullだったり結構ガバガバな付け方。使えるかどうかは分からない...
  [ {
		"id": "1",
		"name": "Vodka",
		"type": "Vodka"
	},
	{
		"id": "2",
		"name": "Gin",
		"type": null
	},   ...  ]


食材の旬や特産はNode.jsのライブラリであるpuppeteerを使ってWebサイトからスクレイピングします
