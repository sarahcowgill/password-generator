function generatePassword() {
    var number = prompt("How many characters would you like your password to contain?");
    if (number < 8) {
        alert("Needs to be 8 characters or higher.");
        return;
    }
    else if (number > 128) {
        alert("Needs to be less than 128 characters.");
        return;
    }
    var special = confirm("Click Ok to include special characters.");

    var numeric = confirm("Click Ok to include numbers.");

    var lowercase = confirm("Click Ok to include lowercase letters.");

    var uppercase = confirm("Click Ok to include uppercase letters.");

    if (!special && !numeric && !lowercase && !uppercase) {
        alert("Please select at least one password character class.");
        return;
    }
    var passwordChars = ""
    var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    if (special) {
        passwordChars = passwordChars + specialChars;
    }
    var numericChars = "0123456789";
    if (numeric) {
        passwordChars = passwordChars + numericChars; 
    }
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    if (lowercase) {
        passwordChars = passwordChars + lowerCaseChars; 
    }
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (uppercase) {
        passwordChars = passwordChars + upperCaseChars; 
    }

    var aRandomPassword = ""

    var numPasswordChars = "passwordChars.length"
    

    var passwordSettings = {
        "number": number,
        "special": special,
        "numeric": numeric,
        "lowercase": lowercase,
        "uppercase": uppercase
    };
    console.log(passwordSettings);

    document.getElementById("password").textContent = "aRandomPassword";


}


