/** Time complexity O(n) */
const MatchingSquares = (aFirst, aSecond) => {
    try {
      if (aFirst.length !== aSecond.length) {
        console.log(false)
        return false;
      }
  
      let aFrequencyCounter1 = {};
      let aFrequencyCounter2 = {};
      for (let d of aFirst) aFrequencyCounter1[d] = (aFrequencyCounter1[d] || 0) + 1;
      for (let d of aSecond) aFrequencyCounter2[d] = (aFrequencyCounter2[d] || 0) + 1;
  
      for(let d of aFirst){
        if (!(d ** 2 in aFrequencyCounter2)) {
          console.log(false);
          return false;
        }
        if (aFrequencyCounter1[d] !== aFrequencyCounter2[d ** 2]) {
          console.log(false);
          return false;
        }
      };
      console.log(true)
      return true;
    } catch (error) {
      console.log(error);
    }
  };
  
  MatchingSquares([1, 2, 4, 4], [4, 16, 15, 1]);
  