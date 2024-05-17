function findMedianSortedArrays(left, right) {
    const totalLength = left.length + right.length;
    let leftIndex = 0, rightIndex = 0;
    let previous = 0, current = 0;
    const isEven = (totalLength % 2 === 0);

    const targetCount = isEven ? (left.length + right.length) / 2 + 1 : (left.length + right.length + 1) / 2;

    for (let i = 0; i < targetCount; i++){
        if (leftIndex >= left.length){
            previous = current;
            current = right[rightIndex++];
        } else if (rightIndex >= right.length){
            previous = current;
            current = left[leftIndex++];
        } else if (left[leftIndex] < right[rightIndex]){
            previous = current;
            current = left[leftIndex++];
        } else {
            previous = current;
            current = right[rightIndex++];
        }
    }

    if (isEven){
        return (current + previous) / 2;
    } else {
        return current;
    }
};

console.log(findMedianSortedArrays([
    1, 3
], [
    2
])); // [1, 2, 3, ] -> 2
