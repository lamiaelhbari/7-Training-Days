// Challenge : Training Days ------------>

// The scope of `random` is too loose

const random = Math.floor(Math.random() * 3);
/* 5- The 'randomVariable' is defined in the global scope. 
Whenever 'getRandEvent()' is called, it uses the same value */

const getRandEvent = () => {
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  if (event === "Marathon") {
    let days = 50; // 1- error 1 ------------------>
  } else if (event === "Triathlon") {
    //2- error 2 remove the 'let' characters in the 'if/else if' statements ---->
    let days = 100;
  } else if (event === "Pentathlon") {
    let days = 200;
  }

  return days;
};

// The scope of `name` is too tight

/* 3- error 3 The log functions - logEvent() and logTime() - use the same 'name' variable . 
Let's avoid this repetition by adding 'name' as the first parameter for each function */

// 4- error 4  // Move the 'name' variable to global scope :
const logEvent = (event) => {
  const name = "Nala";
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days) => {
  const name = "Nala";
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent(event);
logTime(days);

// -----Refer to CorrectionTrainingDay.js for the solution  -------->
