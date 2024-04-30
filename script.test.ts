import { getRandomCharacter } from './script';

describe('getRandomCharacter', () => {
    it('should return a random character', () => {
        // Define a mock list of characters for testing
        const mockCharacters = [
            { name: 'Mock Character 1', occupation: 'Mock Occupation 1' },
            { name: 'Mock Character 2', occupation: 'Mock Occupation 2' },
            { name: 'Mock Character 3', occupation: 'Mock Occupation 3' },
        ];

        // Call the getRandomCharacter function
        const result = getRandomCharacter(mockCharacters);

        // Assert that the result is one of the mock characters
        expect(mockCharacters).toContain(result);
    });
});
