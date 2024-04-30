var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of characters and occupations
var characters = [
    { name: 'John Doe', occupation: 'Plumber' },
    { name: 'Jane Smith', occupation: 'Software Developer' },
    { name: 'xohn Doe', occupation: 'Plumber' },
    { name: 'xane Smith', occupation: 'Software Developer' },
    { name: 'Zane Smith', occupation: 'Software Developer' },
    // Add more characters as needed
];
// Function to randomly pick a character and occupation
function getRandomCharacter() {
    var randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
function getRandomCharacters(numChars) {
    var shuffledCharacters = shuffleArray(__spreadArray([], characters, true)); // Assuming characters is your array of available characters
    return shuffledCharacters.slice(0, numChars);
}
function shuffleArray(array) {
    var _a;
    var newArray = __spreadArray([], array, true);
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [newArray[j], newArray[i]], newArray[i] = _a[0], newArray[j] = _a[1];
    }
    return newArray;
}
// Function to generate HTML for phone list
function generatePhoneList() {
    var phoneList = document.getElementById('phoneList');
    if (phoneList === null) {
        return;
    }
    phoneList.innerHTML = '';
    var phoneNumbers = [
        "+61421137167",
        "+61421137168",
        "+61421137169",
        "+61421137170",
        "+61421137171",
    ];
    var characters = getRandomCharacters(phoneNumbers.length).map(function (c) { return ", ".concat(c.name, " - ").concat(c.occupation); });
    function formatPhoneNumber(phoneNumber, index) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        var span = document.createElement('span');
        var div = document.createElement('div');
        a.href = "tel:+".concat(phoneNumber); // Replace with actual phone numbers
        a.textContent = "".concat(phoneNumber); // Replace with actual phone numbers
        span.textContent = characters[index];
        div.appendChild(a);
        div.appendChild(span);
        li.appendChild(div);
        phoneList.appendChild(li);
    }
    phoneNumbers.forEach(formatPhoneNumber);
}
// Generate initial phone list when the page loads
window.onload = generatePhoneList;
