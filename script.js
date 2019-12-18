let pwd = "";
let finalPassword ="";


function generatePassword() {
    let pwd = "";
    let resultEL = document.getElementById('result');
    let lengthEL = document.getElementById('length');
    let length = +lengthEL.value;
    // console.log(length);
    // console.log(lower);
    // console.log(upper);
    // console.log(number);
    // console.log(symbol);
    if (length < 8 || length >128) {
        alert("Please using 8 - 128 characters password");  
        return false; 
    }

    let lower = confirm("Including lowercases characters?");
    let upper = confirm("Including uppercases characters?");
    let number = confirm("Including Numbers?");
    let symbol = confirm("Including Symbols?");

    for (let i = 0; i < length; i++) {

        if (lower === true) {
            pwd += getLower();
        }

        if (lower === false) {
            pwd += "";
        }

        if (upper === true) {
            pwd += getUpper();
        }

        if (upper === false) {
            pwd += "";
        }

        if (symbol === true) {
            pwd += getSymbol();
        }

        if (symbol === false) {
            pwd += "";
        }

        if (number === true) {
            pwd += getNumber();
        }

        if (number === false) {
            pwd += "";
        }

        resultEL.innerText = pwd.substr(0,length);
        finalPassword = pwd.substr(0,length);
    }

    // console.log(resultEL);
    // console.log(pwd);
    // console.log(finalPassword);

    if (resultEL.innerText === "") {
        alert("Please ensure that at least one character type is selected.")
        resultEL.innerText = "You don't want a password. ";
    }

    return finalPassword;
}



function getLower() {
    let rand = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(rand);
}

function getUpper() {
    let rand = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(rand);
}

function getNumber() {
    let rand = Math.floor(Math.random() * 10) + 48;
    return String.fromCharCode(rand);
}

function getSymbol() {
    let symbolArr = "~!@#$%^&*()";
    return symbolArr[Math.floor(Math.random() * symbolArr.length)];
}


function textToClipboard (finalPasswordwd) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = finalPassword;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    // console.log(finalPassword);
}