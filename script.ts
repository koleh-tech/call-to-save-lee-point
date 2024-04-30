// Define types for character and occupation
type Character = {
    name: string
    occupation: string
}

function readCharactersFromFile(filePath: string="names.json"): Character[] {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData) as Character[];
}

const characters: Character[] = readCharactersFromFile()

/*
Cooper Smith - Property Developer
Ruby Clarke - Real Estate Agent
Jack Thompson - Property Investor
Isla Harris - Property Manager
Oliver Brown - Investment Analyst
Mia Williams - Rental Property Manager
Noah Taylor - Landlord
Ava Robinson - Mortgage Broker
Lucas Mitchell - Property Appraiser
Charlotte Davis - Property Consultant
Lachlan Wilson - Real Estate Developer
Emily Walker - Property Strategist
Joshua Baker - Property Analyst
Sophie Carter - Rental Property Agent
Benjamin Foster - Land Developer
Isabella Evans - Property Management Specialist
William Murphy - Commercial Property Investor
Chloe White - Property Portfolio Manager
Thomas Martin - Investment Property Advisor
Grace Turner - Property Valuer
Henry Phillips - Property Investment Consultant
Amelia Harris - Real Estate Broker
Ethan Scott - Residential Property Developer
Lily Green - Property Investment Manager
Jacob Cook - Property Investment Specialist
Ruby King - Property Acquisition Manager
Samuel Lee - Property Investment Analyst
Zoe Baker - Rental Property Investor
Alexander Stewart - Property Investment Strategist
Mia Thompson - Property Investment Advisor
Noah Harris - Property Investment Consultant
Ava Campbell - Property Investment Broker
Lucas Anderson - Property Investment Planner
Ella Mitchell - Property Investment Coach
Oscar Wright - Property Investment Executive
Sophia Hughes - Property Investment Director
Charlie Bennett - Property Investment Coordinator
Matilda Turner - Property Investment Analyst
Harrison Ward - Property Investment Manager
Evie Harris - Property Investment Specialist
Xavier Brown - Property Investment Strategist
Ruby Wilson - Property Investment Consultant
Leo Taylor - Property Investment Advisor
Olivia Hall - Property Investment Analyst
Ethan Clark - Property Investment Director
Isla Bell - Property Investment Manager
Noah Gray - Property Investment Executive
Grace Richardson - Property Investment Coordinator
Max Cox - Property Investment Analyst
Amelia Fisher - Property Investment Manager
Jack Hughes - Property Investment Specialist
Mia Hill - Property Investment Strategist
William Bailey - Property Investment Consultant
Chloe Turner - Property Investment Advisor
Oliver Wright - Property Investment Analyst
Isabella Walker - Property Investment Director
Charlie Murphy - Property Investment Manager
Ava Harrison - Property Investment Executive
Jacob Martin - Property Investment Coordinator
Ruby Evans - Property Investment Analyst
Noah Phillips - Property Investment Manager
Sophie Bennett - Property Investment Specialist
Henry Campbell - Property Investment Strategist
Lily Anderson - Property Investment Consultant
Thomas King - Property Investment Advisor
Zoe Gray - Property Investment Analyst
Samuel Cox - Property Investment Director
Ella Richardson - Property Investment Manager
Lucas Turner - Property Investment Executive
Grace Fisher - Property Investment Coordinator
Benjamin Hill - Property Investment Analyst
Emily Bailey - Property Investment Manager
Joshua Hall - Property Investment Specialist
Isla Murphy - Property Investment Strategist
Ava Taylor - Property Investment Consultant
Oscar Phillips - Property Investment Advisor
Evie Wright - Property Investment Analyst
Xavier Walker - Property Investment Director
Matilda Campbell - Property Investment Manager
Harrison Evans - Property Investment Executive
Ruby Bennett - Property Investment Coordinator
Leo Anderson - Property Investment Analyst
Olivia Cox - Property Investment Manager
Ethan Turner - Property Investment Specialist
Isabella Richardson - Property Investment Strategist
Jack Fisher - Property Investment Consultant
Chloe Hill - Property Investment Advisor
William Bailey - Property Investment Analyst
Sophie Hall - Property Investment Director
Thomas Phillips - Property Investment Manager
Mia Evans - Property Investment Executive
Noah Walker - Property Investment Coordinator
Ava Campbell - Property Investment Analyst
Lucas Murphy - Property Investment Manager
Grace Taylor - Property Investment Specialist
Benjamin Turner - Property Investment Strategist
Emily Anderson - Property Investment Consultant
Joshua Cox - Property Investment Advisor
Isla Richardson - Property Investment Analyst
Ava Bennett - Property Investment Director
*/

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
