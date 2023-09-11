// ! Exercise 1
// We can access outerVar
// We can access innterVar

// ! Exercise 2
function mainFunction(paramOut) {
    innerFunction();
    function innerFunction(paramIn){};
    console.log(mainFunction);
    console.log(innerFunction);
}

mainFunction();

// ! Exercise 3
function outExThree(a){
    function inExThree(x){       
        return x;
    };
    return inExThree;
};

outExThree(5);
let outerAns = outExThree(5);
console.log(outerAns(6));



// ! Exercise 4
let globalVar = "global"
console.log(globalVar)

function modGlobal(mod1){
    let globalVar = mod1;
    console.log(globalVar);
}

modGlobal('modified');

function localVar(){
    let local = 2;
    // let local = 2;  
    // * cannot redefine two local variables of the same name. Throws an error.
    console.log(local);
}

// ! Exercise 5

function functionFactory(param) {
    // Return a function that makes use of 'param'
    return function innerFunction(paramIn){
        console.log(param);
        console.log(paramIn);
    }
}
// Create an instance of the inner function by invoking functionFactory with a parameter
const ex5 = functionFactory('I am out');
ex5('I am in');

// ! Exercise 6
function hoistingTest(){
    // try printing a variable here
    console.log(hoisted)
    // Declare the variable after console.log
    var hoisted = "By my own petard, no less!"
    // * ReferenceError: can't access lexical declaration 'hoisted' before initialization
    // * JS cannot hoist a const or let variable inside a local scope, a var variable returns "undefined"
}

hoistingTest();

// ! Exercise 7
function setupCounter(num) {
    // Define a count variable here
    let count = num
    return function() {
        // Increment and print the count
        const incr = ++count;
        console.log(incr);
    }
}

// Create a counter instance and invoke it to test
const counter = setupCounter(0);
counter(); 
counter();
counter();

// ! Exercise 8
// TODO: learn how to make a counter function then redo this. It should increment every time the function is called.

console.log('Exercise 8')
const ifElse = exe8(0)
ifElse()

function exe8 (num){
    let counter = num
    return function (){
        const incr = ++counter
        if (incr >= 4) {
            console.log('Too high for me');
        }else {
            console.log(incr);
        }
    }
}
ifElse()
ifElse()
ifElse()
ifElse()
ifElse()
//  Even though it is in a local scope the outer function retains the changes made to the parameter.
// ! Exercise 9
// modify global variable
let global = 'Earth'
console.log(global)

function changeGlobal(planet){
    global = planet;
}

changeGlobal('Terra');
console.log(global);
// * Works as expected

// Modify local variable

function starFactory(star){
    let sol = star
    console.log(sol)
    return function(sun){
        sol = sun;
        console.log(sol);
    }
}

const setStar = starFactory('Helios');
setStar('Sol');


// * Both changes are returned 

