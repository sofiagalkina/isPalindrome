const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');




const isEmpty = () => {
    const inputLength = userInput.value.length;
    if(inputLength >= 1){
       isPalindrome(userInput.value)
    } else {
        userInput.classList.add('palindrome-input-invalid');
        alert('Please input a value');
    }
}

const isPalindrome = (string) => {
    let reversed = '';
    const cleanString =  string.toLowerCase().replace(/[^a-z0-9]/g, "");


    for(let i = string.length - 1; i >= 0; i--){
        reversed += cleanString[i];
    }
    console.log(`reversed: ${reversed}`);
    console.log(`orig: ${cleanString}`);

    if(cleanString === reversed){
        result.innerText = `${string} is a palindrome!`
    } else {
        result.innerText = `${string} is not a palindrome`
    }
}

checkButton.addEventListener('click', isEmpty)
