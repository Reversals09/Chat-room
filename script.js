let password = "Reversals@09";
let username;

function checkPassword() {
    let enteredPassword = document.getElementById("passwordInput").value;
    if (enteredPassword === password) {
        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("namePage").style.display = "block";
    } else {
        alert("Incorrect password!");
    }
}

function enterChat() {
    username = document.getElementById("nameInput").value;
    if (username) {
        document.getElementById("namePage").style.display = "none";
        document.getElementById("chatRoom").style.display = "block";
    } else {
        alert("Please enter your name!");
    }
}

function sendMessage() {
    let message = document.getElementById("messageInput").value;
    if (message) {
        let chatDisplay = document.getElementById("chatDisplay");
        chatDisplay.innerHTML += `<div><strong>${username}:</strong> ${message}</div>`;
        document.getElementById("messageInput").value = "";
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
}
