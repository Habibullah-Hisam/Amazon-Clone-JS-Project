let list = [];

function deleteItem(index) {
  list.splice(index, 1); // Remove the item from the list
  renderlist(); // Re-render the list
}

function renderlist() {
  let displayHtml = '';
  const input = document.getElementById("myInput");
  const dateInput = document.getElementById("dateInput");
  const inputDisplay = input.value;
  const dateDisplay = dateInput.value;
  
  if (inputDisplay !== '' && dateDisplay !== '') {
    list.push({ task: inputDisplay, date: dateDisplay });
    input.value = '';
    dateInput.value = '';
  }
  
  list.forEach(function(todo, index) {
    const html = `<p> 
      ${todo.task} - ${todo.date}    
      <button onclick="deleteItem(${index});" class="delBtn">Delete</button>
    </p>`;
    
    displayHtml += html;
  });
  
  document.getElementById("displayDiv").innerHTML = displayHtml;
}

document.getElementById('addBtn').addEventListener('click', renderlist);
document.getElementById('myInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    renderlist();
  }
});
