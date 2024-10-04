document.getElementById('new-task').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      const taskText = document.createElement('span');
      taskText.textContent = taskInput.value;
      li.appendChild(taskText);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
          taskList.removeChild(li);
      };

      const updateButton = document.createElement('button');
      updateButton.textContent = 'Update';
      updateButton.onclick = function() {
          const inputField = document.createElement('input');
          inputField.type = 'text';
          inputField.value = taskText.textContent;
          li.insertBefore(inputField, taskText);
          li.removeChild(taskText);
          updateButton.textContent = 'Save';

          inputField.addEventListener('keypress', function(event) {
              if (event.key === 'Enter') {
                  saveTask(inputField, taskText, li, updateButton);
              }
          });

          updateButton.onclick = function() {
              saveTask(inputField, taskText, li, updateButton);
          };
      };

      li.appendChild(deleteButton);
      li.appendChild(updateButton);
      taskList.appendChild(li);

      taskInput.value = '';
  }
}

function saveTask(inputField, taskText, li, updateButton) {
  if (inputField.value.trim() !== '') {
      taskText.textContent = inputField.value;
      li.insertBefore(taskText, inputField);
      li.removeChild(inputField);
      updateButton.textContent = 'Update';
      updateButton.onclick = function() {
          const inputField = document.createElement('input');
          inputField.type = 'text';
          inputField.value = taskText.textContent;
          li.insertBefore(inputField, taskText);
          li.removeChild(taskText);
          updateButton.textContent = 'Save';

          inputField.addEventListener('keypress', function(event) {
              if (event.key === 'Enter') {
                  saveTask(inputField, taskText, li, updateButton);
              }
          });

          updateButton.onclick = function() {
              saveTask(inputField, taskText, li, updateButton);
          };
      };
  }
}
