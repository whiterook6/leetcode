const romanToInt = (roman) => {
    const mapping = {
        'CM': 900,
        'M': 1000,
        'CD': 400,
        'D': 500,
        'XC': 90,
        'C': 100,
        'XL': 40,
        'L': 50,
        'IX': 9,
        'X': 10,
        'IV': 4,
        'V': 5,
        'I': 1,
    };

    let total = 0;
    for (let index = 0; index < roman.length; index++){
        const current = mapping[roman[index]];
        if (index >= roman.length - 1){
            return total + current;
        }

        const next = mapping[roman[index + 1]];
        if (next > current){
            total += (next - current);
            index ++;
        } else {
            total += current;
        }
    }

    return total;
}