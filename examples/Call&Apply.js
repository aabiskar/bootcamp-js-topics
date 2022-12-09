const array1 = [1,2,3];
const array2 = [1,2,4];
 
function getMaxNumber(arr){
    console.log(Math.max.apply(null, arr))
}
 
getMaxNumber.call({}, array1)
getMaxNumber.apply({}, [array2]) // should return 3
 // should return 3