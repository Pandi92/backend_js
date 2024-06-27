let word = 'Malayalam';
// let split = word.split("");
// let reverseletter = split.reverse();
// // console.log(reverseWord);
// reverseWord=reverseletter.join("");
// console.log(reverseWord);
// if (word.toLowerCase() == reverseWord.toLowerCase()) {
//     console.log(`${word} is Palindrome`);
// } else {
//     console.log(`${word} is Not Palindrome`);
//  }

const Palindrome = (Palindrome) => {
    let check = Palindrome.split("").reverse().join("");
    if (check.toLowerCase() == Palindrome.toLowerCase()) {
        console.log("Palindrome");
    }else{
        console.log("Not Palindrome");
    }
}
Palindrome(word)
