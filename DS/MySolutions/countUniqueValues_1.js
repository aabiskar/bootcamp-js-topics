/** This approach only works with sorted array */
const countUniqueValues = (arr = []) => {
    let firstIdx = 0;
    let secondIdx = 0;
    let unique = []
    while(firstIdx < arr.length){
      if(!unique[secondIdx]){
        unique.push(arr[firstIdx])
      }
  
      if(unique[secondIdx] !== arr[firstIdx]){
        unique.push(arr[firstIdx])
        secondIdx ++
      }
  
      firstIdx++
    }
    console.log(unique)
    console.log(unique.length)
  };
  
  countUniqueValues([1,1,1,2,3,4,5,6,6,6,6,7]);
  