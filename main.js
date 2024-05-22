const WebSocket = require("ws");

// URL of the WebSocket server
const url = "wss:///realtime.haire.ai/ws/interview_process/897912";

// Function to handle WebSocket connection
function setupWebSocket() {
  // Create a new WebSocket connection
  const ws = new WebSocket(url);

  // Event handler for when the connection is open
  ws.on("open", function open() {
    console.log("Connected to the server");

    // Send a message to the WebSocket server
    ws.send(
      JSON.stringify({
        interview_stage: "processing",
        ai_question: "",
        candidate_answer: "Good Afternoon",
      })
    );
  });

  // Event handler for when a message is received from the server
  ws.on("message", function incoming(message) {
    console.log("Received:", message);
  });

  // Event handler for handling errors
  ws.on("error", function error(error) {
    console.error("WebSocket error:", error);
  });

  // Event handler for when the connection is closed
  ws.on("close", function close() {
    console.log("Disconnected from the server");
  });
}

// Function to simulate multiple users
function simulateUsers(userCount) {
  for (let i = 0; i < userCount; i++) {
    setupWebSocket();
  }
}

// Start the test with a specific number of simulated users
simulateUsers(100); // Adjust the number as necessary for your load test
