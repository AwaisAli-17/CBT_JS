function myFunction(a,b){
    return a+b;
}

let func1 = function(a,b){
    return a+b;
}

let func2 = (a,b) =>{
    return a+b;
}


// If function have 5 parameters in declaration and we pass 4 params then error: NAN

function sum(a,b,c,d,e){
    return a+b+c+d+e;
}

console.log(sum(1,2,3,4));

// If function have 5 parameters in declaration and we pass 6 params then last param will be ignored

console.log(sum(1,2,3,4,5,6));

// arguments key prints the args in array like object. it takes the arg passed not the one declared.

function printArgs(){
    console.log(arguments);
}
printArgs(1,2,3,4,5);

function printArgsAll(...numbers){
    console.log(numbers);
}
printArgsAll(1,2,3,4,5);

// to gice default value to an argument
function defaultFunc(numberToAdd = 1){
    console.log(numberToAdd)
}
defaultFunc()