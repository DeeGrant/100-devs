//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrinks)

function getDrinks() {
    let drink = 'margarita'
    drink = document.querySelector('input').value.replaceAll(' ', '_')
    console.log(drink)
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let img = document.querySelector('img')
            let drink = data.drinks[0]
            img.src = drink.strDrinkThumb
            // img.src = drink.strImageSource
            img.alt = drink.strDrink
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

// TODO Homework
// miss-spellings
// push: rotating array of drinks -> automatically runs