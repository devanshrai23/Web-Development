let todo = [];

let req = prompt("Please enter your choice : ");

while(true) {
    if(req == "quit") {
        console.log("Quitting App....");
        break;
    }

    else if(req == "list") {
        console.log("--------------------");
        if(todo.length == 0){
            console.log("Your todo list is empty!")
        }
        for(let i=0;i<todo.length;i++){
            console.log(i+1,todo[i]);
        }
        console.log("--------------------");
    }

    else if(req == "add"){
        let task = prompt("Please enter the task you want to add : ");
        todo.push(task);
        console.log("Task added!");
    }

    else if(req == "delete"){
        let idx = prompt("Please enter task number you want to delete : ");
        todo.splice(idx-1,1);
        console.log("Task deleted!") 
    }

    else {
        console.log("Error! Wrong request..");
    }

    req = prompt("Please enter your choice : ");
}