/**
 * ----------Arrays----------
 * 
 * ... is known as spread operator.
 * used for Copying Array, Combining Array, ARGS as Array and Array Sum
 * 
 * 
 * let arr1 = [1,2,3];
 * let arr2 = [4,5,6];
 * 
 * console.log(arr1.concat(arr2)) :: [1,2,3,4,5,6]
 * console.log(...arr1,...arr2) :: [1,2,3,4,5,6]
 * console.log(...arr1,100,200...arr2) :: [1,2,3,100,200,4,5,6]
 * console.log(arr1,arr2) :: [[1,2,3],[4,5,6]]
 * let arr1Copy = [...arr1];
 * 
 * function add(...numbers){ //numbers is now the array of arguments
 *   let sum = 0;
 *   for(let x of numbers){
 *    sum += x
 *   }
 *   return sum;
 * }
 * 
 * console.log(add(1,2)) :: 3
 * console.log(add(1,2,3)) :: 6
 * console.log(add(1,2,3,4,5,6,7)) :: 28
 * 
 * function add(x,y,z){
 *  return x+y+z;
 * }
 * 
 * console.log(add(arr1)) :: 1,2,3,undefined,undefined
 * 
 * console.log(add(...arr1)) :: 6
 * 
 * ----------Equality and Pass By Reference----------
 *  
 * ==== doesnot work for arrays untill they have same reference
 * 
 * let arr1 = [1,2,3]
 * let arr2 = [1,2,3]
 * let arr3 = arr1
 * console.log(arr1 === arr2) :: false
 * console.log(arr1 === arr3) :: true
 * 
 * const arr1 = [1,2,3]
 * arr1 = [4,5,6] :: ERROR
 * arr1[2] = "Hello" :: OK
 * arr1.push(4) :: OK
 * 
 * ----------Array Methods----------
 * - fill
 * Declare an empty of array of any size
 * let arr1 = new Array(5)
 * arr1.fill(0) :: [0,0,0,0,0]
 * arr1.fill("Hi")) :: ['Hi','Hi','Hi','Hi','Hi']
 * let arr2 = new Array(3).fill(new Array(2).fill(0)) ::[[0,0],[0,0],[0,0]] 
 * 
 * - shift
 * Delete First Element of an Array 
 * let arr1 = [1,2,3,4,5]
 * let arr2 = arr1.shift()
 * :: arr2 = 1 ; arr1 = [2,3,4,5]; length = 4
 * 
 * -inshift
 * Add element to start of array
 * let arr1 = [1,2,3,4,5]
 * let arr2 = arr1.unshift(0)
 * arr1 = [0,1,2,3,4,5]; length = 6
 * 
 * //need to be carefull with references
 * arr1.fill({})
 * arr[0].a = 'Hi'; [{a:Hi},{a:Hi},{a:Hi},{a:Hi},{a:Hi}] //because of same reference of object when .fill({}) 
 *                                                         was called & is same for array bcz it doesnot create multiple object
 *                                                         but only one object with multiple references 
 * 
 * - splice(arg1,arg2,arg3(optional))
 * arg1 = start index
 * arg2 = num of arg to delete
 * arg3 = items to add
 * 
 * Delete arg2 number of elements starting from arg1;
 * let arr1 = [0,1,2,3,4,5,6,7]
 * arr1.splice(2,3) 
 * console.log(arr1) :: [0,1,5,6,7]
 * let arr1 = [0,1,2,3,4,5,6,7]
 * arr1.splice(2,3,'two','three','four') :: [0,1,'two','three','four',5,6,7]
 * 
 * //if arg2=0 , it means don't delete just add elements at arg1
 * 
 * let arr1 = [0,1,2,3,4,5,6,7]
 * arr1.splice(2,0,'two','three','four') :: [0,1,'two','three','four',2,3,4,5,6,7]
 * 
 * - to String
 * let arr1 = [0,1,2,3,4,5,6,7]
 * console.log(arr1.toString()) :: 1,2,3,4,5,6,7
 * 
 * - Join
 * let arr1 = [0,1,2,3,4,5,6,7]
 * console.log(arr1.join('+')) :: 1+2+3+4+5+6+7
 * 
 * - includes
 * let arr1 = [0,1,2,3,4,5,6,7]
 * arr1.includes(4) :: true
 * arr1.includes(0,2) // search 4 from 2nd index :: false
 * 
 * - indexOf
 * arr1.indexOf(4) // returns index of any element :: 4 
 * arr1.indexOf(8) // returns index of any element :: -1
 * arr1.indexOf(0,4) // returns index of '0' starting from 4th index :: -1
 * 
 * -lastIndexOf
 * search the last occurence of an elemnt
 * arr1.indexOf(0,4) // returns index of '0' starting from 4th index toward left :: 0
 * 
 * - forEach
 * arr1.forEach(printValue()) ::0 1 2 3 4 5 6 7
 * // anonymus func
 *  arr1.forEach(function(x){
 *   x += x; 
 *  })
 * 
 * // arrow func
 *  *  arr1.forEach(x =>{
 *   x += x; 
 *  })
 * 
 * function printvalue(value){
 * console.log(value)
 * }
 * 
 * - find
 * search in array according to specific criteria
 * person.find(personJim);
 * function personJim(x){
 *  return person.name === 'Jim
 * }
 * 
 * arr1.find(function(x){
 *  return x>5;
 * })
 * 
 * arr1.find(x=> x>5);
 * 
 * - findIndex
 * Same as Find but returns the index, if not found then returns undefined
 * 
 * - filter
 * Same as find but doesnot return only the first found element but returns the array. Empty array if nothing matches.
 * If you modify data the original will be modified.
 * 
 * -some
 * Check if any element exist that match specific criteria and returns true/false.
 * 
 * -every
 * Check if all element exist that match specific criteria and returns true/false.
 * 
 * -map
 * Take each individual arg at element and transform it to what is returned.
 * arr1.map(x => x^2) :: 0,1,4,9,16,25,36,49
 * 
 * -flatMap
 * diff between map and flatMap is that flatMap allow to add more elements than the original array (key)
 * 
 * -reduce
 * similar to map but two args
 * arr1.reduce((accumulatedValue, seenValue) => {
 *  return accumulatedValue += seenValue;
 * } :: sum of array will be stored in accumulatedValue;
 * 
 */