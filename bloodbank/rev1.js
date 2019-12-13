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
  var kry
  function rtrv(){
    firebase.database().ref('messages').once('value',gotdata)
    
  }
  var z = 0
  function gotdata(data){
    var user = firebase.auth().currentUser.uid; 
    var profile = data.val();

    var keys = Object.keys(profile)
    //console.log(profile);
    
    blood = document.getElementById('blood').value
    //console.log(user)
    var myTable="<table border='1'>"
    myTable += "<tr><td>Name</td><td>DOB</td><td>Email</td><td>Mail?</td>"
    
    for(var i = 0;i<keys.length;i++){
        var k = keys[i];
        //console.log(k)
        //str += profile[k]+"\n"

        if(user != k){
            console.log(user,k)
        
        if(blood == profile[k].bloodtype){
            
            console.log(profile[k].bloodtype)
            myTable +="<tr><td>"  
            myTable +=profile[k].name
            myTable +="</td><td>"
            myTable +=profile[k].DOB
            myTable +="</td><td>"
            myTable +=profile[k].mail
            myTable +="</td><td>"
            myTable +="<input type='checkbox' id='"+z+"ayz'/>"
            myTable +="</td></tr>"
            z++
    }
    }
    else{
        kry = profile[k].mail
    }
    
    
    }
    document.getElementById("hola").innerHTML = myTable
  }
function mail(){
    firebase.database().ref('messages').once('value',mail1)
}
function mail1(data){
    
    var profile = data.val();
    
    var keys = Object.keys(profile)
    console.log(profile);
    var maillist=[]
    for(var i = 0;i<z-1;i++){
        var checkbox = document.getElementById(i+"ayz")
        var k = keys[i];
        console.log(checkbox)
        if(checkbox.checked==true){
        maillist.push(profile[k].mail)
        console.log(profile[k].mail)
    
    
    }
}
console.log(kry)

    Email.send({
        Host : "smtp25.elasticemail.com",
        Username : "sirivella.ramu26@gmail.com",
        Password : "de65e337-9338-41aa-86a6-6abcf988749c",
        To : maillist,
        From : "sirivella.ramu26@gmail.com",
        Subject : "In Need Of Blood",
        Body : "Kind person, please donate blood if willing contact me through mail:"+kry+""
    }).then(
      message => alert(message)
    );
    
}
