//YOUR FIREBASE LINKS
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
  user_name=localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

  function send() {
        msg= document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }

  function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location= "login.html";
  }

  function back() {
      window.location= "group.html";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
