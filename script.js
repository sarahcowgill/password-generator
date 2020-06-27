function generatePassword() {
    var number = prompt("How many characters would you like your password to contain?");
    if (number < 8) {
        alert("Needs to be 8 characters or higher.");
    }
    else if (number > 128) {
        alert("Needs to be less than 128 characters.");
    }
    var special = confirm("Click Ok to include special characters.");

    var numeric = confirm("Click Ok to include numbers.")

    var lowercase = confirm("Click Ok to include lowercase letters.")

    var uppercase = confirm("Click Ok to include uppercase letters.")
}


