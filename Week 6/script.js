// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";


// Import Realtime Database functions
import {
    getDatabase,
    ref,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";


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


console.log("Firebase connected successfully!");


// ==========================================
// 5 USERS
// ==========================================

const users = {

    user1: {
        name: "Subeg Maharjan",
        email: "subeg@gmail.com"
    },

    user2: {
        name: "Ram Sharma",
        email: "ram@gmail.com"
    },

    user3: {
        name: "Sita Thapa",
        email: "sita@gmail.com"
    },

    user4: {
        name: "Hari Gurung",
        email: "hari@gmail.com"
    },

    user5: {
        name: "Anita Rai",
        email: "anita@gmail.com"
    }

};


// ==========================================
// SAVE DATA TO FIREBASE
// ==========================================

set(ref(database, "users"), users)

    .then(() => {

        console.log("5 users added successfully!");

    })

    .catch((error) => {

        console.error("Error adding users:", error);

    });


// ==========================================
// READ DATA FROM FIREBASE
// ==========================================

const usersRef = ref(database, "users");


onValue(usersRef, (snapshot) => {

    const data = snapshot.val();

    console.log("================================");
    console.log("DATA FROM FIREBASE");
    console.log("================================");

    console.log(data);

});