const threeSumClosest = (numbers, target) => {
    let bestSolution = numbers[0] + numbers[1] + numbers[2];
    let bestDistance = Math.abs(bestSolution - target);
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
            if (sum === target){
                return sum;
            }

            const distance = Math.abs(sum - target);
            if (distance < bestDistance){
                bestSolution = sum;
                bestDistance = distance;
            }

            if (sum > target){
                i--;
            } else {
                k++;
            }
        }
    }       

    return bestSolution;
}

const tests = [
    [[-1,2,1,-4], 1, 2],
    [[0,0,0], 1, 0],
    [[0, 1, 2], 3, 3],
    [[1, 1, -1], 1, 1],
    [[0,3,97,102,200], 300, 300]
];

for (const [numbers, target, expected] of tests){
    const result = threeSumClosest(numbers, target);
    if (result === expected){
        console.log('Success');
    } else {
        console.log(`Failure. For ${JSON.stringify(numbers)} and ${target}, expected ${expected}, got ${result}`);
    }
}