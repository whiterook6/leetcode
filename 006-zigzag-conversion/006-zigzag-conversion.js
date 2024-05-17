const everyNth = (inputString, start, left, right = left) => {
  let output = "";
  let i = start;
  while (i < inputString.length){
    output += inputString.charAt(i);
    i+=left;
    if (i < inputString.length){
      output += inputString.charAt(i);
      i+=right;
    }
  }
  
  return output;
}

const convert = (inputString, rowCount) => {
  if (inputString.length < 2){
    return inputString;
  } else if (inputString.length < rowCount){
    return inputString;
  } else if (rowCount === 1){
    return inputString;
  }

  const rows = [];
  const topRowGap = (rowCount - 1) * 2;

  for (let row = 0; row < rowCount; row++){
    const start = row;
    const right = row * 2;
    const left = topRowGap - right;
    if (row === 0 || row === rowCount - 1){
      rows.push(everyNth(inputString, start, topRowGap));
    } else {
      rows.push(everyNth(inputString, start, left, right));
    }
  }
  return rows.join("");
};

const testCases = [
  ["PAYPALISHIRING", 3, ["PAHNAPLSIIGYIR"]],
  ["PAYPALISHIRING", 1, ["PAYPALISHIRING"]],
  ["PAYPALISHIRING", 4, ["PINALSIGYAHRPI"]],
  ["A", 1, ["A"]],
  ["ABC", 100, ["ABC"]]
];
const test = () => {
  for (const [inputString, rowCount, expected] of testCases){
    const actual = convert(inputString, rowCount);
    if (expected.includes(actual)){
      console.log(`✓ ${inputString}, ${rowCount} => ${expected}`);
    } else {
      console.log(`✗ ${inputString}, ${rowCount} => expected: ${expected}, actual: ${actual}`);
    }
  }
}
test();