
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
    

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name +"!";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          
          firebase.database().ref("/").child (room_name).update({
          purpose:  "adding room name"
          
     });
     localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name- " + Room_names);
      row="<div class ='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
 function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}