// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) {
        return false;
    }

    const frequency1 = {};
    const frequency2 = {};

    for (let digit of strNum1) {
        frequency1[digit] = (frequency1[digit] || 0) + 1;
    }

    for (let digit of strNum2) {
        frequency2[digit] = (frequency2[digit] || 0) + 1;
    }

    for (let key in frequency1) {
        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }

    return true;
}
