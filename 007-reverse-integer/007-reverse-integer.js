const reverse = (x) => {
  const xString = `${x}`.replace("-", "");
  if (xString.length > 10){
    return 0;
  }

  const reversed = xString.split("").reverse().join("");
  const reversedAsNumber = Number(reversed);
  if (reversedAsNumber > 4294967295){
    return 0;
  }
  if (x < 0){
    return -reversedAsNumber;
  } else {
    return reversedAsNumber;
  }
};

const testCases = [
  [123, 321],
  [-123, -321],
  [0, 0],
  [9, 9],
  [120, 21]
];

const runTests = () => {
  for (const [input, expected] of testCases){
    const actual = reverse(input);
    if (expected === actual){
      console.log(`✓ ${input} => ${expected}`);
    } else {
      console.log(`✗ ${input} => expected: ${expected}, actual: ${actual}`);
    }
  }
}

runTests();