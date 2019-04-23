function operate(operator, num1, num2) {
    if (operator == "+") { return add(num1, num2) };
    if (operator == "-") { return subtract(num1, num2) };
    if (operator == "x") { return multiply(num1, num2) };
    if (operator == "/") { return divide(num1, num2) };
    if (operator == "exp") { return power(num1, num2) };
};

function add(num1, num2) {
    let add = Number(num1) + Number(num2);
    return add;
};

function subtract(num1, num2) {
    let subtract = Number(num1) - Number(num2);
    return subtract;
};

function multiply(num1, num2) {
    let multi = num1 * num2
    return multi
};

function add(num1, num2) {
    let add = Number(num1) + Number(num2);
    return add;
};

function divide(num1, num2) {
    let divide = Number(num1) / Number(num2);
    return divide;
};

function power(num1, num2) {
    return Math.pow(num1, num2);
};



function factorial(num1) {
    if (num1 == 0) {
        return 1
    } else {
        let i = num1;
        let array = [];
        while (i > 0) {
            array.push(i)
            i--;
        }
        function getMulti(total, num) {
            return total * num;
        };
        let sum = array.reduce(getMulti);
        return sum;
    };
};

let inputNum = 0, input =[], token=0, num1=0, num2=0, operation="";

function reset(){
  inputNum=0;  
  input=[];
  token=0;
  num1=0;
  num2=0;
  operation=''; 
  let display = document.querySelector('#display');
  display.innerHTML = "";
}

//Working with Numbers//
let btns = document.querySelectorAll('#num');
btns.forEach((btn=> {
    btn.addEventListener('click', (e) => {
        input.push(e.target.innerHTML);
        inputNum=Number(input.join(''));

        let display = document.querySelector('#display');
        display.innerHTML = "";
        display.innerHTML = inputNum;
        if (token===0){num1=inputNum;} else {num2=inputNum;};
        console.log(num1, num2)
        });
}));

//Working with Functions 
let ops = document.querySelectorAll('#op');
ops.forEach((op=> {
    op.addEventListener('click', (e) => {
        operator=e.target.innerHTML;
        token ++;
        input=[];

    });
}));

//Execute Functions 
let ex = document.querySelector('#equal');
    ex.addEventListener('click', () => {
        let display = document.querySelector('#display');
        display.innerHTML = "";
        display.innerHTML = operate(operator, num1, num2);
        num1=display.innerHTML;
    });

//Clear all
let clear = document.querySelector('#clear');
    clear.addEventListener('click', ()=> {
       reset();
    });



