const student = {
    name: "Devansh",
    age: 19,
    marks: 95.8,
    city: "Allahabad"
};

const car = {
    name: "Ferrari",
    model: 3490,
    colors: ["red","black","blue"]
};

const post = {
    username: "@devanshrai_23",
    content: "Hii, I am learning Javascript",
    likes: "100+",
    reposts: "5+",
    tags: ["apnacollege","delta"]
};

// Object of Objects:-
// const classInfo = {
//     devansh: {
//         grade: "A",
//         city: "Sagar"
//     },
//     mayank: {
//         grade: "O",
//         city: "Jamnagar"
//     },
//     krish: {
//         grade: "A",
//         city: "Bharatpur"
//     }
// }


// Array of Objects:-
const classInfo = [
    {
        name: "Devansh",
        grade: "A",
        city: "Sagar"
    },
    {
        name: "Mayank",
        grade: "O",
        city: "Jamnagar"
    },
    {
        name: "Krish",
        grade: "A",
        city: "Bharatpur"
    }
];

// Generating Random integers:-
let num = Math.random() * 10;       // no of integers in the range
num = Math.floor(num) + 91;         // min value of range
console.log(num);




