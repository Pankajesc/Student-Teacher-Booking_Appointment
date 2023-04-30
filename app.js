const firebaseConfig = {
    apiKey: "AIzaSyDPhb7Hp8ESAI_k1HkNGlhmNKx0bAbqC9Q",
    authDomain: "student-teacher-appointm-fa3b3.firebaseapp.com",
    databaseURL: "https://student-teacher-appointm-fa3b3-default-rtdb.firebaseio.com",
    projectId: "student-teacher-appointm-fa3b3",
    storageBucket: "student-teacher-appointm-fa3b3.appspot.com",
    messagingSenderId: "1053624608958",
    appId: "1:1053624608958:web:9dd72750851143b25a16ef"
  };
  
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Get form element


function form_create(user){
  console.log(user)
  if(document.querySelector('form')!=null){
    var form = document.querySelector('form');
  form.remove()}
    const frm=document.createElement('form')
    frm.className ='input-group'    
    frm.action=`./${user}/${user}.html`
    var btn=document.createElement('button');
    btn.className ='submit-btn'
    btn.innerText="Log IN"
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.className ='input-field'
    x.placeholder=`${user} ID`
    x.required = true;
    var y = document.createElement("INPUT");
    y.setAttribute("type", "password");
    y.className="input-field"
    y.placeholder='Password'
    y.required = true;
    var z = document.createElement("INPUT");
    z.setAttribute("type", "checkbox");
    z.className='check-box'
    var spn = document.createElement("span");
    spn.innerText="Remember Passsword"
    var btn_box=document.querySelector('.button-box');
    frm.append(x)
    frm.append(y)
    frm.append(z)
    frm.append(spn)
    frm.append(btn)
    
    btn_box.parentNode.insertBefore(frm,btn_box.nextSibling);
  
  

 
}
function adminlogin(){
  var user='admin'
  var x=document.getElementById("adminlogin_btn");
  var y=document.getElementById("teacherlogin_btn");
  var z=document.getElementById("studentlogin_btn");
  x.style.background="linear-gradient(to right,#ff105f,#ffad06)"
  y.style.background="white"
  z.style.background="white"
  form_create(user)
  
}

function teacherlogin(){
  var user='teacher'
  var x=document.getElementById("adminlogin_btn");
  var y=document.getElementById("teacherlogin_btn");
  var z=document.getElementById("studentlogin_btn");
  x.style.background="white"
  z.style.background="white"
  y.style.background="linear-gradient(to right,#ff105f,#ffad06)"
  form_create(user)
}

function studentlogin(){
  var user='student'
  var x=document.getElementById("adminlogin_btn");
  var y=document.getElementById("teacherlogin_btn");
  var z=document.getElementById("studentlogin_btn");
  x.style.background="white"
  y.style.background="white"
  z.style.background="linear-gradient(to right,#ff105f,#ffad06)"
  form_create(user)
}