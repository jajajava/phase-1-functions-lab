// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(42 - someValue);
}
distanceFromHqInBlocks(50);



function distancefromHqInFeet(someValue) {
  let blocks = distanceFromHqInBlocks(someValue)
  return 264 * blocks;
}
console.log(distancefromHqInFeet(43));

function distanceTravelledInFeet(start,destination){
  return (Math.abs(start-destination))*264;
}
 distanceTravelledInFeet(5, 1)

function calculatesFarePrice(start,destination){
  let distance = distanceTravelledInFeet(start, destination)
  if(distance < 400){
    return 0
  } else if (distance > 400 && distance < 2000){
    return (distance - 400)*0.02
  } else if (distance > 2000 && distance < 2500){
    return 25
  } else {
    return "cannot travel that far"
  }
}
calculatesFarePrice(15,20)
calculatesFarePrice(0,500)
calculatesFarePrice(0,2200)
calculatesFarePrice(0,2600)