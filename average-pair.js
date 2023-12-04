// add whatever parameters you deem necessary
function averagePair(arr, target) {
    if(arr.length === 0) {
        return false;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentAvg = (arr[left] + arr[right]) / 2;

        if (currentAvg = target) {
            return true;
        } else if (currentAvg < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}
