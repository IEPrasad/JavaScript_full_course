function addTask() {
  let taskInput = document.getElementById('taskInput').value;
  
  if (taskInput === '') {
    alert('Please enter a task');
    return;
  }
  
  let ul = document.getElementById('taskList');
  let li = document.createElement('li');
  li.textContent = taskInput;
  
  let removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function() {
    ul.removeChild(li);
  };
  
  li.appendChild(removeButton);
  ul.appendChild(li);
  
  document.getElementById('taskInput').value = '';
}
