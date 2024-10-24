const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('btn');
const taskList = document.getElementById('list');


addTaskBtn.addEventListener('click', addTask);


function addTask() {
  const task = taskInput.value;

  if (task === '') {
    alert('Please enter a task.');
    return;
  }

  


  const li = document.createElement('li');
  li.innerHTML = `${task} 
    <button class="editBtn">Edit</button> 
    <button class="deleteBtn">Delete</button>`;
  

  taskList.appendChild(li);

 
  taskInput.value = '';

 
  li.querySelector('.deleteBtn').addEventListener('click', () => {
    li.remove();
  });


  li.querySelector('.editBtn').addEventListener('click', () => {
    editTask(li);
  });
}


function editTask(li) {
  const currentTask = li.firstChild.textContent.trim();
  const updatedTask = prompt('Edit your task:', currentTask);
  
  if (updatedTask !== null && updatedTask !== '') {
    li.firstChild.textContent = updatedTask;
  }
}