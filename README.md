Form Validation with JavaScript
 Overview

This project demonstrates a simple form validation system using JavaScript. The validation checks user inputs before form submission to ensure that all fields meet the required criteria.

 Features

Checks if all required fields are filled.

Validates email format.

Ensures password meets minimum length.

Confirms that password and confirm-password fields match.

Displays error messages dynamically.

Prevents form submission until all validations are passed.

🛠️ How It Works

The logic follows these steps:

Capture form elements using document.getElementById or querySelector.

Add event listener for submit or input events.

Validation rules:

Empty check → If a field is empty, show an error.

Email format → Use regex (/^[^\s@]+@[^\s@]+\.[^\s@]+$/) to validate email.

Password strength → Check length (e.g., min 6 chars).

Confirm password → Ensure both passwords match.

Display feedback → Error messages are shown under the respective input fields.

Block form submission → Use event.preventDefault() until all inputs are valid.

 File Structure
/form-validation
│── index.html   # Basic form structure
│── style.css    # Styling for form and error messages
│── script.js    # JavaScript validation logic
