 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDJJx_yZrAdhvfrLFDOsmtYlNhS9Yq4VDI",
   authDomain: "digital-kimera.firebaseapp.com",
   projectId: "digital-kimera",
   storageBucket: "digital-kimera.appspot.com",
   messagingSenderId: "668409861369",
   appId: "1:668409861369:web:c84df3b5ec4bf398c6fe28",
   measurementId: "G-99JVKQRL1F"
 };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);