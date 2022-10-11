// pallindrome number find
let number = prompt("enter a number");
let tempNum;
let rem;
let reversenumber = 0;
tempNum = number;
while (tempNum > 0) {
    rem = tempNum % 10;
    tempNum = tempNum - rem;
    tempNum = tempNum / 10;
    reversenumber = reversenumber * 10 + rem;
}
if (reversenumber == number) {
    console.log("it is palindrome");
}
else {
    console.log("it is not a palindrome");
}

//pallindrome string find
const string = prompt('Enter a string: ');
function checkPalindrome(string) {
    const length = string.length;
    for (let i = 0; i < length / 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return 'It is not  palindrome';
        }
    }
    return 'It is palindrome';
}
const Result = checkPalindrome(string);
console.log(Result);

// palindrome string find
function isPalindrome(string) {
    return string === string.split("").reverse().join("");
}
console.log(isPalindrome("civic"));
console.log(isPalindrome("welcome"));