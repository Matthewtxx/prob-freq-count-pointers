// add whatever parameters you deem necessary
function longestFall(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let longest = 1;
    let current = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            current++;
        } else {
            current = 1;
        }

        longest = Math.max(longest, current);
    }

    return longest;
}
