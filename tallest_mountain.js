(function(){
  var myArray = [12200, 9750, 14400, 11666];
  var tallest = Math.max.apply(null, myArray);
  // myArray.sort();
  console.log(myArray);
  console.log("The tallest mountain height is: " + tallest);
})()
