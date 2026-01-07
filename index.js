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
 var result = document.getElementById("result")
 function checkNumber() {
    var num = parseInt(document.getElementById("number-checker").value);
    var result = document.querySelector(".result");
    if (isNaN(num)) {
        result.innerText = "Please enter a valid number.";
        return;
    }
    if (num <= 1) {
        result.innerText = num + " is neither odd, even, nor prime.";
        return;
    }
    if (num % 2 === 0) {
        result.innerText = num + " is an even number.";
    } else {
        result.innerText = num + " is an odd number.";
    }
    // Check for prime
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        result.innerText += " It is also a prime number.";
    } else {

        result.innerText += " It is not a prime number.";
    }
    }