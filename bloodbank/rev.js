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
  var messageRef = firebase.database().ref('messages');

  messageRef.on('value',gotdata,errdata)
  function gotdata(data){
    var profile = data.val();
    var keys = Object.keys(profile)
    console.log(keys);
    
    for(var i = 0;i<keys.length;i++){
        var k = keys[i];
        var name = profile[k].name;
        var sex = profile[k].sex;
        //console.log(name,sex)
        values = name+" "+sex
        document.getElementById('ayush').value += values
    }
    
}
function errdata(data){
    console.log('Error');
    console.log(err);
}
  function yo(){
      alert("iamworking!!")
  }