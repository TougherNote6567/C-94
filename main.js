var firebaseConfig = {
    apiKey: "AIzaSyBc6MbkRXozITGGRGXCH8ywGp6WK2KujKU",
    authDomain: "practice-assignment-ff2ab.firebaseapp.com",
    databaseURL: "https://practice-assignment-ff2ab-default-rtdb.firebaseio.com",
    projectId: "practice-assignment-ff2ab",
    storageBucket: "practice-assignment-ff2ab.appspot.com",
    messagingSenderId: "869560105420",
    appId: "1:869560105420:web:8f354e4b301c82b2538569"
  };
  firebase.initializeApp(firebaseConfig);

  function ANGRY(){
      userName=document.getElementById("usermane").value;
      firebase.database().ref("/").child(userName).update({
purpose : "addVeryAngryUSERS"
      });
  }