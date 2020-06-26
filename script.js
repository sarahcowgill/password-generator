function generatePassword() {var number = prompt ("How many characters would you like your password to contain?");
if (number < 8 ) {
    alert ("Needs to be 8 characters or higher.");
}
else if (number > 128 ) {
    alert ("Needs to be less than 128 characters.")
}
}
