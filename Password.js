function password(length, uppercase, lowercase, numbers, symbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialSymbols = "@#$%&^()!?";
    let allowedChars = "";
    let generatedPassword = "";

    if (lowercase) {
        allowedChars += lowercaseChars;
    }
    if (uppercase) {
        allowedChars += uppercaseChars;
    }
    if (numbers) {
        allowedChars += numberChars;
    }
    if (symbols) {
        allowedChars += specialSymbols;
    }

    if (length <= 0) {
        console.log("Password length must be greater than 0");
        return "";
    }
    if (allowedChars.length === 0) {
        console.log("At least one set of characters is mandatory");
        return "";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomIndex];
    }

    return generatedPassword;
}


document.getElementById('generate').addEventListener('click', () => {
    const length = 12;
    const uppercase = true;
    const lowercase = true;
    const numbers = true;
    const symbols = true;
    const strongPassword = password(length, uppercase, lowercase, numbers, symbols);
    document.getElementById('pass').textContent = strongPassword;
});
