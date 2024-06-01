var userInput = prompt("Please enter your input:");
var checkNumber = function (userInput) {
    if (userInput % 500 === 0) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
};
console.log(checkNumber(userInput));
