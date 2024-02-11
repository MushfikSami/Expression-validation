let expression = document.getElementById("expression");
let result = document.getElementById("result");

let option = Number(
  prompt(`Please select the option to check validation of your input:
1. Type 1 for "Email"
2. Type 2 for "Phone number"
3. Type 3 for "Post Code"`)
);

let text = prompt("Please Write the text to be validated: ");
expression.textContent = text;

switch (option) {
  case 1:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateRegex(emailRegex, text);
    break;
  case 2:
    const phoneRegex = /^(?:\+008)?\d{11}$/;
    validateRegex(phoneRegex, text);
    break;
  case 3:
    const postcodeRegex = /^\d{4}$/;
    validateRegex(postcodeRegex, text);
    break;
}

function validateRegex(Regex, text) {
  if (Regex.test(text)) {
    result.textContent = "Valid";
    result.classList.add("valid");
  } else {
    result.textContent = "Invalid";
    result.classList.add("invalid");
  }
}
