// forEach Method : to access each element of an array/array of objects
let students = [ 
    {
        name: "devansh",
        marks: 95,
    },
    {
        name: "mayank",
        marks: 98,
    },
    {
        name: "krish",
        marks: 89,
    },
];

students.forEach ((el) => {
    console.log(el.marks);
});

// map Method
let num = [1,2,3,4];

let double = num.map((el) => {      //the returning values are stored in another array
    return el * 2;
});

let gpa = students.map((el) => {
    return (el.marks)/10;
});

// filter Method
let nums = [2,4,1,5,6,2,7,8,9];

let even = nums.filter((num) => {
    return num % 2 ==0;                   //even -> true, odd -> false : the elements for which the condition is true are stored in new array.
});

// every Method : returns true if every element of the array gives true for some function, else returnns false.
let arr = [10,20,3,40];
let ans = arr.every((el) => (el % 10 == 0));
console.log(ans);
// some Method : returns false if every element of the array gives false for some function, else returns true.

// reduce method : reduces the array to a single value
// syntax : arr.reduce( reducer function with 2 variables for (accumulator,element));

let numbers = [1,2,3,4,3];
let final = numbers.reduce((res, el) => {
    // console.log(res);
    return res + el;
});
console.log(final);

let max = numbers.reduce((ans,el) => {
    if(ans > el) {
        return ans;
    }
    else {
        return el;
    }
});

console.log(max);

//default Parameters : giving a default value to the arguments
function sum(a,b=3) {
    return a+b;
}

console.log(sum(2));

// spread Method : expands an iterable into multiple values
let a = [1,2,3,4,54,5,6,7,8,88,6,43,2,2];
console.log(Math.min(...a));

a.push(-23);
console.log(Math.min(...a));

let newStr = [..."Devansh Rai"];   //breaks this string into character array

// let o = [1,3,5,7,9];
// let e = [2,4,6,8,10];

// let total = [...o, ...e];

const data = {         // spread with Object literals
    email: "devansh23@gmail.com",
    password: "abcd",
}

const dataCopy = {...data, id: 123};

let ar = [1,2,3,4,5];
let obj1 = {...ar};        //spreading array using object literals(by default the index of the array becomes key for the values of array)

// rest Method : taking multiple inputs and returning a single value
function sum(...args) {
    return args.reduce((sum,el) => sum + el);
}


// Destructuring : storing values of array into multiple variables
let names = ["tony","bruce","steve","peter"];
let [winner,runnerup,...others] = names;

console.log(winner,runnerup,others);      // tony bruce -> accessing the starting elements

const Stu = {      
    name: "devansh",
    age: "19",
    username: "devansh@123",
    password: "abscd",
    city: "delhi",
};

let {username, password: pass, city = "mumbai"} = Stu;         //destructuring an object literal
