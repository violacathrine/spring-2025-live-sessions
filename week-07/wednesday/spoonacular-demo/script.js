const BASE_URL = "https://api.spoonacular.com/recipes/random"
const API_KEY = "9b5ab0a35d0d4c68a562ab5595c9bed8"
const URL = `${BASE_URL}/?apiKey=${API_KEY}&number=100` // fetch a lot of recipes

const fetchRecipies = async () => {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log('data', data)

    // ensure that we have at least one cuisine AND an image AND a title 
    const validRecipes = data.recipes.filter(recipe => {
      return recipe.cuisines.length > 0 && recipe.image && recipe.title
    })

    console.log(validRecipes)

    //render valid recipes in the DOM
    // renderRecipes(validRecipes)




  } catch (error) {
    console.error('error:', error.message)
  }
}

fetchRecipies()