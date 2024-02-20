function addbtn() {

    var inputValue = document.getElementById("inputtodo").value;

        var li = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);

    
    var editSpan = document.createElement("Editspan");
    editSpan.textContent = "Edit";
    editSpan.classList.add("edit");
    editSpan.addEventListener("click", function() {
        editTask(this.parentElement);
    });
    li.appendChild(editSpan);

    var deleteSpan = document.createElement("Deletespan");
    deleteSpan.textContent ="Delete";
    deleteSpan.classList.add("delete");
    deleteSpan.addEventListener("click", function() {
        deleteTask(this.parentElement);
    });
    li.appendChild(deleteSpan);

    
    if (inputValue === '') {
        alert("Write something to do!");
    } else {
        document.getElementById("listtodo").appendChild(li);
    }

    document.getElementById("inputtodo").value = "";
}

function editTask(taskElement) {
    var confirmEdit = confirm("Are you sure you want to edit this task?");
    var newTask = prompt("Edit task:", taskElement.firstChild.textContent);
    if (newTask !== null && newTask !== '') {
        taskElement.firstChild.textContent = newTask;
    }
}

function deleteTask(taskElement) {
    var confirmDelete = confirm("Are you done with this task?");
    if (confirmDelete) {
        taskElement.remove();
    }
}

