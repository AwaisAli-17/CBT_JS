/**
 * Intersection, Union, Difference, XoR 
 */
// Intersection (intersection, intersectionBy, intersectionWith)

import _ from 'lodash';

let arr1 = [1,2,3];
let arr2 = [2,4,6];
let arr3 = [2,5,6];

let result = _.intersection(arr1,arr2,arr3);
console.log(result);