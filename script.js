// Show chatbot section when clicking "Start Chat"
document.getElementById("start-chat-button").addEventListener("click", function () {
    document.getElementById("chatbot-section").classList.remove("hidden");
    this.style.display = "none"; // Hide the start chat button
});

// Handle sending user message and receiving response from Gemini AI
document.getElementById("send-message").addEventListener("click", async function () {
    const userMessage = document.getElementById("user-message").value;
    const chatbotContainer = document.getElementById("chatbot");

    if (userMessage.trim() === "") return;

    // Display user message
    chatbotContainer.innerHTML += `<div><strong>User:</strong> ${userMessage}</div>`;

    // Send the message to Gemini AI (Replace with real API request)
    try {
        const response = await fetch('https://api.gemini.ai/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userMessage })
        });
        const data = await response.json();
        
        // Display the bot's response
        chatbotContainer.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;
    } catch (error) {
        chatbotContainer.innerHTML += `<div><strong>Bot:</strong> Sorry, I couldn't understand that. Please try again later.</div>`;
    }

    // Clear input field after sending the message
    document.getElementById("user-message").value = "";
    chatbotContainer.scrollTop = chatbotContainer.scrollHeight; // Scroll to the bottom
});

// Document Submission (Dummy functionality for now)
document.getElementById("document-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const fileInput = document.getElementById("file-upload");
    if (fileInput.files.length === 0) return;

    alert("Document submitted successfully!");

    // Normally, you'd send this file to a backend server here using FormData
});

// Personalized Recommendations (Dummy functionality)
document.getElementById("recommendations-button").addEventListener("click", function () {
    const recommendations = [
        "Course on Data Science for future career growth.",
        "Explore internships with top tech companies.",
        "Attend seminars on industry-specific skill development."
    ];

    const recommendationsList = recommendations.map(rec => `<li>${rec}</li>`).join('');
    document.getElementById("recommendations-list").innerHTML = `<ul>${recommendationsList}</ul>`;
});
