const textArea = document.getElementById('feedback');
const charCount = document.getElementById('charCount');
const maxChars = 50;

textArea.addEventListener("input", () => {
    // Get the current length of the text in the textarea
    const currentLength = textArea.value.length;
    charCount.textContent = currentLength;
    if (currentLength >= 50) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
});

const tooltip = document.getElementById('customTooltip');

function showTooltip(event, message) {
  tooltip.textContent = message;
  tooltip.style.display = 'block';
  // Position the tooltip near the mouse cursor
  tooltip.style.top = (event.pageY + 10) + 'px';
  tooltip.style.left = (event.pageX + 10) + 'px';
}

function hideTooltip() {
  tooltip.style.display = 'none';
}

function attachTooltip(inputElement, message) {
  inputElement.addEventListener('mouseover', (event) => showTooltip(event, message));
  inputElement.addEventListener('mouseout', hideTooltip);
}

attachTooltip(document.getElementById('name'), 'Enter your full name.');
attachTooltip(document.getElementById('email'), 'Enter a valid email address.');

const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Always prevent default submission

    // 1. Clear previous error messages
    clearErrors();

    // 2. Get input values
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const feedbackInput = document.getElementById("feedback");
    let isValid = true;

    // 3. Check for empty fields and show validation messages
    const missingFields = [];

    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        nameInput.classList.add("input-error");
        missingFields.push("Name");
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        emailInput.classList.add("input-error");
        missingFields.push("Email");
        isValid = false;
    }

    if (feedbackInput.value.trim() === "") {
        document.getElementById("feedbackError").textContent = "Feedback is required.";
        feedbackInput.classList.add("input-error");
        missingFields.push("Feedback");
        isValid = false;
    }

    // 4. Prevent submission if validation fails
    if (!isValid) {
        event.preventDefault();
        const firstError = document.querySelector('.input-error');
        if (firstError) firstError.focus();

        // Show a popup summary of missing fields
        alert("Please fill in the following required fields: " + missingFields.join(", ") + ".");
    }
});

function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((el) => (el.textContent = ""));
    const inputElements = document.querySelectorAll(".input-error");
    inputElements.forEach((el) => el.classList.remove("input-error"));
}


    // 2. Create the new feedback element
    const newFeedback = document.createElement("div");
    newFeedback.className = "feedback-entry"; // For CSS styling
    newFeedback.textContent = feedbackText; // Set text securely

    // 3. Append to the container
    displayContainer.appendChild(newFeedback);
}

    // 3. Append to container
    displayContainer.appendChild(newFeedback);



