
 /**
 *  ----------Equality and Pass By Reference----------
 * 
 * let arr1 = [1,2,3];
 * let arr2 = [1,2,3];
 * 
 * for(let x of arr1){
 *  // :: 1
 *  // :: 2
 *  // :: 3
 * } 
 * 
 * 
 * // To comapre two arrays of same size.
 * function arraysEqual(arr1,arr2){
 * for(let [index,x] of arr1.entries){
 *   *** arr1.entries change array to following.
 *       [[0,1]],[[1,2]],[[2,3]]
 *       [[index,value]],[[index,value]],[[index,value]] ***
 * 
 *  let isEqual = true;
 *  isEqual = x === arr2[index]
 *  if(!isEqual){
 *  break; 
 *  }
 *  return isEqual;
 * }
 * }  // will fail for arr1 = [1,2] , arr2 = [1,2,3]
 *  
 * 
 * if arrays are of diff size. just add the check before loop
 * 
 * function arraysEqual(arr1,arr2){
 *  let isEqual = true;
 *  if(arr1.length !== arr2.length){
 *   return false;
 *  }
 * 
 * for(let [index,x] of arr1.entries){
 *  isEqual = x === arr2[index]
 *  if(!isEqual){
 *  break; 
 *  }
 *  return isEqual;
 * } // will fail for arr1 = [1,2,[3,4]] , arr2 = [1,2,[3,4]]
 * 
 * 
 * function arraysEqual(arr1,arr2){
 *  let isEqual = true;
 *  if(arr1.length !== arr2.length){
 *   return false;
 *  }
 * 
 * for(let [index,x] of arr1.entries){
 * if(Array.isArray(x) && Array.isArray(arr2[index]){
 *  isEqual = arraysEqual(x,arr[2]);
 *  }else{
 *  isEqual = x === arr2[index]
 *  }
 *  if(!isEqual){
 *  break; 
 *  }
 *  return isEqual;
 * } 
 * **/