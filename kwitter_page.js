//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("username");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });
            document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
            name=message_data['name'];
            message=message_data['message'];
            like=message_data['like'];
            name_with_tag="<h4>"+name+"<img src='tick.png'class='user_tick'></h4>";
            message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
            like_button="<button class='btn btn-success 'id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
            span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
            row=name_with_tag+message_with_tag+like_button+span_tag;
            document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function update_like(message_id){
      button_id=message_id;
      like=document.getElementById(button_id).value;
      updated_likes=Number(like)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}