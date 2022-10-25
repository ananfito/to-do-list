// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event Listener for Add Task Button
addTask.addEventListener('click', function () {
  // create div to hold the inputted task
  let task = document.createElement('div');
  task.classList.add('task');

  // create a list item for task
  let li = document.createElement('li');
  li.innerText = `${inputTask.value}`; // set inner text to the inputted text
  task.appendChild(li); // add inputted text of the list item into the div with the class 'task'

  // create check button
  let checkButton = document.createElement('button');
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'; // creates check button
  checkButton.classList.add('checkTask'); // adds class 'checkTask' to `checkButton`
  task.appendChild(checkButton); // adds checkButton to task

  // create delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'; // creates delete button
  deleteButton.classList.add('deleteTask'); // adds class 'deleteTask' to `deleteButton`
  task.appendChild(deleteButton); // adds deleteButton to task

  if (inputTask.value === "") {
    alert('Please enter a task');
  } else {
    taskContainer.appendChild(task);
  };

  inputTask.value = ""; // reset placeholder text in the input box

  // check button functionality: line-through when checked
  checkButton.addEventListener('click', function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  // delete button functionality: remove task from list
  deleteButton.addEventListener('click', function (e) {
    let target = e.target; // `e.target` references the actual element being clicked

    target.parentElement.parentElement.remove();
    /* `target` references the trash can, the first `parentElement` references the list item, the second `parentElement` above that is the task item */
  });


});
