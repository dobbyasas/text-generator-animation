const chatGPTText = document.getElementById("chatGPTText");
const typingIndicator = document.querySelector(".typing-indicator");
const message = "Hello, how can I assist you today?";

let index = 0;

function typeMessage() {
    if (index < message.length) {
        chatGPTText.textContent += message.charAt(index);
        index++;
        setTimeout(typeMessage, 50);
    } else {
        typingIndicator.style.display = "none";
    }
}

setTimeout(typeMessage, 1000);
