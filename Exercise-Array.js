/**
 * 
 * Calculate Array Min and Maz 
 * 
**/

let arr = [1,5,8,3,25,13,45,-19,-64,78,24,2,56,89,1,0]
let max = arr[0]
let min = arr[0]

/* Using foor loop */
for(let i = 0; i<arr.length;i++){
    max = arr[i]>max ? arr[i] : max
    min = arr[i]>min ? min : arr[i]
}
let approach1 = {min,max}
console.log(approach1)

max = arr[0]
min = arr[0]
//another loop approach
for(x of arr.slice(1)){
    max = x > max ? x : max
    min = x > min ? min : x
}
let approach2 = {min,max}
console.log(approach2)

/* Using foor each loop */

max = arr[0]
min = arr[0]
arr.forEach(x => {
    max = x > max ? x : max
    min = x > min ? min : x
})
let approach3 = {min,max}
console.log(approach3)

max = arr[0]
min = arr[0]
arr.slice(1).forEach(x => {
    max = x > max ? x : max
    min = x > min ? min : x
})
let approach4 = {min,max}
console.log(approach4)


let approach5 = arr.reduce((acc,x)=>{
 return{
    max: x > max ? x : max,
    min: x > min ? min : x
 }
},{max:arr[0],min:arr[0]})
console.log(approach5)

/**
 * 
 * Recreate Built in method with Reduce
 * 
*/

// Use reduce function to mimic map.
let arr1 = [1,2,3,4,5,6,7]
let arr2 = ['Hi', 'Hello', 'Hey']

//reduce func to map arr1 to double numbers

let doubled = arr1.reduce((acc,x)=>
    [...acc,x*x]
,[])
console.log(`Doubled: ${doubled} `)

//reduce func to map arr2 to upper case
let upper = arr2.reduce((acc,x)=> 
    [...acc,x.toUpperCase()]
,[])
console.log(`Upper: ${upper} `)

//reduce func to filter arr1 to even num
let even = arr1.reduce((acc,x)=>
    x%2===0 ? [...acc,x] : [...acc]
,[])
console.log(`Even: ${even} `)

//reduce func to filter arr2 to strings having longer than 2 chars
let longer = arr2.reduce((acc,x)=>
    x.length>2 ? [...acc,x] : [...acc]
,[])
console.log(`String longer than 2 char: ${longer}`)

//every: check if all number are even
let ifEveryEven = arr1.reduce((acc,x)=>
    x%2 === 0 && acc 
,true)
console.log(`If every num Even: ${ifEveryEven}`)

//some: check if any string have more than 2 char
let moreThanTwo = arr2.reduce((acc,x)=>
    x.length>2 || acc
,false)
console.log(`If every num Even: ${moreThanTwo}`)

/**
 * 
 * Remove Duplicates
 * 
*/
let arr3 = [1,1,2,3,3,100,3,7,-4]
let arr4 = ['Hi','Hello','Hi','Hey','Hi']
let removedDup = []
// approach using for
for(let i = 0; i<arr3.length; i++){
    if(!removedDup.includes(arr3[i])){
        removedDup.push(arr3[i])
    }
}
console.log(removedDup)
removedDup = []

// approach using for each
arr3.forEach(x=>{
    if(!removedDup.includes(x)){
        removedDup.push(x)
    }
})
console.log(removedDup)

// approach using reduce
let result = arr3.reduce((acc,x)=> 
    !acc.includes(x) ? [...acc,x] : [...acc],[])
console.log(result)

