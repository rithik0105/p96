
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB3Czl-HC0lfOU-dOB0DNfWkchVGidNYrE",
    authDomain: "kwitter-4f5ce.firebaseapp.com",
    databaseURL: "https://kwitter-4f5ce-default-rtdb.firebaseio.com",
    projectId: "kwitter-4f5ce",
    storageBucket: "kwitter-4f5ce.appspot.com",
    messagingSenderId: "286508314224",
    appId: "1:286508314224:web:80a365f12e4c54da8a8eb5",
    measurementId: "G-7KDMGGK4WH"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addUser()
    {
        user_name=document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
        });
    }