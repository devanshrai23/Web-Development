let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// Function to add a new list item with a delete button
btn.addEventListener("click", function() {
    // Displaying an alert if input is empty
    if (input.value.trim() === "") {
        alert("Please enter a task before adding!");
        return;
    }

    let item = document.createElement("li");
    item.innerText = input.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
});

// Using event delegation to remove a list item when its delete button is clicked
ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted item:", listItem);
    }
});
