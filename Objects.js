/**
 * ----------Spread Operator----------
 * let obj1 = {
 * name: 'Ali',
 * age: 26,
 * gender; 'male'}
 * 
 * let obj2 = {
 * qualification: 'Masters',
 * university: 'JAMK
 * }
 * 
 * let combined = {
 * ..obj1,
 * ..obj2
 * } 
 * 
 * :: 
 * {
 * name: 'Ali',
 * age: 26,
 * gender; 'male'
 * qualification: 'Masters',
 * university: 'JAMK
 * }//if there is a property with same key in both objects than later one will be used.
 * 
 * let combined2 = {
 * obj1,
 * obj2}
 * 
 * ::
 * {obj1: {
 * name: 'Ali',
 * age: 26,
 * gender; 'male' 
 * },
 * obj2: {
 * qualification: 'Masters',
 * university: 'JAMK
 * }
 * }
 * 
 * -----------Methods-----------
 *
 * obj1 = {a:1, b:2, c:'Hello'}
 * obj2 = {d:4, e:5, f:'Bye'}
 * 
 * - keys
 * Object.keys(obj1) :: return array of keys. :: [a,b,c]
 * 
 * - values
 * Object.values(obj1) :: return array of values. :: [1,2,'Hello']
 * 
 * - entries
 * Object.entries(obj1) :: convert array of array from object :: [['a','1'],['b',2],['c','Hello']]
 * 
 * - fromEntries
 * Object.fromEntries([['a','1'],['b',2],['c','Hello']]) :: convert object from array of array :: {a:1, b:2, c:'Hello'}
 * 
 * - for in loop
 * For in loop, loops towards keys of object
 * for(let key in obj1){
 *  
 * }
 * 
 * - assign
 * Similar to spread ... operator, assign was the older version
 * Object.assign({},obj1,obj2) :: {a:1, b:2 , c:'Hello', d:4, e:5, f:'Bye'}
 * {...obj1, ...obj2} :: {a:1, b:2 , c:'Hello', d:4, e:5, f:'Bye'}
 * Object.assign(obj1,obj2) :: instead of adding to new object, properties of obj2 are added to obj1  
 * 
 * - freeze
 * Even if obj declared as const obj1, still obj1.a = 2 will work
 * let obj 2 = Object.freeze(obj1) will prevent the changes made by obj1.a
 * (obj1 === obj2) :: true; because the object and its freeze version have same reference.
 * this method also works with array.
 * 
 * - isFroozen
 * if froozen then true else false
 * Object.isFrozen(obj2) :: true
 * Objec.isFrozen(obj1) :: false
 * 
 * - preventExtension
 * Little less restricted then freeze.
 * Existing prop can be changed but new cannot be added.
 * obj1 = Object.PreventExtensions(obj1)
 * obj1.a = 5 :: updated 
 * obj1.f = 6 :: cant be added
 * 
 * - reduceRight
 * Same as reduce function but starts from right
 * 
 * ----------Examples----------
 * - Exp 1:
 * obj1 = {a:1, b:2, c:'Hello'}
 * Convert keys to upper case
 * transformed = Object.entries(obj1)
 * transformedEntries = transformed.map{ x => {
 *  return [property[0].toUpperCase, property[1]];
 *  }
 * }
 * 
 */