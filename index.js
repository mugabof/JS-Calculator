const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){  //clearDisplay() is built-in function in JS

    display.value= "";
}

function calculate(input){
    try{
       display.value= eval(display.value)   ////eval() evaluate is built-in function in JS
    }
    catch(error)
    {
 display.value= "ERROR"
    }
}