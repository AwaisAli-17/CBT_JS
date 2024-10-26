import _ from 'lodash';

let myNumbers = [1,2,3,4,5,6];
let myObject = {a:11, b:22, c:33};

// Lodash methods can be used on collections: arrays, objects, sets
//Using array built in method
let doubleNumbers = myNumbers.map(x=>x*2)
console.log(doubleNumbers)

//Using lodash method
let doubleNumbers2 = _.map(myNumbers,x=>x*2)
console.log(doubleNumbers2)

let filter = _.filter(myNumbers,x=>x>2 && x<6)
console.log(filter)

//if _.filter(myNumbers,(x,i)=>x>2 && x<6)
// in (x,i,y)
// First arg is the array value
// Second arg is teh current indexed
// Third arg is array itself


let sum = _.reduce(myNumbers,(acc,x) => acc +x,0)
console.log(sum)

// in case of multi arg in object, first is value and 2nd is key

_.forEach(myObject, (val,key,obj)=> {
    //function
})

console.log(
_.reduce(myObject,(acc,value,key,obj) => acc+value,0))

/**
 * 
 * Advanced Array Functions using Lodash (add,remove, modify,access,compare and combine arrays,regroup elements)
 * 
**/

// Pull, Pull All, Pull All By, Pull All With, Pull At

let numArray = [1,2,3,4,5,6];
let strArray = ['Hi', 'Hello', 'Hey', 'Howdy'];

//remove 2 ,4, 5 (have same index in memory so original array is changed)
_.pull(myNumbers,2,4,5 )
console.log(`Pull 2,4,5: ${myNumbers}`);

console.log(_.filter(_.pull(myNumbers,2,4,5 ), x=>x>3));

//pull all takes array to remove objects
_.pullAll(strArray,['Hi','Hello'])
console.log(strArray);

//pull all by (pull and pull all doenot work for objects)
let people = [{
    id: '123',
    name: 'John Doe',
    age: 45
},{
    id:'456',
    name: 'Sue Lee',
    age: 56
},{
    id:'789',
    name: 'Bob Smith',
    age: 34
},{
    id:'1011',
    name: 'Brenda Garcia',
    age: 66
}];

_.pullAllBy(people,[{name:'John Doe'}],'name');
console.log(people);

//pull all with (gets param and perform any function) 

_.pullAllWith(people,[{name: 'Brenda', id: '345'}],function(a,b){
    return a.name.includes(b.name) || a.id == b.id
});
console.log(people);

//pull at (remove by index)
//Remove value at 1,3
_.pullAt(numArray,[1,3]);
console.log(numArray);

/**
 * 
 * Advanced Array Functions to remove duplucates using Lodash (uniq,sortedUniq)
 * uniq, uniqBy, uniqWith
 * sortedUniq, sortedUniqBy
**/

let numDupArray = [1,1,2,3,3,4,5,6,6];
let strDupArray = ['Hi','Hi', 'Hello', 'Hey', 'Hey','Howdy','Howdy'];
let peopleDupArray = [{
    id: '123',
    name: 'John Doe',
    age: 45
},{
    id:'456',
    name: 'Sue Lee',
    age: 56
},{
    id:'789',
    name: 'Bob Smith',
    age: 34
},{
    id:'1213',
    name: 'Bob Smith',
    age: 22
},{
    id:'1011',
    name: 'Brenda Garcia',
    age: 66
}];

let result = _.uniq(numDupArray);
console.log(result);

result = _.uniqBy(peopleDupArray, 'name');
console.log(result);

result = _.uniqWith(peopleDupArray, (a,b) => {
    return a.name === b.name && a.id === b.id;
});
console.log(result);