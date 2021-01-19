let raceNumber = Math.floor(Math.random() * 1000);
  console.log(raceNumber);
let regEarly = true;
  console.log(regEarly);
let runAge = 18;
  console.log(runAge);

if (regEarly && runAge > 18) {
raceNumber += 1000;
}
  console.log(raceNumber);
if (regEarly && runAge > 18) {
  console.log(`Race number: ${raceNumber}, Start time: 9:30 AM`);
} 
else if(!regEarly && runAge > 18) {
  console.log(`Race number: ${raceNumber}, Start time: 11 AM`);
}
else if(runAge < 18) {
  console.log(`Your start time, as a youth runner, is 12:30 PM. Your race number is ${raceNumber}.`);
}
else {
  console.log('Please go to the registration desk on race day.');
}




