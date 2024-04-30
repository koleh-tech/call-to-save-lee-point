import { Character, characters } from "./names"

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
        (c) => `, ${c.name} - ${c.occupation}`,
    )

    function formatPhoneNumber(phoneNumber: string, index: number) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        const span = document.createElement('span')
        const div = document.createElement('div')

        a.href = `tel:+${phoneNumber}` // Replace with actual phone numbers
        a.textContent = `${phoneNumber}` // Replace with actual phone numbers
        span.textContent = characters[index]

        div.appendChild(a)
        div.appendChild(span)
        li.appendChild(div)
        phoneList.appendChild(li)
    }

    phoneNumbers.forEach(formatPhoneNumber)
}

// Generate initial phone list when the page loads
window.onload = generatePhoneList
