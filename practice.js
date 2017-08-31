(function(){
  let myArray = [12200, 9750, 14400, 11666]
//the max function returns a number that is stored in a var:
  let tallestMountain = Math.max.apply(null, myArray)

  console.log(myArray)
//take highest mountain and insert it into a message in the console:
console.log("The highest mountain is " + tallestMountain + " feet tall");

})()//closing function tags: Self-invoking function.
