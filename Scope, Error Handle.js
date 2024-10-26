/** 
 *   ----------- SCOPE -----------
 * - variable defined as var is function-scoped
 * - variable defined as let is block-scoped
 * - preferred to use let.
 * 
 * - Function Scoped:
 * if(true){
 *   var x = 5;
 * }
 * console.log(x); Output: 5
 * 
 * for(var i=0; i<10; i++){
 * console.log(i);
 * }
 * 
 * console.log(i); //i accessible with var outside loop 
 * but if used with let then not accessible.
 * 
 * - Blocked Scoped: let
 * 
 *   ----------- Equality -----------
 *  let person1 = {name: 'Owais', age:50}
 *  let person2 = {name: 'Owais;, age:50}
 *  person1 == person2; Output: false
 *  person1 === person2; Output: false
 *  person3 = person1;
 *  person1 == person3; Output: true // because person 3 refers to same obj person 1 
 *  person1 === person3; Output: true
 * 
 * 
 *  ----------- Errors -----------
 *  -Reference Error:
 *  Trying to access something that doesnot exists or access undeclared var.
 * 
 *  -Syntax Error:
 *  Typos, wrong keywords etc
 * 
 *  -Type Error:
 *  let person = {}
 *  person.toUpperCase; //TypeError
 * 
 *  -Range Error:
 *  When infinity is called. like a recurring call of a function.
 * 
 *  try{
 *  }catch(e){
 *  }finally{
 *  }
 * 
 *  Throw your own error: throw new Error('Error 1')
 ***/

