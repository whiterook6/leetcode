const intToRoman = (number) => { // 1 <= number <= 3999
    if (number < 1 || number > 3999){
        return '';
    }

    const labels = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    for (const [value, label] of labels){
        if (number >= value){
            return label + intToRoman(number - value);
        }
    }

    return '';
}