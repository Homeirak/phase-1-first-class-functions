//Callback Function Practice
// function iReturnThings (thing) {
//     return thing;
//   }
// console.log(iReturnThings(function () { return 4 + 5; }));

// function greet (name, cb) {
//   return cb(name);
// }
// console.log(greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; }));

// function doMath(num1,num2, cb){
//   return cb(num1, num2);
// }
// console.log(doMath(2, 8, function (num1, num2){return num1*num2}));
//----------------------------------------------------------------------------------------------------

//Helper Functions to make code cleaner
// function runFiveMiles(){
//   console.log("Go for a five-mile run");
// }

// function liftWeights(){
//   console.log("Pump iron");
// }

// function swimFortyLaps(){
//   console.log("Swim 40 laps");
// }

// function whatDay(day){
//   console.log(day);
// }
// function exerciseRoutine(postRunActivity){
//   runFiveMiles();
//   postRunActivity();
// }


// //Mon-Fri functions
// //Previous function:
// // function Monday(){
// //   console.log(runFiveMiles());
// //   console.log(liftWeights());
// // }
// function Monday(){
//   whatDay("Monday");
//   exerciseRoutine(liftWeights);
// }
// Monday();
// //exerciseRoutine(liftWeights);

// function Tuesday(){
//   whatDay("\nTuesday");
//   exerciseRoutine(swimFortyLaps)
// }
// Tuesday();

// function Wednesday(){
//   whatDay("\nWednesday");
//   exerciseRoutine(runFiveMiles);
// }
// Wednesday();

// function Thursday(){
//   whatDay("\nThursday");
//   exerciseRoutine(liftWeights);
// }
// Thursday();

// function Friday(){
//   whatDay("\nFriday");
//   exerciseRoutine(swimFortyLaps);
//   console.log("\n");
// }
// Friday();

// exerciseRoutine(function (){
//   console.log("Stretch! Work that core!\n");
// })

//We can rewrite this to be more concise by using an arrow function:
// exerciseRoutine(() => console.log("Stretch! Work that core!\n"));

// function morningRoutine(exercise){
//   let breakfast;

//   if (exercise === liftWeights){
//     breakfast = "protein bar";
//   }else if (exercise === swimFortyLaps){
//     breakfast = "kale smoothie";
//   }else{
//     breakfast = "granola";
//   }
//   exerciseRoutine(exercise);

//   console.log(`Nom, nom, nom, this ${breakfast} is delicious!`);
// }

// let exercise = swimFortyLaps;
// const afterExercise = morningRoutine(swimFortyLaps);

// console.log(morningRoutine(swimFortyLaps));

//LAB ASSIGNMENT

function callback(){
    console.log("The callback function has been invoked.");
  }
  
  function receivesAFunction(cb){
    cb();
  }
  console.log(receivesAFunction(callback));
  
  function namedFunction(){
    console.log("The named function has been invoked");
  }
  
  function returnsANamedFunction(){
    return namedFunction;
  }
  
  console.log(returnsANamedFunction);
  
  function returnsAnAnonymousFunction(){
    return function () { "The anonymous function has been invoked";}
  }
  