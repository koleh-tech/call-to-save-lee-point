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
    var phoneNumbers = ["+61421137167", "+61421137168", "+61421137169", "+61421137170", "+61421137171"];
    var phoneList = document.getElementById("phoneList");
    if (!phoneList) {
        return;
    }
    phoneList.innerHTML = "";
    function formatPhoneNumber(phoneNumber) {
        var character = getRandomCharacter();
        var li = document.createElement("li");
        var a = document.createElement("a");
        var span = document.createElement("span");
        var div = document.createElement("div");
        a.href = "tel:+".concat(phoneNumber); // Replace with actual phone numbers
        a.textContent = "tel:+".concat(phoneNumber); // Replace with actual phone numbers
        span.textContent = ", ".concat(character.name, " - ").concat(character.occupation);
        div.appendChild(a);
        div.appendChild(span);
        li.appendChild(div);
        phoneList.appendChild(li);
    }
    phoneNumbers.forEach(formatPhoneNumber);
}
// Generate initial phone list when the page loads
window.onload = generatePhoneList;
