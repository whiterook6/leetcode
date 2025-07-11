const mappings = [
    [' '],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
]; // mappings[3] = d, e, f

const letterCombinations = (digits) => {
    combinations = [];

    if (digits.length < 1){
        return combinations;
    }
    
    const key = parseInt(digits[digits.length - 1], 10); // 2456 => 6 (m, n, 0)
    if (digits.length === 1){
        return mappings[key];
    }

    const remainder = digits.substr(0, digits.length - 1); // 2456 => 245
    const remainderOptions = letterCombinations(remainder); // [ace, acf, acd, ...]
    return mappings[key].flatMap(character => { // m, n, o
        return remainderOptions.map(result => { 
            return `${result}${character}`;
        });
    });
}

console.log(`9 => ${JSON.stringify(letterCombinations('9'))}`);



