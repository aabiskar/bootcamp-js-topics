/** The rest parameter syntax allows a function to accept an indefinite number of arguments as an array */

function add(...myArgs){
    let num =  myArgs.reduce((previous, current) => {
        return previous + current;
      });

      console.log(num)
}


add(1,2,3,4,5,6)