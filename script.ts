
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
    const phoneList = document.getElementById("phoneList");
    if (phoneList) {
        phoneList.innerHTML = "";
        for (let i = 0; i < 5; i++) { // You can adjust the number of phone numbers displayed
            const character = getRandomCharacter();
            const li = document.createElement("li");
            const a = document.createElement("a");
            const span = document.createElement("span");
            const div = document.createElement("div");
            a.href = `tel:+61421137167${i}`; // Replace with actual phone numbers
            a.textContent = `tel:+61421137167${i}`; // Replace with actual phone numbers
            span.textContent = `, ${character.name} - ${character.occupation}`;
            div.appendChild(a);
            div.appendChild(span);
            li.appendChild(div);
            phoneList.appendChild(li);
        }
    }
}

// Generate initial phone list when the page loads
window.onload = generatePhoneList;
