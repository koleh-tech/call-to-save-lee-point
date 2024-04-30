
// Define types for character and occupation
type Character = {
    name: string;
    occupation: string;
};

// Array of characters and occupations
const characters: Character[] = [
    { name: "John Doe", occupation: "Plumber" },
    { name: "Jane Smith", occupation: "Software Developer" },
    // Add more characters as needed
];

// Function to randomly pick a character and occupation
function getRandomCharacter(): Character {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

// Function to generate HTML for phone list
function generatePhoneList(): void {
    const phoneNumbers = [`+61421137167`, `+61421137168`, `+61421137169`, `+61421137170`, `+61421137171`];

    const phoneList = document.getElementById("phoneList");
    if (!phoneList) {
        return;
    }
    phoneList.innerHTML = "";

    function formatPhoneNumber(phoneNumber) {
        const character = getRandomCharacter();
        const li = document.createElement("li");
        const a = document.createElement("a");
        const span = document.createElement("span");
        const div = document.createElement("div");
        a.href = `tel:+${phoneNumber}`; // Replace with actual phone numbers
        a.textContent = `tel:+${phoneNumber}`; // Replace with actual phone numbers
        span.textContent = `, ${character.name} - ${character.occupation}`;
        div.appendChild(a);
        div.appendChild(span);
        li.appendChild(div);
        phoneList.appendChild(li);
    }

    phoneNumbers.forEach(formatPhoneNumber)
}

// Generate initial phone list when the page loads
window.onload = generatePhoneList;
