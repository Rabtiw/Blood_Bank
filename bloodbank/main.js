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
  var latitude
  var longitude
  var UID
  //var messageRef = firebase.database().ref('messages');
document.getElementById("register_form").addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    //console.log(123)
    var name = getInputVal("name");
    console.log("name"+name);
    var sex = sandy.radio12.value
    console.log("name"+sex);
   var bloodtype = getInputVal("blood");
    console.log("name"+bloodtype);
    var password = getInputVal("pass");
    console.log("name"+password);
    var DOB = getInputVal("dob")
    console.log("name"+DOB);
    var mail = getInputVal("mail")
    console.log(mail)
    //show alert
    firebase.auth().createUserWithEmailAndPassword(mail, password).then(function(data){
        console.log(data.user.uid)
        saveMeassage(data.user.uid,name,sex,bloodtype,password,DOB,mail,latitude,longitude)
        //Here if you want you can sign in the user
      }).catch(function(error) {
          //Handle error
          alert(error)
      });
      
}

function getInputVal(id){
    return document.getElementById(id).value;

}

function saveMeassage(userID,name,sex,bloodtype,password,DOB,mail,latitude,longitude){
    console.log(userID)
    
    //var newMessageref = messageRef.push();
    firebase.database().ref('messages/'+ userID).set({
        name: name,
        sex: sex,
        bloodtype: bloodtype,
        password: password,
        DOB: DOB,
        mail: mail,
        latitude:latitude,
        longitude:longitude,
        
    })
    window.location.href = "home2.html";
}


var messageRef1 = firebase.database().ref('messages');
//var messageRef1 = firebase.database().ref(messages/asd/name');
var values 
messageRef1.on('value', gotdata, errdata);
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
    }
    document.getElementById('sinha').value += values
}
function errdata(data){
    console.log('Error');
    console.log(err);
}

  function yo(){
      alert("ohyea")
     
  }
 
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        window.alert("geo-location not supported by the browser")
    }
  } 
  
function showPosition(position) {
//x.innerHTML = "Latitude: " + position.coords.latitude + 
//        "<br>Longitude: " + position.coords.longitude;
    latitude = position.coords.latitude
    longitude = position.coords.longitude;

//        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyDBgOhJCS_cSjJHyuuz0adxnmekld_ESdo";

//        document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}
