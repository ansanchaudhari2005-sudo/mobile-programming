// Firebase App
import { initializeApp } from
    "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

// Firebase Realtime Database
import {
    getDatabase,
    ref,
    push,
    set
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";


// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdSxXFM13vKhRnGvW1LE0aaf-ySNcfMCA",
    authDomain: "mobile-programmingg.firebaseapp.com",
    databaseURL: "https://mobile-programmingg-default-rtdb.firebaseio.com",
    projectId: "mobile-programmingg",
    storageBucket: "mobile-programmingg.firebasestorage.app",
    messagingSenderId: "958196930861",
    appId: "1:958196930861:web:79a6979c629a8d20a69ba4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Connect to Realtime Database
const database = getDatabase(app);


// Get form elements
const form = document.getElementById("contactForm");
const result = document.getElementById("result");
const submitButton = document.getElementById("submitButton");


// Form submission
form.addEventListener("submit", async function(event) {

    event.preventDefault();

    // Get data from form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (!name || !email || !message) {
        result.textContent = "Please fill in all fields.";
        result.style.color = "red";
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    result.textContent = "";

    try {

        // Create automatic unique ID using push()
        const contactRef = push(ref(database, "contacts"));

        // Get the generated ID
        const uniqueId = contactRef.key;

        // Save data to Firebase using set()
        await set(contactRef, {
            name: name,
            email: email,
            message: message
        });

        // Show data in browser console
        console.log("Data added successfully!");
        console.log("Unique ID:", uniqueId);
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Display success message
        result.textContent = "Your message was sent successfully!";
        result.style.color = "green";

        // Clear the form
        form.reset();

    } catch (error) {

        console.error("Firebase Error:", error);

        result.textContent =
            "Failed to send message. Please try again.";

        result.style.color = "red";

    } finally {

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";

    }

});