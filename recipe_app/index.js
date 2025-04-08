let link = "https://www.themealdb.com/api/json/v1/1/random.php";
let recipeEl = document.querySelector("#recipe");

fetch(link).then(response => response.json())
           .then(json => displayRecipe(json.meals));
           

function displayRecipe(recipe) {    

    [...recipe].forEach(item => {
        
        recipeEl.innerHTML = `
            <img src="${item.strMealThumb}">
            <p>${item.strMeal}</p>
            <p>${item.strCategory}</p>
            <p>${item.strArea}</p>
            <p>${item.strInstructions}</p>
        `;

    });

}