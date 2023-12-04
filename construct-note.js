// add whatever parameters you deem necessary
function constructNote(message, letters) {
    let letterFreq = new Map();

    for(let letter of letters) {
        letterFreq.set(letter, (letterFreq.get(letter) || 0) + 1);
    }

    for (let char of message) {
        if (letterFreq.has(char) && letterFreq.get(char) > 0) {
            letterFreq.set(char, letterFreq.get(char)-1);
        } else {
            return false;
        }
    }

    return true;
}
