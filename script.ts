// Define types for character and occupation
type Character = {
    name: string
    occupation: string
}

// Array of characters and occupations
const characters: Character[] = [
    {name: "Lachlan Wilson" , occupation: "Real Estate Developer"},
    {name: "Emily Walker" , occupation: "Property Strategist"},
    {name: "Joshua Baker" , occupation: "Property Analyst"},
    {name: "Sophie Carter" , occupation: "Rental Property Agent"},
    {name: "Benjamin Foster" , occupation: "Land Developer"},
    {name: "Isabella Evans" , occupation: "Property Management Specialist"},
    {name: "William Murphy" , occupation: "Commercial Property Investor"},
    {name: "Chloe White" , occupation: "Property Portfolio Manager"},
    {name: "Thomas Martin" , occupation: "Investment Property Advisor"},
    {name: "Grace Turner" , occupation: "Property Valuer"},
    {name: "Henry Phillips" , occupation: "Property Investment Consultant"},
    {name: "Amelia Harris" , occupation: "Real Estate Broker"},
    {name: "Ethan Scott" , occupation: "Residential Property Developer"},
    {name: "Lily Green" , occupation: "Property Investment Manager"},
    {name: "Jacob Cook" , occupation: "Property Investment Specialist"},
    {name: "Ruby King" , occupation: "Property Acquisition Manager"},
    {name: "Samuel Lee" , occupation: "Property Investment Analyst"},
    {name: "Zoe Baker" , occupation: "Rental Property Investor"},
    {name: "Alexander Stewart" , occupation: "Property Investment Strategist"},
    {name: "Mia Thompson" , occupation: "Property Investment Advisor"},
    {name: "Noah Harris" , occupation: "Property Investment Consultant"},
    {name: "Ava Campbell" , occupation: "Property Investment Broker"},
    {name: "Lucas Anderson" , occupation: "Property Investment Planner"},
    {name: "Ella Mitchell" , occupation: "Property Investment Coach"},
    {name: "Oscar Wright" , occupation: "Property Investment Executive"},
    {name: "Sophia Hughes" , occupation: "Property Investment Director"},
    {name: "Charlie Bennett" , occupation: "Property Investment Coordinator"},
    {name: "Matilda Turner" , occupation: "Property Investment Analyst"},
    {name: "Harrison Ward" , occupation: "Property Investment Manager"},
    {name: "Evie Harris" , occupation: "Property Investment Specialist"},
    {name: "Xavier Brown" , occupation: "Property Investment Strategist"},
    {name: "Ruby Wilson" , occupation: "Property Investment Consultant"},
    {name: "Leo Taylor" , occupation: "Property Investment Advisor"},
    {name: "Olivia Hall" , occupation: "Property Investment Analyst"},
    {name: "Ethan Clark" , occupation: "Property Investment Director"},
    {name: "Isla Bell" , occupation: "Property Investment Manager"},
    {name: "Noah Gray" , occupation: "Property Investment Executive"},
    {name: "Grace Richardson" , occupation: "Property Investment Coordinator"},
    {name: "Max Cox" , occupation: "Property Investment Analyst"},
    {name: "Amelia Fisher" , occupation: "Property Investment Manager"},
    {name: "Jack Hughes" , occupation: "Property Investment Specialist"},
    {name: "Mia Hill" , occupation: "Property Investment Strategist"},
    {name: "William Bailey" , occupation: "Property Investment Consultant"},
    {name: "Chloe Turner" , occupation: "Property Investment Advisor"},
    {name: "Oliver Wright" , occupation: "Property Investment Analyst"},
    {name: "Isabella Walker" , occupation: "Property Investment Director"},
    {name: "Charlie Murphy" , occupation: "Property Investment Manager"},
    {name: "Ava Harrison" , occupation: "Property Investment Executive"},
    {name: "Jacob Martin" , occupation: "Property Investment Coordinator"},
    {name: "Ruby Evans" , occupation: "Property Investment Analyst"},
    {name: "Noah Phillips" , occupation: "Property Investment Manager"},
    {name: "Sophie Bennett" , occupation: "Property Investment Specialist"},
    {name: "Henry Campbell" , occupation: "Property Investment Strategist"},
    {name: "Lily Anderson" , occupation: "Property Investment Consultant"},
    {name: "Thomas King" , occupation: "Property Investment Advisor"},
    {name: "Zoe Gray" , occupation: "Property Investment Analyst"},
    {name: "Samuel Cox" , occupation: "Property Investment Director"},
    {name: "Ella Richardson" , occupation: "Property Investment Manager"},
    {name: "Lucas Turner" , occupation: "Property Investment Executive"},
    {name: "Grace Fisher" , occupation: "Property Investment Coordinator"},
    {name: "Benjamin Hill" , occupation: "Property Investment Analyst"},
    {name: "Emily Bailey" , occupation: "Property Investment Manager"},
    {name: "Joshua Hall" , occupation: "Property Investment Specialist"},
    {name: "Isla Murphy" , occupation: "Property Investment Strategist"},
    {name: "Ava Taylor" , occupation: "Property Investment Consultant"},
    {name: "Oscar Phillips" , occupation: "Property Investment Advisor"},
    {name: "Evie Wright" , occupation: "Property Investment Analyst"},
    {name: "Xavier Walker" , occupation: "Property Investment Director"},
    {name: "Matilda Campbell" , occupation: "Property Investment Manager"},
    {name: "Harrison Evans" , occupation: "Property Investment Executive"},
    {name: "Ruby Bennett" , occupation: "Property Investment Coordinator"},
    {name: "Leo Anderson" , occupation: "Property Investment Analyst"},
    {name: "Olivia Cox" , occupation: "Property Investment Manager"},
    {name: "Ethan Turner" , occupation: "Property Investment Specialist"},
    {name: "Isabella Richardson" , occupation: "Property Investment Strategist"},
    {name: "Jack Fisher" , occupation: "Property Investment Consultant"},
    {name: "Chloe Hill" , occupation: "Property Investment Advisor"},
    {name: "William Bailey" , occupation: "Property Investment Analyst"},
    {name: "Sophie Hall" , occupation: "Property Investment Director"},
    {name: "Thomas Phillips" , occupation: "Property Investment Manager"},
    {name: "Mia Evans" , occupation: "Property Investment Executive"},
    {name: "Noah Walker" , occupation: "Property Investment Coordinator"},
    {name: "Ava Campbell" , occupation: "Property Investment Analyst"},
    {name: "Lucas Murphy" , occupation: "Property Investment Manager"},
    {name: "Grace Taylor" , occupation: "Property Investment Specialist"},
    {name: "Benjamin Turner" , occupation: "Property Investment Strategist"},
    {name: "Emily Anderson" , occupation: "Property Investment Consultant"},
    {name: "Joshua Cox" , occupation: "Property Investment Advisor"},
    {name: "Isla Richardson" , occupation: "Property Investment Analyst"},
    {name: "Ava Bennett" , occupation: "Property Investment Director]"},
];

// Function to randomly pick a character and occupation
function getRandomCharacter(): Character {
    const randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function getRandomCharacters(numChars: number): Character[] {
    const shuffledCharacters = shuffleArray([...characters]) // Assuming characters is your array of available characters
    return shuffledCharacters.slice(0, numChars)
}

function shuffleArray(array: any[]): any[] {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
}

// Function to generate HTML for phone list
function generatePhoneList(): void {
    var phoneList = document.getElementById('phoneList')
    if (phoneList === null) {
        return
    }
    phoneList.innerHTML = ''

    const phoneNumbers = [
        `+61421137167`,
        `+61421137168`,
        `+61421137169`,
        `+61421137170`,
        `+61421137171`,
    ]
    const characters = getRandomCharacters(phoneNumbers.length).map(
        (c) => `${c.name} - ${c.occupation}`,
    )

    function formatPhoneNumber(phoneNumber: string, index: number) {
        const phoneNumberElem = document.createElement('div')
        const a = document.createElement('a')
        a.href = `tel:+${phoneNumber}` // Replace with actual phone numbers
        a.textContent = `${phoneNumber}` // Replace with actual phone numbers


        const infoAndContact = document.createElement('ul')
        const characterElem = document.createElement('li')
        characterElem.textContent = characters[index]

        infoAndContact.append(characterElem)

        phoneNumberElem.appendChild(a)
        phoneNumberElem.appendChild(infoAndContact)
        phoneList.appendChild(phoneNumberElem)
    }

    phoneNumbers.forEach(formatPhoneNumber)
}

// Generate initial phone list when the page loads
window.onload = generatePhoneList
