// import {tasks } from "./data.js";



/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
let toDoTasks = document.getElementById("to-do-tasks");
let toDoCounter = document.getElementById("to-do-tasks-count");
let inProgressTasks = document.getElementById("in-progress-tasks");
let inProgressCounter = document.getElementById("in-progress-tasks-count");
let doneTasks = document.getElementById("done-tasks");
let doneTasksCounter = document.getElementById("done-tasks-count");
function afficher() {
    // initialiser task form
    let count1 = 0, count2 = 0, count3 = 0;

    reloadTasks();

    var c;


    ;
    for (let i = 0; i < tasks.length; i++) {
        c = i + 1;
        if (tasks[i].status === "To Do") {

            toDoTasks.innerHTML += `
    <button id='${c - 1}' class="container-fluid d-flex my-1 border-0 rounded p-2" draggable="true" ondrag="drag(event)"> 
        <div class="col-1">
            <i class="image "><img src="https://img.icons8.com/sf-regular/48/F28F8F/help.png" /></i>
        </div>
        <div class="col-11">
            <div class="">${tasks[i].title}</div>
            <div class="">
                <div class="text-muted"># ${c} Created in :${tasks[i].date}</div>
                <div class=""
                    title="${tasks[i].description}">${tasks[i].description.substring(0, 70)} </div>
                   
            </div>
            </br>
            <div class="">
                <span class="bg-red-200 text-black px-4 p-1 rounded">${tasks[i].priority}</span>
                <span class="bg-light text-black px-3 p-1 rounded">${tasks[i].type}</span>
                <i class="bi bi-trash text-danger me-1" onclick="deleteTask(${i})"></i>
                <i class="bi bi-pencil" " id="${i}" onclick="editTask(this.id)"></i>
            </div>
        </div>
        </button>`;
            count1++;

        }
        else if (tasks[i].status === "In Progress") {
            inProgressTasks.innerHTML += `
       
    <button id='${c - 1}'  class="container-fluid d-flex justify-content-space-around my-1 border-0 rounded p-2" draggable="true" ondrag="drag(event)">
        <div class="col-1">
            <i class="spinner-border spinner-border-md text-red-200 "></i>
        </div>
        <div class=" col-11 ">
            <div class="">${tasks[i].title}</div>
            <div class="">
                <div class="text-muted""># ${c} created in${tasks[i].date}</div>
                <div class=""
                    title="${tasks[i].description}">${tasks[i].description.substring(0, 70)} </div>
            </div>
            </br>
            <div class="">
                <span class="bg-red-200 text-black px-4 p-1 rounded">${tasks[i].priority}</span>
                <span class="bg-light text-black px-3 p-1 rounded">${tasks[i].type}</span>
                <i class="bi bi-trash text-danger me-1" onclick="deleteTask(${i})"></i>
                <i class="bi bi-pencil" " id="${i}" onclick="editTask(this.id)"></i>
            </div>
        </div>
        </button>`
            count2++;

        }
        else if (tasks[i].status === "Done") {
            doneTasks.innerHTML += `
       
    <button id='${c - 1}'  class="container-fluid d-flex my-1 border-0 rounded p-2" draggable="true" ondrag="drag(event)">
        <div class="col-1">
            <i class="image "><img src="./assets/img/check-mark.png" /></i>
        </div>
        <div class="col-11">
            <div class="">${tasks[i].title}</div>
            <div class="">
                <div class="text-muted"">#${c} created in${tasks[i].date}</div>
                <div class=""
                    title="${tasks[i].description}">${tasks[i].description.substring(0, 70)} </div>
            </div>
            </br>
            <div class="divPar">
               <span class="bg-red-200 text-black px-2 p-1 rounded">${tasks[i].priority}</span>
               <span class="bg-light text-black px-2 p-1 rounded">${tasks[i].type}</span>
               <i class="bi bi-trash text-danger me-1" onclick="deleteTask(${i})"></i>
               <i class="bi bi-pencil" " id="${i}" onclick="editTask(this.id)"></i>
             
            </div>
        </div>
        </button>`
            count3++;


        }

    }
    toDoCounter.innerHTML = `${count1}`;
    inProgressCounter.innerHTML = `${count2}`;
    doneTasksCounter.innerHTML = `${count3}`;
}
afficher();

let form = document.getElementById("formTask");
function saveTask() {
    let type = undefined;
    if (idBug.selected) {
        type = idBug.value;
    } else {
        type = idFeature.value;
    }
    let status = undefined;
    if (toDo.selected) {
        status = toDo.value;
    } else if (inProgress.selected) {
        status = inProgress.value;
    } else if (done.selected) {
        status = done.value;
    }
    let propriete = undefined;
    if (high.selected) {
        propriete = high.value;
    } else if (medium.selected) {
        propriete = medium.value;
    } else if (low.propriete) {
        propriete = low.value;
    }
    let task = {
        id: tasks.length + 1,
        title: titre.value,
        type: type,
        status: status,
        priority: propriete,
        date: date.value,
        description: description.value

    };
    tasks.push(task);
    initTaskForm();
    afficher();
}
let indexToEdit;
function editTask(index) {
    $(document).ready(function () {
        $("#editModal").modal("show");
    });
    indexToEdit = index;
    edittitre.value = tasks[indexToEdit].title;
    document.getElementById("edit" + tasks[indexToEdit].type).checked = true;
    editpropriete.value = tasks[indexToEdit].priority;
    editstatus.value = tasks[indexToEdit].status;
    editdate.value = tasks[indexToEdit].date;
    editdescription.value = tasks[indexToEdit].description;

}
function updateTask() {
    let type = undefined;
    if (editBug.selected) {
        type = idBug.value;
    } else {
        type = editBug.value;
    }
    let status;
    status = editstatus.value;

    let propriete;
    propriete = editpropriete.value;

    let task = {
        id: indexToEdit,
        title: edittitre.value,
        type: type,
        status: status,
        priority: propriete,
        date: editdate.value,
        description: editdescription.value

    };
    tasks[indexToEdit] = task;
    $('#editModal').modal('hide')

    afficher();

}

function deleteTask(index) {
    tasks.splice(index, 1),
        Swal.fire('Good!', 'Delete successfully!', 'success')
    afficher();
}
function reloadTasks() {
    // Remove tasks elements
    toDoTasks.innerHTML = ``;
    inProgressTasks.innerHTML = ``;
    doneTasks.innerHTML = ``;

}


function initTaskForm() {
    // Clear task form from data
    document.forms[0].reset();

}
// ALLOWS THE DROP INTO IT ELEMENT CALLED IN
function allowDrop(e) {
    e.preventDefault();
}

// Global Variable: 
let indexToMove;
// GETS THE ID OF THE DRAGED ELEMENT
function drag(e) {
    e.preventDefault();
    indexToMove = e.target.id;
}

// THIS Fct GETS TRIG IF THE ELEMENT CALLED IN WAS THE DROP TARGET
function dropedInProgress(e) {
    tasks[indexToMove].status = "In Progress";
    initTaskForm();
    afficher();
}

// THIS Fct GETS TRIG IF THE ELEMENT CALLED IN WAS THE DROP TARGET
function dropedToDo(e) {
    tasks[indexToMove].status = "To Do";
    initTaskForm();
    afficher();
}

// THIS Fct GETS TRIG IF THE ELEMENT CALLED IN WAS THE DROP TARGET
function dropedDone(e) {
    tasks[indexToMove].status = "Done";
    initTaskForm();
    afficher();
}



 