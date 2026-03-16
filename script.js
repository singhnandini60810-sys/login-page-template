document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let username = document.querySelector("input[type=text]").value;
let password = document.querySelector("input[type=password]").value;
let message = document.getElementById("message");

if(username === "admin" && password === "1234"){
message.style.color="lightgreen";
message.textContent="Login Successful!";
}
else{
message.style.color="red";
message.textContent="Invalid Login Details";
}

});
