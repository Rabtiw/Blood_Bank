var firebaseConfig = {
  apiKey: "AIzaSyCzg7Z8O3IWy1-fEiCrSNI-wFZMXbXRG-g",
  authDomain: "registerform-701f3.firebaseapp.com",
  databaseURL: "https://registerform-701f3.firebaseio.com",
  projectId: "registerform-701f3",
  storageBucket: "registerform-701f3.appspot.com",
  messagingSenderId: "101669468589",
  appId: "1:101669468589:web:ba343ccdb399cd08718924",
  measurementId: "G-7Z7Y1QSQ3V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

   

    

  } else {
    // No user is signed in.

    //window.location = "login.html"

  }
});

function login(){
  //var window.count = 0
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  console.log(userEmail)
  console.log(userPass)
  var flag = 0
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("hi")
    //window.count = 1
    window.alert("Error : " + errorMessage);
    flag = 1
    // ...
  });
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = 'home2.html'; //After successful login, user will be redirected to home.html
    }
  });
}

function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("Sign-out successful.")
    window.location.href = "home1.htm"
  }).catch(function(error) {
    // An error happened.
    console.log(error)
  });
}
