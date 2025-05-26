document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleInput");
  const inputContainer = document.getElementById("inputContainer");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskCount = document.getElementById("taskCount");
  const dateDisplay = document.getElementById("dateDisplay");

  toggleBtn.addEventListener("click", () => {
    inputContainer.classList.toggle("hidden");
  });

  function updateDate() {
    const today = new Date();
    dateDisplay.textContent = today.toDateString();
  }

  function updateTaskCount() {
    const count = document.querySelectorAll("#taskList li").length;
    taskCount.textContent = `${count} task${count !== 1 ? "s" : ""}`;
  }

  function createTask(text) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      span.classList.toggle("completed", checkbox.checked);
    });

    const span = document.createElement("span");
    span.textContent = text;
    span.className = "task-text";

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit task:", span.textContent);
      if (newText) span.textContent = newText;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
      updateTaskCount();
    });

    actions.append(editBtn, deleteBtn);
    li.append(checkbox, span, actions);
    taskList.appendChild(li);
    updateTaskCount();
  }

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      createTask(taskText);
      taskInput.value = "";
    }
  });

  updateDate();
  updateTaskCount();
});
