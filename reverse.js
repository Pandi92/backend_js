
// method 1
const name1 = (str) => {
    return str.split("").reverse().join('')
}
console.log(name1("hari"));

// method2

let play = "cricket";
play.split("");
for (let i = play.length - 1; i >= 0; i--) {
    console.log(play[i]);
}