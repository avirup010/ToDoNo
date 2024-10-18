/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}


/* Subtle Animations */

/* Fade-in effect for the body */
body {
    animation: fadeIn 1.5s ease-in-out;
}

/* Animation for task items to slide in */
li {
    animation: slideIn 0.4s ease-in-out;
}

/* Buttons have a smooth hover effect */
button {
    transition: background-color 0.2s ease-in-out, transform 0.1s ease;
}

button:hover {
    transform: scale(1.02); /* Slight zoom effect */
}

/* Keyframes for fade-in */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Keyframes for slide-in animation */
@keyframes slideIn {
    from {
        transform: translateX(-20%); /* Less movement */
        opacity: 0; /* Start transparent */
    }
    to {
        transform: translateX(0);
        opacity: 1; /* End fully visible */
    }
}


@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
.container {
    text-align: center;
    width: 100%;
    max-width: 600px;
}

/* Header */
h1 {
    font-family: 'Pacifico', cursive; /* Keep this font for the header */
    font-size: 4rem; /* Keep font size */
    margin: 0; /* Remove default margin */
    padding: 20px 0; /* Add some padding for spacing */
    position: absolute; /* Make it absolute */
    top: 20px; /* Position it near the top */
    left: 50%; /* Center it horizontally */
    transform: translateX(-50%); /* Center it properly */
    color: #333;
}


/* Input Section */
.input-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

input {
    width: 70%;
    padding: 12px;
    border-radius: 8px;
}

button {
    width: 25%;
    padding: 12px;
    background-color: #ff7e5f;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 8px;
}

/* Task List */
/* Task List */
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin: 10px 0;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
}

li .task-buttons {
    display: flex;
    gap: 10px; /* Spacing between buttons */
}

button.edit-btn, button.delete-btn {
    padding: 8px 16px;  /* Increased padding */
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    color: white;
    font-size: 0.9rem;  /* Adjusted font size */
    white-space: nowrap; /* Prevent text wrapping */
    width: 100px;  /* Set a specific width */
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

/* Footer */
footer {
    font-family: 'Orbitron', sans-serif; /* Futuristic font */
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
    font-size: 1.2rem;
}
.linkedin-btn {
    display: inline-block;
    background-color: #000; /* Pitch black */
    color: #fff; /* Bright white text */
    padding: 3px 8px; /* Smaller padding */
    border-radius: 15px; /* Rounded corners */
    font-family: 'Courier New', monospace; /* Code-like font */
    font-size: 0.7rem; /* Smaller font size */
    text-decoration: none; /* Remove underline */
    transition: background-color 0.3s ease; /* Button hover effect */
}

.linkedin-btn:hover {
    background-color: #333; /* Darker shade on hover */
}

