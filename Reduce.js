// Sum of array
let array = [1,2,3,4,5,6,7,8];
let sum = array.reduce((acc,x)=>{
    return acc += x
},0)

console.log(`Sum is: ${sum}`);

//-----------------------------------//

let numbers = [1,2,3,4,5,6,7];
let numbersAndStrings = ['a',1,'b',2,'c',3];
let strings = ['Hello', 'my', 'name', 'is', 'Awais'];
let objects = [
    {
        name: 'James',
        age: 25
    },
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Mike',
        age: 28
    }
];

let multiArray = [[1,2,3],['Hi','Hello','Bye'],[true, false, true]]

// join numbers to string

let numToString = numbers.reduce((acc,x)=>{
    return acc = acc + x
},'')
console.log(`Number array concatenated as string: ${numToString}`);

// join string array for senetence

let sentence = strings.reduce((acc,x)=>{
    return acc = acc + '-' + x
});
console.log(`String array concatenated for sentence: ${sentence}`);

// length of string

let length = strings.reduce((acc,x)=>{
    return acc = acc + x.length;
},0)
console.log(`Length of sentence: ${length}`);

// convert array to object

console.log(numbersAndStrings.reduce((acc,x)=>{
    if(typeof x === 'string'){
        return{
            ...acc,
            [x] : numbersAndStrings[numbersAndStrings.indexOf(x)+1]
        }
    }
    return acc;
},{}))

// transpose of multi array

let updated = multiArray.reduce((acc,x)=>{
    return[
        [...acc[0],x[0]],
        [...acc[1],x[1]],
        [...acc[2],x[2]],
    ]
},[[],[],[]])
console.log(updated);

//create index and search objects by name

let xyz = objects.reduce((acc,x)=>{
    return{
        ...acc,
        [x.name] : x
    }
},[])
console.log(xyz)
