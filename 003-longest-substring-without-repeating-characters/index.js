/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(inputString) {
    if (inputString.length < 2){
        return inputString;
    }

    let longestSubstring = inputString.substring(0, 1);
    let longestSubstringLength = 1;
    const uniqueCharacters = new Set();

    const characters = inputString.split("");
    for (let left = 0; left < characters.length - longestSubstringLength; left++){
        const leftCharacter = characters[left];
        uniqueCharacters.clear();
        uniqueCharacters.add(leftCharacter);

        for (let right = left + 1; right < characters.length; right++){
            const rightCharacter = characters[right];
            if (uniqueCharacters.has(rightCharacter)){
                break;
            }

            uniqueCharacters.add(rightCharacter);
            if (right - left > longestSubstringLength){
                longestSubstring = characters.slice(left, right + 1).join("");
                longestSubstringLength = right - left;
            }
        }
    }

    return longestSubstring;
};
console.log(lengthOfLongestSubstring("another one bites the dust"));
console.log(lengthOfLongestSubstring("Longest Substring Without Repeating Characters"));
console.log(lengthOfLongestSubstring("Given a string s, find the length of the longest substring without repeating characters."));