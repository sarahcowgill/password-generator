function generatePassword() {
    //Collect the password settings from the user. Here asking for how many characters. 
    var number = prompt("How many characters would you like your password to contain?");
    if (number < 8) {
        alert("Needs to be 8 characters or higher.");
        return;
    }
    else if (number > 128) {
        alert("Needs to be less than 128 characters.");
        return;
    }
    //Giving the user the options to include different types of characters. 
    var special = confirm("Click Ok to include special characters.");

    var numeric = confirm("Click Ok to include numbers.");

    var lowercase = confirm("Click Ok to include lowercase letters.");

    var uppercase = confirm("Click Ok to include uppercase letters.");

   //Creating a variable for the console for debugging purposes. 
    var passwordSettings = {
        "number": number,
        "special": special,
        "numeric": numeric,
        "lowercase": lowercase,
        "uppercase": uppercase
    };
    console.log(passwordSettings);

    //Alerting the user they must choose at least one character class, if they don't select at least one character class. 
    if (!special && !numeric && !lowercase && !uppercase) {
        alert("Please select at least one password character class.");
        return;
    }

    //Listing all the possible characters that could be generated. 
    var passwordChars = "";
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
    //Declare a variable to hold the random password string,initially empty. 
    var aRandomPassword = "";

    var numPasswordChars = passwordChars.length;
    //Loop for the number of requested password characters, adding a randomly chosen character on each iteration. 
    for (i = 0; i < number; i++) {
        var randomPosition = Math.floor(Math.random() * numPasswordChars);
        var randomCharacter = passwordChars.charAt(randomPosition);
        aRandomPassword = aRandomPassword + randomCharacter;
    }

    //Display the generated password on the page. 
    document.getElementById("password").textContent = aRandomPassword;


}


