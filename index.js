// Counter
var count = document.getElementById('value');
function CountAction(action) {
    if (action === "increment") {
        count.innerText++
    } else if (action === "decrement") {
        count.innerText--
    } else if (action === "reset") {
        count.innerText = 0;
    }
}
// Passwird icon Eye
function showPassword() {
    var passwordInput = document.getElementById('password-input-field');
    passwordInput.style.width="300px"
    passwordInput.style.height="40px"
    passwordInput.style.fontSize="18px"
    passwordInput.style.padding="5px 10px"
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        
    } else {
        passwordInput.type = "password";
    }
    }
 //   Odd even or prime checker
 var num = document.getElementById("number").value
 var result = document.getElementById