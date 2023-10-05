let username = document.querySelector("#username")
let Email = document.querySelector("#e-mail")
let password = document.querySelector("#password")
let singBtn = document.querySelector("#signUp")

singBtn.addEventListener('click' , register) 
function register(e){
    e.preventDefault();
if(username.value === ""||Email.value === ""||password.value === ""){
    alert("Please fill all the fields");
}else{
    localStorage.setItem(`username`, username.value)
    localStorage.setItem(`password`, password.value)
    localStorage.setItem(`email`,Email.value)

    setTimeout(
        () => {
            window.location="login.html"
        }
   ,1500 )    
}
}