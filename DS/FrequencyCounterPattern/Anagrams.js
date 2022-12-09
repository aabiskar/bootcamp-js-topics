
   
/** Anagrams with O(n) space complexity 
 * The comparison is case sensitive i.e. (h !== H) 
*/
const anagrams = (first, second) => {
  if(first.length !== second.length){
    console.log(false)
    return false
  }

  if (first === second) {
    console.log(true);
    return true;
  }

  let lookup = {};
  for(let letter of first){
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for(let letter of second ){
    if(!lookup[letter]){
      console.log(false)
      return false
    }else{
      lookup[letter] -= 1
    }
  }
  console.log(true)
  return true 
};

anagrams("hello", "ehllo");
