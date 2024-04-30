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
            var span = document.createElement("span");
            var div = document.createElement("div");
            a.href = "tel:+61421137167".concat(i); // Replace with actual phone numbers
            a.textContent = "tel:+61421137167".concat(i); // Replace with actual phone numbers
            span.textContent = ", ".concat(character.name, " - ").concat(character.occupation);
            div.appendChild(a);
            div.appendChild(span);
            li.appendChild(div);
            phoneList.appendChild(li);
        }
    }
}
// Generate initial phone list when the page loads
window.onload = generatePhoneList;
