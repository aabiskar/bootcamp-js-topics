/** Valid Parentheses */

/* Solution 1 **/

var isValid = function (s) {
    if (s.length % 2 !== 0) {
        console.log(false)
        return false
    }
    let map = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    let value = Object.values(s)
    for (let i = 0; i < value.length; i++) {
        for (let j = 1; j < value.length; j++) {
            if (map[value[i]] == value[j]) {
                value.splice(j, 1)
                value.splice(i, 1)
                i = -1
                j = 1
                break;
            }
        }
    }
    if (value.length == 0) {
        console.log(true)
        return true
    } else {
        console.log(false);
        return false
    }
};

isValid('{{]}')