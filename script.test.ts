import { getNumberListItem, getRandomCharacter } from './script'

describe('getRandomCharacter', () => {
    it('should return a random character', () => {
        // Define a mock list of characters for testing
        const mockCharacters = [
            { name: 'Mock Character 1', occupation: 'Mock Occupation 1' },
            { name: 'Mock Character 2', occupation: 'Mock Occupation 2' },
            { name: 'Mock Character 3', occupation: 'Mock Occupation 3' },
        ]

        // Call the getRandomCharacter function
        const result = getRandomCharacter(mockCharacters)

        // Assert that the result is one of the mock characters
        expect(mockCharacters).toContain(result)
    })
})

describe('getNumberListItem', () => {
    it('should return phonenumber + character', () => {
        // Define a mock list of characters for testing
        const mockCharacters = [
            { name: 'Mock Character 1', occupation: 'Mock Occupation 1' },
            { name: 'Mock Character 2', occupation: 'Mock Occupation 2' },
            { name: 'Mock Character 3', occupation: 'Mock Occupation 3' },
        ]

        const result = getNumberListItem(
            '0421 137 167',
            () => mockCharacters[0],
        )

        expect(result).toContain('0421 137 167 - ')
        // expect(result).toBe("0421 137 167 - Mock Character 1, Mock Occupation 1");
    })
})
