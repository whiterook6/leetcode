const longestCommonPrefix = (inputs) => {
    if (inputs.length === 0){
        return '';
    } else if (inputs.length === 1){
        return inputs[0];
    }

    let prefix = '';
    const minLength = Math.min(...inputs.map(input => input.length));
    for (let i = 0; i < minLength; i++){
        const nextCharacters = inputs.map(input => input[i]);
        for (let j = 0; j < nextCharacters.length - 1; j++){
            if (nextCharacters[j] !== nextCharacters[j + 1]){
                return prefix;
            }
        }
        prefix += nextCharacters[0];
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));