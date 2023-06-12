// all of these problems should be solved in recursion

// Finds the product of an array of numbers
function product(num, idx = 0) {
    if(idx === num.length) return 1;
    return num[idx] * product(num, idx +1);
}

// givien a list of words, return the length of the longest:
longest(['hello', 'hi', 'hola']) // 5

function longestWord(words, idx=0, longest=0) {
    if(idx === words.length) return longest;
    longest = Math.max(words[idx].length, longest);
    return longestWord(words, idx +1, longest)
}

// function that returns a string of everyother character.
function everyOther(str, idx=0, newStr = '') {
    if(idx >= str.length) return newStr;
    newStr += str[idx];
    return everyOther(str, idx + 2, newStr);
}

// returns true or false depending on wether passed-in string is a palindrome:
function isPalindrome(str, idx = 0) {
    let leftIdx = idx;
    let rightIdx = str.length - idx - 1;
    if(leftIdx >= rightIdx) return true;
    if(str[leftIdx] !== str[rightIdx]) return false;
    return isPalindrome(str, idx + 1);
}

// given an array and a string return the index of that string in the array(or -1 if not present):
function findIdx(arr, val, idx = 0) {
    if(idx === arr.length) return -1;
    if(arr[idx] === val) return idx;
    return findIdx(arr, val, idx + 1);
}

// return a copy of a string reversed
function reversed(str, idx= 0, newStr = '') {
    if(newStr.length === str.length) return newStr;
    newStr += str[str.length - 1 - idx];
    return reversed(str, idx + 1, newStr);
}

// return an array of all the objects that are strings;
function gatherStrings(obj) {
    let strings = [];

    for(let key in obj) {
        if(typeof obj[key] === 'string') {
            strings.push(obj[key]);
            } else if (typeof obj[key] === 'object') {
                strings = strings.concat(gatherStrings(obj[key]));
            }
        }
        return strings;
    }

// return the index of that value (or -1 if val is not present).

function binarySearch(arr, val, left = 0, right = arr.length) {
    if(left > right) {
        return -1;
    }
    let middle = Math.floor((right + left) /2);
    if(arr[middle] === val) {
        return middle;
    }
    if(arr[middle] > val) {
        return binarySearch(arr, val, left, middle -1);
    }
    return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
    product,
    longestWord,
    everyOther,
    isPalindrome,
    findIdx,
    reversed,
    gatherStrings,
    binarySearch
};