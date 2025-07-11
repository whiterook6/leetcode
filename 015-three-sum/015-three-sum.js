const threeSum = (numbers) => {
    const validSolutions = [];
    const validKeys = new Set();
    const sortedNumbers = [...numbers];
    sortedNumbers.sort((a, b) => a - b);

    for (let j = 1; j < sortedNumbers.length - 1; j++){ // control the middle pointer J
        let i = j - 1;
        let k = j + 1;

        while (i >= 0 && k < sortedNumbers.length){
            const numberI = sortedNumbers[i];
            const numberJ = sortedNumbers[j];
            const numberK = sortedNumbers[k];
            const sum = numberI + numberJ + numberK;
            if (sum === 0){
                const triplet = [numberI, numberJ, numberK];
                const key = triplet.join("-");
                if (!validKeys.has(key)){
                    validSolutions.push(triplet);
                    validKeys.add(key);
                }

                i--;
                k++;
            } else if (sum > 0){
                i--;
            } else if (sum < 0){
                k++;
            }
        }
    }       

    return validSolutions;
}

console.log(threeSum([-1,0,1,2,-1,-4]))