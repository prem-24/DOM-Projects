// // Get references to HTML elements
// const taskInput = document.getElementById("taskInput");
// const addTaskButton = document.getElementById("addTask");
// const taskList = document.getElementById("taskList");

// // Function to add a new task
// function addTask() {
//   const taskText = taskInput.value;
//   if (taskText) {
//     const listItem = document.createElement("li");
//     listItem.textContent = taskText;
//     taskList.appendChild(listItem);
//     taskInput.value = "";
//   }
// }

// // Event listener for the "Add" button
// addTaskButton.addEventListener("click", addTask);

// // Event listener for the "Enter" key
// taskInput.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

function addTask() {
  // Get input value
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;

  // empty value
  if (!taskText) {
      alert("Type any value 😤");
      return; // Exit the function if the input is empty
    }

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.innerText = taskText;
  
  
  // Get the task list
  const taskList = document.getElementById('taskList');

  // Add the new list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = '';

 
}
