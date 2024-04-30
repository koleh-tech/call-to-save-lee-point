// Array of characters and occupations
var characters = [
    { name: "John Doe", occupation: "Plumber" },
    { name: "Jane Smith", occupation: "Software Developer" },
    // Add more characters as needed
];
// Function to randomly pick a character and occupation
function getRandomCharacter() {
    var randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
// Function to generate HTML for phone list
function generatePhoneList() {
    var phoneList = document.getElementById("phoneList");
    if (phoneList) {
        phoneList.innerHTML = "";
        for (var i = 0; i < 5; i++) { // You can adjust the number of phone numbers displayed
            var character = getRandomCharacter();
            var li = document.createElement("li");
            var a = document.createElement("a");
            var p = document.createElement("p");
            a.href = "tel:+123456789".concat(i); // Replace with actual phone numbers
            a.textContent = "tel:+123456789".concat(i); // Replace with actual phone numbers
            p.textContent = "".concat(character.name, " - ").concat(character.occupation);
            li.appendChild(a);
            phoneList.appendChild(li);
        }
    }
}
// Generate initial phone list when the page loads
window.onload = generatePhoneList;
