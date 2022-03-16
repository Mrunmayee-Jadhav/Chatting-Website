var firebaseConfig = {
    apiKey: "AIzaSyDCieFcAb41b_a4Tcr7TQBcuobRIM3mqPE",
    authDomain: "kwitter-e11a1.firebaseapp.com",
    databaseURL: "https://kwitter-e11a1-default-rtdb.firebaseio.com",
    projectId: "kwitter-e11a1",
    storageBucket: "kwitter-e11a1.appspot.com",
    messagingSenderId: "133884491063",
    appId: "1:133884491063:web:083d623c80534e8ed4d6b2",
    measurementId: "G-2YX1RHR057"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
    localStorage.setItem("room_name", room_name);
    window.location= "chat.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name- " + Room_names);
    row= "<div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id);'>" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "chat.html";
}

function logout() { 
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name"); 
    window.location = "login.html"; }

