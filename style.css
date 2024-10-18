// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
document.addEventListener("mousemove", function (event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    document.body.style.background = `linear-gradient(135deg, rgba(255, 0, 0, ${x}), rgba(0, 0, 255, ${y}))`;
});

// Function to add a task
addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div class="task-buttons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Edit functionality
        li.querySelector('.edit-btn').addEventListener('click', function () {
            const newTaskText = prompt("Edit your task:", taskText);
            if (newTaskText) {
                li.querySelector('span').innerText = newTaskText;
            }
        });

        // Delete functionality
        li.querySelector('.delete-btn').addEventListener('click', function () {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = ''; // Clear input
    } else {
        alert("Please enter a task.");
    }
});
