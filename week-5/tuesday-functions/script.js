// DOM Selectors
const messageBox = document.getElementById("message")


// console.log("Global scope")

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
    messageBox.innerHTML += `<p>${nameInput.value}</p>`
  })

}

askForUsersName()

//EventListener at the bottom