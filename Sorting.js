let number = [0,1,3,50,100,500,7,90]
let string = ['Apple','Hello','Hey','Howdy','Hey']

number.sort()
string.sort()

console.log(number) //sort number in order as sorted alphabets like 0,1,100,3,50,500,7,90
console.log(string)

number.sort(function(a,b){
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    return 0;
})

console.log(number);

//it all depends on returning positive, negative and 0 so we can replace

number.sort((a,b)=> a-b )
console.log(number)

//for descending order
number.sort((a,b)=> b-a )
console.log(number)

//Summarizing

let ascending = (a,b) => a-b;
let descending = (a,b) => b-a;

let numbers2 = [1,7,8,3,50,20,100,500,7,200,90]
numbers2.sort(ascending)
console.log(numbers2)
numbers2.sort(descending)
console.log(numbers2)

/**
 * 
 * Preventing Array Mutation
 * 
 */
let numbers3 = [1,7,8,3,50,20,100,500,7,200,90]
console.log(numbers3.slice().sort(ascending))
console.log(numbers3.slice().sort(descending))
console.log(numbers3)
console.log(numbers3)

/**
 * 
 * Sorting Array of Objects & Arrays
 * 
 */
let people = [{
    firstName: 'Bob',
    lastName: 'Smith',
    age: 45
},{
    firstName: 'Bob',
    lastName: 'Zimmerman',
    age: 47
},{    firstName: 'Bob',
    lastName: 'Smith',
    age: 23
}
,{
    firstName: 'Sue',
    lastName: 'Lee',
    age: 33
},{
    firstName: 'Brenda',
    lastName: 'Garcia',
    age: 33
}];

people.sort(function(a,b){
    let comp1 = a.firstName.localeCompare(b.firstName);
    if(comp1 === 0){
        let comp2 = a.lastName.localeCompare(b.lastName);
        if(comp2 === 0){
            return a.age-b.age;
        }
        return comp2;
    }
})
console.log(people);


people.sort(function(a,b){
    let comp1 = a.firstName.localeCompare(b.firstName);
    if(comp1 === 0){
        let comp2 = a.lastName.localeCompare(b.lastName);
        if(comp2 === 0){
            return a.age-b.age;
        }
        return comp2;
    }
})
console.log(people);

//Sort with age
people.sort(function(a,b){
    let comp1 = a.age - b.age;
    if(comp1 === 0){
        let comp2 = a.firstName.localeCompare(b.firstName);
        if(comp2 === 0){
            return a.firstName.localeCompare(b.firstName);
        }
        return comp2;
    }
    return comp1;
})
console.log(people);

// By default sort by first index of each array
let arrayOfArrays = [[1,2,3],[1],[4,5,6],[8,10],[7,8,9,10,11,12]];
arrayOfArrays.sort()
console.log(arrayOfArrays);

arrayOfArrays.sort((a,b) => a.length - b.length);
console.log(arrayOfArrays);

arrayOfArrays.sort((a,b) => a[0]-b[0]);
console.log(arrayOfArrays);

/**
 * Sort by lodash.
 */


