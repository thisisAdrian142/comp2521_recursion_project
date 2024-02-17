function factorialize(num) {
    if(num<0){
        return -1;
    } else if(num==0) {
        return 1;
    } else {
        return(num*factorialize(num-1));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var line2 = prompt("Please type the number you would like to know its factorial in here: ");
    line2 = parseInt(line2);
    const outputArea = document.getElementById("factorial-result");
    
    outputArea.classList.remove("success-result", "error-result");

    if (!isNaN(line2)){
        const calculatedResult = factorialize(line2);
        outputArea.textContent = "The Javascript output result of this factorial is: " + calculatedResult;
        outputArea.classList.add("success-result");
    } else {
        outputArea.textContent = "Please enter a valid number.";
        outputArea.classList.add("error-result");
    }
})

let sun = document.getElementById('sun-lake');
let mountains = document.getElementById('mountains-lake');
let cloud = document.getElementById('cloud-lake');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    sun.style.top = value * 2.0 + 'px';
    mountains.style.top = value *2.4 + 'px';
    cloud.style.right = value *-2.5 + 'px';
})