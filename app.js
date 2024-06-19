// console.log("Hiiiiiiii");

function calc() {
    // let num01 = new Number();
    // let num02 = Number();
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    let lblOutput = document.getElementById("output");
    
    //lblOutput.innerHTML= num01+num02;

    // console.log(typeof num1);
    // console.log(typeof num2);

    switch(op){
        case '+' : lblOutput.innerHTML = num1 + num2; break;
        case '-' : lblOutput.innerHTML = num1 - num2; break;
        case '/' : lblOutput.innerHTML = num1 / num2; break;
        case '*' : lblOutput.innerHTML = num1 * num2; break;
    }
}







   

    

