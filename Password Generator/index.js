// Random Password Generator

const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");

submitButton.onclick = function(){
    userInput = document.getElementById("myInput").value;
    const password = generatePassword(userInput);
    result.innerHTML = password;
}

function generatePassword(length){
    const lowercaseChars = "abcdefghijkmnlopqrstuvwxyz";
    const uppercaseChars = "ACBDEFGHIJKMNLOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!£$%^&*()";

    let allowedChars = "";
    let password = "";

    allowedChars += lowercaseChars;
    allowedChars += uppercaseChars;
    allowedChars += numberChars;
    allowedChars += symbolChars;

    if(length <= 0){
        return `(Password must be at least 1 character)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    if(length <= 8){
        return `Your password is: ${password}<br>We Recommend a Password Length of more than 8`;
    }


    return `Your password is: ${password}`;
}

