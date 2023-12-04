// add whatever parameters you deem necessary
function countPairs(arr, targetSum) {
    let count = 0;
    const visitedNumbers = new Set();

    for (let num of arr) {
        const complement = targetSum - num;

        if (visitedNumbers.has(complement)) {
            count++;
        }

        visitedNumbers.add(num);
    }

    return count;
}
