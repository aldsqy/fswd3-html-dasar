const input = document.querySelector('.input-btn input');
const listTasks = document.querySelector('.list-tasks ul');
const message = document.querySelector('.list-tasks');
let tasks = [];

const API_URL = 'https://crudcrud.com/api/134e57ca5a6c46b8a5c5fc26f6ad6f10/tasks';

listTasks.addEventListener('click', deleteTask);

function deleteTask(e) {
  if (e.target.classList.contains('close')) {
    const taskId = e.target.getAttribute('task-id');
    tasks = tasks.filter(task => task.id !== taskId);
    deleteTaskFromAPI(taskId);
    createHTML();
  } else if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}

function deleteAll() {
  tasks = [];
  deleteAllTasksFromAPI();
  createHTML();
}

function addTasks() {
  const task = input.value.trim();
  if (task === '') {
    showError('The field is empty...');
    return;
  }

  const taskObj = { task, id: Date.now().toString() };
  tasks.push(taskObj);

  createHTML();
  input.value = '';

  addTaskToAPI(taskObj);
}

function createHTML() {
  listTasks.innerHTML = '';
  if (tasks.length === 0) return;

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `${task.task} <span class="close" task-id="${task.id}">X</span>`;
    listTasks.appendChild(li);
  });

  sincronizationStorage();
}

function sincronizationStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showError(error) {
  const messageError = document.createElement('p');
  messageError.textContent = error;
  messageError.classList.add('error');

  message.appendChild(messageError);
  setTimeout(() => messageError.remove(), 2000);
}

async function addTaskToAPI(taskObj) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskObj),
  });
  const data = await response.json();
  tasks[tasks.length - 1].id = data._id;
}

async function deleteTaskFromAPI(taskId) {
  await fetch(`${API_URL}/${taskId}`, { method: 'DELETE' });
}

async function deleteAllTasksFromAPI() {
  const response = await fetch(API_URL);
  const data = await response.json();
  data.forEach(async task => {
    await fetch(`${API_URL}/${task._id}`, { method: 'DELETE' });
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch(API_URL);
  tasks = await response.json();
  createHTML();
});

// Handle window unload event to delete all tasks from API when the user closes the alert
window.addEventListener('beforeunload', () => {
  deleteAllTasksFromAPI();
});
