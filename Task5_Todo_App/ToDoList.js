const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete");

    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.classList.add("edit");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    taskInput.value = "";

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
}
