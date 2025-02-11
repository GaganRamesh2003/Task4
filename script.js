// Open Chatbot on button click
document.querySelector('.chatbot').addEventListener('click', function() {
    openChatbot();
});

function openChatbot() {
    const chatbotContainer = document.createElement('div');
    chatbotContainer.classList.add('chatbot-container');
    chatbotContainer.innerHTML = `
        <div class="chatbot-header">
            <span>Chat with Us</span>
            <button onclick="closeChatbot()" class="text-white bg-red-600 px-2 py-1 rounded-full">X</button>
        </div>
        <div class="chatbot-messages" id="chatbot-messages">
            <div class="message bot-message">Hello! How can I assist you today?</div>
        </div>
        <input type="text" id="user-input" class="chatbot-input" placeholder="Type your message..." />
        <button class="chatbot-send-btn" onclick="sendMessage()">Send</button>
    `;
    document.body.appendChild(chatbotContainer);

    // Auto focus the input field
    document.getElementById('user-input').focus();
}

// Close the Chatbot interface
function closeChatbot() {
    const chatbotContainer = document.querySelector('.chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.remove();
    }
}

// Send Message to Chatbot
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // Don't send empty messages

    // Display user message in the chat
    displayMessage(userInput, 'user');

    // Simulate AI Response (can be replaced with real API call)
    simulateAIResponse(userInput);

    // Clear the input field
    document.getElementById('user-input').value = '';
}

// Display messages in the chat
function displayMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', `${sender}-message`);
    messageContainer.textContent = message;
    document.getElementById('chatbot-messages').appendChild(messageContainer);

    // Scroll to the bottom automatically
    document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;
}

// Simulate an AI Response (you can replace this with actual API integration)
function simulateAIResponse(userInput) {
    setTimeout(() => {
        let aiResponse = "I'm not sure how to answer that yet, but I'll get back to you soon!";
        displayMessage(aiResponse, 'bot');
    }, 1000); // Simulate a 1-second delay for response
}
