// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

const mondayWork = function(activity) {
    if (activity === undefined) {
        return "This Monday, I will go to the office.";
      } else {
        return `This Monday, I will ${activity}.`;
      }
    }


function hoistingFun(){
   return console.log("this is hoisting function");
}

(function () {
     console.log("Yet more razzling");
  });

  function wrapAdjective(outerSymbol) {
    return function(adjective) {
      return `You are ${outerSymbol}${adjective}${outerSymbol}!`;
    };
  }
