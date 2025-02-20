const student = {
    name: "devansh",
    age: 19,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}

try {
    console.log(a);
} catch(err) {
    console.log("caught an error, a is not defined");
    console.log(err);
}

// Arrow functions
const sum = (a,b) => {
    console.log(a+b);
}

const hello = () => {       //way to write function without parameters
    console.log("hello");
}

const mul = (a,b) => (a*b);    //implicit return

// Set Timeout & Set Interval
console.log("Hi there!");

// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);

// let id = setInterval( () => {
//     console.log("Apna College");
// }, 2000);

// console.log(id);

// let id2 = setInterval( () => {
//     console.log("Hello World");
// }, 3000);

// console.log(id2);

// let id = setInterval( () => {
//     console.log("Hello World");
// }, 2000); 

// setTimeout ( () => {
//     clearInterval(id);
// }, 10000);

// this with Arrow Function
const Student = {
    name: "Devansh",
    marks: 95,
    prop: this,
    getName : function () {     //calling object's scope -> global scope
        console.log(this);
        return this.name;
    },
    
    getMarks : () => {      //parent's scope -> window
        console.log(this);
        return this.marks;
    },

    getInfo1 : function() {
        setTimeout( () => {
            console.log(this);    //student
        },2000);
    },
    
    getInfo1 : function() {
        setTimeout( function () {   //window
            console.log(this);
        },2000);
    },
}


//Notes:-
// 1). "This" keyword refers to an object that is executing the current piece of code.

// 2). Try and Catch: The try statement allows you to define a block of code to be tested for errors while it is being executed.
                    // The catch statement allows you to define a block of code to be executed, if an error occurs in the try block. 


let isEven = (arr) => {
    if(arr%2 == 0) {
        return 1;
    }
    else {
        return 0;
    }
}

let arr = 10;
console.log(isEven(arr));