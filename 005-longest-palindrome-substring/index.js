const isPalindrome = (asArray, left, right) => {
  if (asArray.length < 2){
    return true;
  }

  while (left < right){
    if (asArray[left] !== asArray[right]){
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const longestPalindrome = (input) => {
  if (input.length < 2){
    return input;
  }

  const asArray = input.split("");
  let testLength = asArray.length; // start with the longest possible palindromes and work shorter
  while (testLength > 0){
    for (let left = asArray.length - testLength; left >= 0; left--){
      const right = left + testLength;
      if (isPalindrome(asArray, left, right)){
        return input.substring(left, left + testLength + 1);
      }
    }
    testLength --;
  }
  return input.substring(0, 1);
};

const cases = {
  "0": "0",
  "1234567654321": ["1234567654321"],
  "1234567876543212345": ["123456787654321"],
  "ababa": ["ababa"],
  "ac": ["a", "c"],
  "abb": ["bb"],
  "ababb": ["bab"],
  "anotherreht": ["therreht"],
}

for (const [input, expected] of Object.entries(cases)){
  const palindrome = longestPalindrome(input);
  if (expected.includes(palindrome)){
    console.log(`✓ ${input} => ${palindrome}`);
  } else {
    console.log(`✗ ${input} => expected one of ${expected.join(", ")}, got ${palindrome}`);
  }
}