/** Return the N numbers of largest element in an unsorted array 
 * without changing the order of the elements inside the array 
 * 
 * eg: if the array = [2,1,4,76,32] and N = 3
 * result should be ==> [4,76,32]
 * */

 function findNLargestElements(arr, n) {
    let newArr = [...arr].sort((a, b) => a > b ? 1 : -1).slice(arr.length - n, arr.length);
    let result = []
    for (let i = 0; i < arr.length; i++) if(newArr.includes(arr[i])) result.push(arr[i])
    console.log(result)
}

findNLargestElements([2,1,4,76,32], 3)