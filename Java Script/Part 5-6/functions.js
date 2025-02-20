function hello() {
    console.log("hello");
}

hello();

// generating random numbers
function rollDice(start,end) {
    let diff = end-start;
    let random = Math.floor(Math.random() * diff) + start;
    return random;
}

let n = rollDice(1,10);
console.log(n);

// using functions 
function sum(a,b) {
    return a+b;
}

console.log(sum(sum(1,2),3));

function concatStrings(arr) {
    let str = "";
    for(let i=0; i<arr.length; i++){
        str += arr[i];
    }
    return str;
}

let arr = ["devansh","rai","krish","dhaked"];
console.log(concatStrings(arr));

// Scope of Variables
let greet = "hello";      //global scope

function changeGreet() {
    let greet = "namaste";  //function scope
    console.log(greet);

    function innerGreet() {   //lexical scope
        console.log(greet);
    }

    innerGreet();
}

console.log(greet);
changeGreet();

// Higher Order Functions
function multipleGreet(func, n) {      // function having another function as a parameter
    for(let i=0; i<n; i++){
        func();
    }
}

let gr = function() {
    console.log("hello");
}

multipleGreet(gr,3);


function oddOrEvenFactory(request) {    // function returning another function
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    }
    else {
        console.log("wrong request");
    }
}


// Methods
const calculator = {
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    }
}

const calc = {        // Methods(Shorthands)
    add(a,b) {
        return a+b;
    },
    sub(a,b) {
        return a-b;
    },
    mul(a,b) {
        return a*b;
    }
}







