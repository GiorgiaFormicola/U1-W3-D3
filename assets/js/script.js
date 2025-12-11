const input = document.querySelector("input");

const button = document.querySelector("button");

const taskList = document.querySelector("ul");

console.log(input);

console.log(button);

console.log(taskList);

button.onclick = function () {
  const task = document.createElement("li");
  task.innerText = input.value;
  taskList.appendChild(task);
  input.value = "";
};
