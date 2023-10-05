let username = document.querySelector('#username')
let password = document.querySelector('#password')
let singBtn = document.querySelector('#signIn')
let getuser = localStorage.getItem("username")
let getpass = localStorage.getItem("password")
console.log(getuser)
singBtn.addEventListener('click' ,login)
function login(e){
        e.preventDefault();
    if(username.value === ""||password.value === ""){
        alert("Please fill all the fields");
    }else{if(getuser && getuser.trim() === username.value.trim() && getpass && getpass === password.value)  {
       setTimeout(()=> {
        window.location="home.html"
       },1500)
    }else{
        alert ("Invalid user name or password, Please try again!")
    }
    }
    }
