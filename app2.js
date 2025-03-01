// let btns = document.querySelectorAll("button");

// // btn.onclick = function() {
// //     alert("Button was clicked");
// // };

// function sayHello() {
//     alert("Hello!");
// }

// function sayName() {
//     alert("Devansh Rai");
// }

// for(btn of btns) {
//     // btn.onmouseenter = function() {
//     //     console.log("you entered a button");
//     // };
//     // btn.onclick = sayHello;       //don't execute the function here only by adding parenthesis
//     // btn.onclick = sayName; 
    
//     btn.addEventListener("dblclick",sayName);
//     // btn.addEventListener("click",sayHello);
// }

//Activity 
// let btn = document.querySelector("button");

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// function getColor() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     h3.style.color = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// }

// btn.addEventListener("click",getColor);

//Use of this in Event Listeners
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeOnClick() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeOnClick);
// p.addEventListener("click", changeOnClick);
// h1.addEventListener("click", changeOnClick);
// h3.addEventListener("click", changeOnClick);

//Keyboard Events
// let input = document.querySelector("input");

// input.addEventListener("keydown", function(event) {
//     console.log("code = ",event.code);
//     if(event.code == "ArrowUp"){
//         console.log("Character Moves Upward");
//     }
//     if(event.code == "ArrowDown"){
//         console.log("Character Moves Down");
//     }  
//     if(event.code == "ArrowRight"){
//         console.log("Character Moves Right");
//     }  
//     if(event.code == "ArrowLeft"){
//         console.log("Character Moves Left");
//     }                               
// });

// input.addEventListener("keyup", function() {
//     console.log("Key was released");
// });

//Form Events
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");

//     let user = this.elements[0];           //accessing elements of a form using property of form 
//     let pass = this.elements[1];

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

//change and input event
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("change event");
//     console.log("final value = ",this.value);
// });

// user.addEventListener("input", function() {
//     console.log("input event");
//     console.log("final value = ",this.value);
// });

//Activity : Text Editor
// let input = document.querySelector("#text");
// let p = document.querySelector("p");

// input.addEventListener("input", function(){
//     console.log(input.value);
//     p.innerText = input.value;
// });

//Event bubbling
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div was clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}