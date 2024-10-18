// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');

        li.innerHTML = `
            <div class="checkbox-container">
                <input type="checkbox" />
            </div>
            <span class="task-text">${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        // Edit functionality
        li.querySelector('.edit-btn').addEventListener('click', function() {
            const newTaskText = prompt("Edit your task:", taskText);
            if (newTaskText) {
                li.querySelector('.task-text').innerText = newTaskText;
            }
        });

        // Delete functionality
        li.querySelector('.delete-btn').addEventListener('click', function() {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = ''; // Clear input
    } else {
        alert("Please enter a task.");
    }
});
