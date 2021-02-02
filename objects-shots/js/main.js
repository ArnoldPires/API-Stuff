//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#cockTail').addEventListener('click', getDrink)
document.querySelector("#gin").addEventListener("click", getGin);
document.querySelector("#vod").addEventListener("click", getDrink);
document.querySelector("#mary").addEventListener("click", getDrink);
document.querySelector("#marg").addEventListener("click", getDrink);
document.querySelector("#whis").addEventListener("click", getDrink);
document.querySelector("#pina").addEventListener("click", getDrink);
document.querySelector("#tea").addEventListener("click", getDrink);

function getDrink() {
    let drinkChoice = document.querySelector('input').value
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkChoice

    fetch(url)
    .then(res => res.json()) //Parse response as JSON
    .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('#cat').innerText = data.drinks[0].strCategory
        document.querySelector("#glass").innerText = data.drinks[0].strGlass;
        document.querySelector("#instructions").innerText = data.drinks[0].strInstructions;
        document.querySelector("#ingredient1").innerText = data.drinks[0].strIngredient1;
        document.querySelector("#ingredient2").innerText = data.drinks[0].strIngredient2;
        document.querySelector("#ingredient3").innerText = data.drinks[0].strIngredient3;
        document.querySelector("#ingredient4").innerText = data.drinks[0].strIngredient4;
        document.querySelector("#shots1").innerText = data.drinks[0].strMeasure1;
        document.querySelector("#shots2").innerText = data.drinks[0].strMeasure2;
        document.querySelector("#shots3").innerText = data.drinks[0].strMeasure3;
        document.querySelector("#shots4").innerText = data.drinks[0].strMeasure4;
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
//drinks
//Gin
//vodka
//Blood Mary
//Margarita
//Whiskey
//Pina Colda
//Mai
//Long Island Tea