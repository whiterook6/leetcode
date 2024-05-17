/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2){
        return s.length;
    }

    let longestSubstring = s.substring(0, 1);
    const uniqueCharacters = new Set();

    const characters = s.split("");
    for (let left = 0; left <= characters.length - longestSubstring.length; left++){
        const leftCharacter = characters[left];
        uniqueCharacters.clear();
        uniqueCharacters.add(leftCharacter);

        for (let right = left + 1; right < characters.length; right++){
            const rightCharacter = characters[right];
            if (uniqueCharacters.has(rightCharacter)){
                break;
            }

            uniqueCharacters.add(rightCharacter);
            if (right - left >= longestSubstring.length){
                longestSubstring = characters.slice(left, right + 1).join("");
            }
        }
    }

    return longestSubstring;
};

console.log("abcdefg".substring(2, 5));
console.log(`${lengthOfLongestSubstring("abcabcbb")} === 3`);
console.log(`${lengthOfLongestSubstring("bbbbbb")} === 1`);
console.log(`${lengthOfLongestSubstring("pwwkew")} === 3`);
console.log(`${lengthOfLongestSubstring("Given a string s, find the length of the longest substring without repeating characters.")} === ?`);