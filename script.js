document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

let username=document.querySelector("input[type=text]").value;
let password=document.querySelector("input[type=password]").value;

if(username==="admin" && password==="1234"){
document.getElementById("message").style.color="green";
document.getElementById("message").textContent="Login Successful!";
}
else{
document.getElementById("message").textContent="Invalid username or password";
}

});
