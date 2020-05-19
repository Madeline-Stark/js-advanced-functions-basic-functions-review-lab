// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

//for hoisting to work, has to be declared with function keyword
//the function must be defined as a function declaration.

//function expression is when we store function to a variable

const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(description="special"){
        return `You are ${flair}${description}${flair}!`
    }
}

const Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    }
}

function actionApplyer(startingInteger, funcArray){
    //start at startingint
    //loop over function
    //call function with integer
    let a = startingInteger

    for (let i=0; i < funcArray.length; i++){
        a = funcArray[i](a)
    }

    return a
}