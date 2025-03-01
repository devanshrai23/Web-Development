// let imgObj = document.getElementsByClassName("oldImg");

// console.dir(document.querySelector("p"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//     links[i].style.color = "green";
// }

// for(link of links){
//     link.style.color = "red";    //inline style
// }
let para = document.createElement("p");
para.innerText = "Hey I'm red!";
para.style.color = "red";
let body = document.querySelector("body");
body.append(para);


let h3 = document.createElement("h3");
h3.innerText = "Hey I'm blue h3!";
h3.style.color = "blue";
body.prepend(h3);


let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.innerText = "I'm in a div";
p.innerText = "ME TOO!";

div.classList.add("style");
div.appendChild(h1);
div.appendChild(p);
body.append(div);

let input = document.createElement("input");
input.setAttribute("placeholder","Enter a name");
body.append(input);

let btn = document.createElement("button");
btn.innerText = "click me!";
body.append(btn);
btn.setAttribute("id","btn");

let b = document.querySelector("#btn");
b.classList.add("change");

let heading = document.createElement("h1");
heading.innerText = "DOM Practice";
heading.classList.add("heading");
body.prepend(heading);

let p1 = document.createElement("p");
p1.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p1);