const loadMeals = ()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    // console.log(meals)
    meals.forEach(meal => {
        console.log(meal.strMeal)

        const mealsContainer = document.getElementById('meals-container')
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('card-body')
        mealDiv.innerHTML = `
            <div id="meals-container" class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
          </div>
        </div>
        `
mealsContainer.appendChild(mealDiv)
        
    });
}
loadMeals()