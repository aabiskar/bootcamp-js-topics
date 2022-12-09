/** find the longest common prefix for an array of strings */

var longestCommonPrefix = function(arr) {
    if(arr.length === 0) return "";
    let sortedArr = arr.sort((a,b)=>a.length-b.length)
    console.log(sortedArr)

    let prefix = sortedArr[0]

    while(!sortedArr.every((el)=>el.startsWith(prefix))){
        prefix = prefix.slice(0,-1);
    }

    console.log(prefix)

};

longestCommonPrefix(["flower","flow","flight"])