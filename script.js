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
    { name: "Lachlan Wilson", occupation: "Real Estate Developer" },
    { name: "Emily Walker", occupation: "Property Strategist" },
    { name: "Joshua Baker", occupation: "Property Analyst" },
    { name: "Sophie Carter", occupation: "Rental Property Agent" },
    { name: "Benjamin Foster", occupation: "Land Developer" },
    { name: "Isabella Evans", occupation: "Property Management Specialist" },
    { name: "William Murphy", occupation: "Commercial Property Investor" },
    { name: "Chloe White", occupation: "Property Portfolio Manager" },
    { name: "Thomas Martin", occupation: "Investment Property Advisor" },
    { name: "Grace Turner", occupation: "Property Valuer" },
    { name: "Henry Phillips", occupation: "Property Investment Consultant" },
    { name: "Amelia Harris", occupation: "Real Estate Broker" },
    { name: "Ethan Scott", occupation: "Residential Property Developer" },
    { name: "Lily Green", occupation: "Property Investment Manager" },
    { name: "Jacob Cook", occupation: "Property Investment Specialist" },
    { name: "Ruby King", occupation: "Property Acquisition Manager" },
    { name: "Samuel Lee", occupation: "Property Investment Analyst" },
    { name: "Zoe Baker", occupation: "Rental Property Investor" },
    { name: "Alexander Stewart", occupation: "Property Investment Strategist" },
    { name: "Mia Thompson", occupation: "Defence member" },
    { name: "Noah Harris", occupation: "Property Investment Consultant" },
    { name: "Ava Campbell", occupation: "Property Investment Broker" },
    { name: "Lucas Anderson", occupation: "Property Investment Planner" },
    { name: "Ella Mitchell", occupation: "Property Investment Coach" },
    { name: "Oscar Wright", occupation: "Prospective landlord" },
    { name: "Sophia Hughes", occupation: "Prospective landlord" },
    { name: "Charlie Bennett", occupation: "Prospective landlord" },
    { name: "Matilda Turner", occupation: "Prospective landlord" },
    { name: "Harrison Ward", occupation: "Prospective landlord" },
    { name: "Evie Harris", occupation: "Prospective landlord" },
    { name: "Xavier Brown", occupation: "Prospective landlord" },
    { name: "Ruby Wilson", occupation: "Prospective landlord" },
    { name: "Leo Taylor", occupation: "Prospective landlord" },
    { name: "Olivia Hall", occupation: "Property Investment Analyst" },
    { name: "Ethan Clark", occupation: "Property Investment Director" },
    { name: "Isla Bell", occupation: "Property Investment Manager" },
    { name: "Noah Gray", occupation: "Property owner looking to lease to DHA" },
    { name: "Grace Richardson", occupation: "Property owner looking to lease to DHA" },
    { name: "Max Cox", occupation: "Property owner looking to lease to DHA" },
    { name: "Amelia Fisher", occupation: "Property owner looking to lease to DHA" },
    { name: "Jack Hughes", occupation: "Property owner looking to lease to DHA" },
    { name: "Mia Hill", occupation: "Property owner looking to lease to DHA" },
    { name: "William Bailey", occupation: "Property owner looking to lease to DHA" },
    { name: "Chloe Turner", occupation: "Property owner looking to lease to DHA" },
    { name: "Oliver Wright", occupation: "Property owner looking to lease to DHA" },
    { name: "Isabella Walker", occupation: "Property owner looking to lease to DHA" },
    { name: "Charlie Murphy", occupation: "Property owner looking to lease to DHA" },
    { name: "Ava Harrison", occupation: "Property owner looking to lease to DHA" },
    { name: "Jacob Martin", occupation: "Property owner looking to lease to DHA" },
    { name: "Ruby Evans", occupation: "Property owner looking to lease to DHA" },
    { name: "Noah Phillips", occupation: "Property owner looking to lease to DHA" },
    { name: "Sophie Bennett", occupation: "Property owner looking to lease to DHA" },
    { name: "Henry Campbell", occupation: "Property owner looking to lease to DHA" },
    { name: "Lily Anderson", occupation: "Property owner looking to lease to DHA" },
    { name: "Thomas King", occupation: "Property owner looking to lease to DHA" },
    { name: "Zoe Gray", occupation: "Property owner looking to lease to DHA" },
    { name: "Samuel Cox", occupation: "Property Investment Director" },
    { name: "Ella Richardson", occupation: "Property Investment Manager" },
    { name: "Lucas Turner", occupation: "Property Investment Executive" },
    { name: "Grace Fisher", occupation: "Property Investment Coordinator" },
    { name: "Benjamin Hill", occupation: "Property Investment Analyst" },
    { name: "Emily Bailey", occupation: "Property Investment Manager" },
    { name: "Joshua Hall", occupation: "Looking to build" },
    { name: "Isla Murphy", occupation: "Looking to build" },
    { name: "Ava Taylor", occupation: "Looking to build" },
    { name: "Oscar Phillips", occupation: "Looking to build" },
    { name: "Evie Wright", occupation: "Looking to build" },
    { name: "Xavier Walker", occupation: "Looking to build" },
    { name: "Matilda Campbell", occupation: "Looking to build" },
    { name: "Harrison Evans", occupation: "Looking to build" },
    { name: "Ruby Bennett", occupation: "Looking to build" },
    { name: "Leo Anderson", occupation: "Prospective contractor" },
    { name: "Olivia Cox", occupation: "Prospective contractor" },
    { name: "Ethan Turner", occupation: "Prospective contractor" },
    { name: "Isabella Richardson", occupation: "Prospective contractor" },
    { name: "Jack Fisher", occupation: "Prospective contractor" },
    { name: "Chloe Hill", occupation: "Prospective contractor" },
    { name: "William Bailey", occupation: "Prospective contractor" },
    { name: "Sophie Hall", occupation: "Prospective contractor" },
    { name: "Thomas Phillips", occupation: "Prospective contractor" },
    { name: "Mia Evans", occupation: "Prospective contractor" },
    { name: "Noah Walker", occupation: "Property Investment Coordinator" },
    { name: "Ava Campbell", occupation: "Property Investment Analyst" },
    { name: "Lucas Murphy", occupation: "Property Investment Manager" },
    { name: "Grace Taylor", occupation: "Property Investment Specialist" },
    { name: "Benjamin Turner", occupation: "Property Investment Strategist" },
    { name: "Emily Anderson", occupation: "Property Investment Consultant" },
    { name: "Joshua Cox", occupation: "Property Investment Advisor" },
    { name: "Isla Richardson", occupation: "Property Investment Analyst" },
    { name: "Ava Bennett", occupation: "Property Investment Director]" },
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
        { phoneNo: "+139 342", description: "For defence members, spouses, existing contractors and service providers" },
        { phoneNo: "+133 342", description: "Invest with us" },
        // `+61421137168`,
        // `+61421137169`,
        // `+61421137170`,
        // `+61421137171`,
    ];
    var characters = getRandomCharacters(phoneNumbers.length).map(function (c) { return "".concat(c.name, " - ").concat(c.occupation); });
    function formatPhoneNumber(contact, index) {
        var phoneNumberElem = document.createElement('div');
        var a = document.createElement('a');
        a.href = "tel:+".concat(contact.phoneNo); // Replace with actual phone numbers
        a.textContent = "".concat(contact.phoneNo); // Replace with actual phone numbers
        var infoAndContact = document.createElement('ul');
        var characterElem = document.createElement('li');
        characterElem.textContent = characters[index];
        characterElem.textContent = characters[index];
        var infoElem = document.createElement('li');
        infoElem.textContent = contact.description;
        infoAndContact.append(infoElem);
        infoAndContact.append(characterElem);
        phoneNumberElem.appendChild(a);
        phoneNumberElem.appendChild(infoAndContact);
        phoneList.appendChild(phoneNumberElem);
    }
    phoneNumbers.forEach(formatPhoneNumber);
}
// Generate initial phone list when the page loads
window.onload = generatePhoneList;
