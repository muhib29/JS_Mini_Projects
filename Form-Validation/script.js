var nameError = document.getElementById("name-error");
var numberError = document.getElementById("number-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var fullName = document.getElementById("fullName").value;
    if(fullName.length == 0 ){
        nameError.innerHTML = "Name is required";
        return false
    }
    // add if statment for full name 
    if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false
    }
    nameError.innerHTML = `Valid <i class="fa-solid fa-circle-check"></i> `
    nameError.classList.add("valid")
    return true
}
function validatePhone() {
    var number = document.getElementById('number').value;
    if (number.length === 0) {
        numberError.innerHTML = "Phone number is required";
        return false;
    }

    if (number.length !== 10) {
        numberError.innerHTML = "Phone number should be exactly 10 digits";
        return false;
    }

    if (!number.match(/^[0-9]{10}$/)) {
        numberError.innerHTML = "Only digits are allowed";
        return false;    
    }
    numberError.innerHTML = `Valid <i class="fa-solid fa-circle-check"></i>`;
    numberError.classList.add("valid");
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;
    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Invalid email";
        return false;
    }
    emailError.innerHTML = `Valid <i class="fa-solid fa-circle-check"></i>`;
    emailError.classList.add("valid");
    return true;
}
function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;
    if (message.length === 0) {
        messageError.innerHTML = "Message is required";
        return false;
    }
    if (left > 0) {
        messageError.innerHTML = left + " more characters required";
        return false;
    }
    messageError.innerHTML = `Valid <i class="fa-solid fa-circle-check"></i>`;
    messageError.classList.add("valid");
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() ||  !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Fix errors to submit";
        setTimeout(() => {
            submitError.style.display = 'none'
        }, 3000);
        return false;
    }
}