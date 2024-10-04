function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = taskInput.value;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
          taskList.removeChild(li);
      };

      li.appendChild(deleteButton);
      taskList.appendChild(li);

      taskInput.value = '';
  
  }
}
