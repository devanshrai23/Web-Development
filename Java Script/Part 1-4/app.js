// const favmovie = "dangal";
// let guess = prompt("guess my favourite movie");
// while((guess != favmovie) && (guess != "quit")){
//     guess = prompt("Wrong guess, please try again");
//     if(guess == "quit"){
//         console.log("ok, quitting");
//         break;
//     }
//     else if(guess == favmovie){
//         console.log("Congratulations, you guessed it");
//         break;
//     }  
// }

// let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
// for(let i=0;i<heroes.length;i++){
//     console.log(`List #${i+1}`);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }

// }

// for(list of heroes){
//     console.log(list);
//     for(fname of list){
//         console.log(fname);
//     }
// }

// let fruits = ["mango","apple","banana","pineapple","orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// let n = prompt("Enter a number : ");
// n = parseInt(n);                     // converts string to integer
// for(let i=n;i<=n*10;i+=n){
//     console.log(i);
// }

let arr = [1,2,3,4,5,6,78,889];
let max = arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);

