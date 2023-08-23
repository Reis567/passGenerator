const passwordBox = document.getElementById('password');
const lenght = 14;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = ";!@#$%&*-(){}";

const allChars = upperCase + lowerCase + number + symbol

function createPassword(){
    let password = "";

    password+= upperCase[Math.floor(Math.random() * upperCase.length)];
    password+= lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password+= number[Math.floor(Math.random() * number.length)];
    password+= symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password+= allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}


function copyPass() {
    passwordBox.select();
    document.execCommand("copy");
    console.log('Copy');

    const copyMessage = document.getElementById("copyMessage");
    copyMessage.style.display = "block";

    // Esconder o aviso após 2 segundos (2000 ms)
    setTimeout(() => {
        copyMessage.style.display = "none";
    }, 1500);

    // Remova a seleção do campo de senha
    passwordBox.blur(); // Remove o foco do campo
}
