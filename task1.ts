var userInput = prompt("Please enter your input.");


const checkNumber = (input)=>{
    if(input % 500 === 0){
        console.log("yes");
    }else{
        console.log("no");
    }
}
console.log(checkNumber(userInput));