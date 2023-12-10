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
  