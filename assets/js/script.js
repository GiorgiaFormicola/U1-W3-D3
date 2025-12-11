const input = document.querySelector("input");

const addButton = document.getElementById("add-button");

const taskList = document.querySelector("ul");

console.log(input);

console.log(addButton);

console.log(taskList);

addButton.onclick = function () {
  const task = document.createElement("li");
  task.innerText = input.value;
  taskList.appendChild(task);

  const removeButton = document.createElement("button");
  removeButton.innerText = "Rimuovi";
  removeButton.style.display = "none";

  task.onmouseover = function (event) {
    if (event.target === task) {
      removeButton.style.display = "inline-block";
    }
  };

  task.onmouseout = function (event) {
    if (event.target === task) {
      removeButton.style.display = "none";
    }
  };

  task.appendChild(removeButton);

  input.value = "";
  task.hoover;

  task.onclick = function (event) {
    console.log(event);

    if (event.target === task) {
      if (task.style.textDecoration === "none") {
        task.style.textDecoration = "line-through";
      } else {
        task.style.textDecoration = "none";
      }
    } else if (event.target === removeButton) {
      task.remove();
    }
  };

  //   task.innerHTML = task.innerText + "<i></i>";
  //   const trashIcon = document.querySelector("i");
  //   trashIcon.classList.add("fas" + " fa-trash-alt");

  //   const trashIcon = document.createElement("i");
  //   task.appendChild(trashIcon);
  //   trashIcon.classList.add(fas fa-trash-alt);
};
