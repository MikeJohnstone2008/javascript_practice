//Cherokee hare
(function(){

  let startingPopulation = 200
  let birthRate = 0.1
  let numberOfWeeks = 5
  let totalPopulation = 0
  let weekNumber = 1
  let weeklyIncrease = 0
  //some comments
    for(i = 0; i <= numberOfWeeks; i++){
    weeklyIncrease = (startingPopulation * birthRate)
    startingPopulation =  startingPopulation + weeklyIncrease
    weekNumber++
    }
  console.log(totalPopulation)

})() //closing bracket for Self-invoking function
