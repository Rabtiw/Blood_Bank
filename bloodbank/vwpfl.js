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
  function rtrv(){
    var user = firebase.auth().currentUser.uid;
    console.log(user)
    firebase.database().ref('messages/'+user).once('value',gotdata)
    
  }
    function gotdata(data){
        var profile = data.val();

        var keys = Object.keys(profile)
        console.log(profile.DOB);
        var str =''
        str+="name:"+profile.name+"\n"
        str+="DOB:"+profile.DOB+"\n"
        str+="Gender:"+profile.sex+"\n"
        str+="Bloodtype:"+profile.bloodtype+"\n"

        document.getElementById('why').value=str
    }
function up(){
    var user = firebase.auth().currentUser.uid;
    console.log(user)
    firebase.database().ref('messages/'+user).once('value',updata)
}
function updata(data){
    console.log(data.val().name)
    var userID = firebase.auth().currentUser.uid;
    var name = getInputVal("name");
    console.log("name"+name);
    var sex = sandy.radio12.value
    console.log("name"+sex);
   var bloodtype = getInputVal("blood");
    console.log("name"+bloodtype);
    //var password = getInputVal("pass");
    //console.log("name"+password);
    var DOB = getInputVal("dob")
    console.log("name"+DOB);
    //var mail = getInputVal("mail")
    var x = data.val().latitude
    var z = data.val().longitude
    var y = data.val().mail
    var p = data.val().password
    firebase.database().ref('messages/'+ userID).set({
        name: name,
        sex: sex,
        bloodtype: bloodtype,
        password: p,
        DOB: DOB,
        mail: y,
        latitude:x,
        longitude:z,
    })
alert("update successful!!")
}
function getInputVal(id){
    return document.getElementById(id).value;

}