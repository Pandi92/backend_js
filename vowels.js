const text = "Meenaloshini"

const check = (data) => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const check of data.toLowerCase()) {
        if (vowels.includes(check)) {
            count += 1;
        }

    }
    return count;
}
console.log(check(text));