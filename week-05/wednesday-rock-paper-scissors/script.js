// DOM Selectors
const messageBox = document.getElementById("message")

let computerWeapon = "scissors"
let winner = ""

// let userNameInput = ""
// console.log("Global scope")

const generateComputerWeapon = () => {
  const weapons = ["rock", "paper", "scissors"]
  const randomIndex = Math.floor(Math.random() * weapons.length)
  computerWeapon = weapons[randomIndex]
  // console.log("Computer weapon: ", computerWeapon)
}

generateComputerWeapon()

const askForUsersName = () => {
  console.log("askForUsersName function is running")
  // console.log("Local scope")

  messageBox.innerHTML = `
    <p>What's your name?</p>
    <input id="userNameInput" />
    <button id="sendButton">Send</button>
  `

  //We locate these DOM selectors here because the HTML elements were created in this local scope
  const nameInput = document.getElementById("userNameInput")
  const sendButton = document.getElementById("sendButton")

  //We locate the eventListener here because the DOM selectors were created in this local scope
  sendButton.addEventListener("click", () => {
    console.log("Send button is clicked")
    askForUsersWeapon(nameInput)
  })
}

const askForUsersWeapon = (userNameInput) => {
  console.log("askForUsersWeapon is now running")
  messageBox.innerHTML += `
    <p>Hi ${userNameInput.value}!</p>
    <p>What weapon do you want to pick?</p>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
  `

  const rockButton = document.getElementById("rock")
  const paperButton = document.getElementById("paper")
  const scissorsButton = document.getElementById("scissors")

  rockButton.addEventListener("click", () => {
    console.log("Rock button was clicked")
    compareWeapons("rock")
  })
  paperButton.addEventListener("click", () => {
    console.log("Paper button was clicked")
    compareWeapons("paper")
  })
  scissorsButton.addEventListener("click", () => {
    console.log("Scissors button was clicked")
    compareWeapons("scissors")
  })
}

const compareWeapons = (userWeapon) => {
  console.log(`compareWeapons function is running with the argument ${userWeapon}`)

  if (computerWeapon === userWeapon) {
    winner = null //It's a tie
  } else if (
    (userWeapon === "rock" && computerWeapon === "scissors") ||
    (userWeapon === "scissors" && computerWeapon === "paper") ||
    (userWeapon === "paper" && computerWeapon === "rock")
  ) {
    winner = "user" // User wins
  } else {
    winner = "computer" //Computer wins
  }

  console.log("Winner: ", winner)
  revealWinner(userWeapon)
}

const revealWinner = (userWeapon) => {
  console.log("revealWinner function is running")
  let declarationOfWinnerMessage = ""

  if (winner === null) {
    declarationOfWinnerMessage = `It's a tie - you both picked ${computerWeapon}`
  } else if (winner === "computer") {
    declarationOfWinnerMessage = `Sorry, the computer won with ${computerWeapon} against your ${userWeapon}`
  } else {
    declarationOfWinnerMessage = `Congratz, you won with ${userWeapon} against the computer's ${computerWeapon}`
  }

  messageBox.innerHTML += `<h2>${declarationOfWinnerMessage}</h2>`
}


askForUsersName()

//EventListener at the bottom