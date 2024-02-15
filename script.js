let fibArray = [];
let userInput = 8;
let fibNumber1 = 0;
let fibNumber2 = 0;

function fibIterative() {
    let fibNumber1 = 0;
    let fibNumber2 = 0;
    for (let i = 0; i < userInput; i++) {
        const sum = fibNumber1 + fibNumber2;
        fibArray.push(sum);
        fibNumber1 = fibNumber2;
        fibNumber2 = sum;
        if (sum == 0) {
            fibNumber2 = 1;
        }
    }
    console.log(fibArray);
}


function fibRecursive() {

    if (userInput == 0) {
        return;
    }
    else {
        const sum = fibNumber1 + fibNumber2;
        fibArray.push(sum);
        fibNumber1 = fibNumber2;
        fibNumber2 = sum;
        userInput --
        if (sum == 0) {
            fibNumber2 = 1;
        }
        fibRecursive()
    }

}
fibRecursive()
console.log(fibArray);