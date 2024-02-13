function factorialize(num) {
    if(num<0){
        return -1;
    } else if(num==0) {
        return 1;
    } else {
        return(num*factorialize(num-1));
    }
}


var line2 = prompt("Please type the number you would like to know its factorial in here: ");    
const outputArea = document.getElementById("factorial-result");
const calculatedResult = factorialize(line2);
outputArea.textContent = "The output result of this factorial is: " + calculatedResult;

