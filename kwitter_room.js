var firebaseConfig = {
      apiKey: "AIzaSyCK5MfwJABDDzgDBVn4CONe5AbklS-YwEs",
      authDomain: "c-93-e2d1f.firebaseapp.com",
      databaseURL: "https://c-93-e2d1f-default-rtdb.firebaseio.com",
      projectId: "c-93-e2d1f",
      storageBucket: "c-93-e2d1f.appspot.com",
      messagingSenderId: "912780064507",
      appId: "1:912780064507:web:1087e04c361157af1ba25e"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
