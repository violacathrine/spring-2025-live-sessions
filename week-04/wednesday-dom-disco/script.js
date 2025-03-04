console.log("Script connected")

// DOM selectors first
const question1 = document.getElementById("question-1")
const question2 = document.getElementById("question-2")
const discoBall = document.getElementById("disco-ball")

//Functions (next week's topic)


//Event Listeners last
question1.addEventListener("click", () => {
  console.log("H3 on question 1 is clicked")
  question1.classList.toggle("open")
})

question2.addEventListener("click", () => question2.classList.toggle("open"))


discoBall.addEventListener("click", () => {
  console.log("Disco ball clicked")
  document.body.classList.toggle("disco-time")
})