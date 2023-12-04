// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        if (arr[right] > 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
    }
}
