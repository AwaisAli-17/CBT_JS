/** Javascript is Dynamically and Weakly typed language.
 *  Javascript is Interpreted Language.
 * 
 *  Dynamic: Types are determined runtime instead of compile time.
 *  Type of veriable in not defined. let x = 5;
 * 
 *  Interpreted Languaged: No need to be compiled.
 *  Compilation step is not involved. 
 * 
 *  Weak Typing: Operations can be performed on 2 vars of different types.
 *  let x = 'Hello'
 *  let y = 5
 *  console.log(x+y)  
 *  Output: Hello5 
 * 
 *  let x = 10
 *  typeof x 
 *  Output: 'number' 
 * 
 *  Study ESLINT Library, mdn javascript.
 * 
 *  ----------- NUMBERS -----------
 *  Numbers are stored as 64 bit and not precise as 
 *  0.1 + 0.7 
 *  //0.79999999
 * 
 *  let big = 12345678901234567
 *  console.log(big)
 *  //12345678901234568
 * 
 *  Above examples show that number system is weak in JS.
 *  Math.round()
 *  Math.max(x,y)
 *  Math.min(x,y)
 *  Math.sqrt(x)
 *  
 *  0b101010101 // Binary 
 *  0o136723 // Octal
 *  0xabc123 // Hexa
 * 
 *  typeof NaN; Output: Number
 *  typeof Infinity; Output: Number
 * 
 *  ----------- STRINGS -----------
 *  Can be used in '' and "" and ``
 *  .length : for num of chars.
 *  .toUpperCase(): to change to upper case.
 *  .toLowerCase(): to change to lower case.
 *  .charAt(3): char at specific position starting from 0.
 *  .`x is {$x}`
 * 
 *  ----------- Boolean -----------
 *  let myString = 'Hello'
 *  if(myString){
 *   console.log('ok')
 *  } 
 *  Output: ok
 *  truthy: treated as boolean truth value.
 *  falsy: treated as boolean false value.
 *  Only 7 falsy in JS: 0, '', Nan, false, null, undefined, Big int
 *  
 *  ----------- Objects -----------
 *  let person = {
 *  name = 'Owais',
 *  age = 22,
 *  hairColor = 'Brown'
 *  }
 * 
 *  Access by: person.name || person['name'||"name"]
 *  let propertyName = 'name';
 *  person[properyName]; Output: 'Owais'
 *  person.propertyName; Output: undefined
 *  person['propertyName']; Output: undefined
 *  person; Output: {name: 'Owais', age = 22. hairColor: 'Brown'}
 * 
 *  ----------- Arrays -----------
 *  Javascript arrays can have multiple types [1,'SHAN',false, {name:'Owais'}] 
 *  Type of array in jaavscript is object.
 *  typeof []; Output: object
 *  Only acessed by numbers[0] 
 *  Any operation on undefined cause NaN output.
 *  numbers.length: Size
 *  numbers.forEach(x => console.log(x)): Print all array
 *  number.push(100): Add number at end of array
 *  number.pop(): Show last number and remove from array
 *  Max Length = 2^32
 * 
 *  ----------- Functions -----------
 *  Defined by function keyword.
 *  Way 1: function myFunction(){   return 'Hello';   }
 *  myFunction(); Output: "Hello"
 *  
 *  function myFunction(x,y) 
 *  No need to define type of x,y because of dynamic typing
 *  'The sum is ' + (x+y) => The sum is 30. 
 *  'The sum is ' + x + y => The sum is 1020.
 *  
 *  Way 2: let function3 = function(){
 *  return 'Hi';
 *  }
 *  function3(); Output: Hi.
 * 
 *  Way 3: let myArrowFunction = () => {
 *  return 'I am arrow function';
 *  }
 *  myArrowFunction(); Output: I am arraow function.
 * 
 *  let myOthrtArrowFunction = () => { 'I am another arrow function'}
 *  myOthrtArrowFunction(); Output: I am another arraow function.
 * 
 *  let product = x => x*2
 *  product(10); Output: 20
 * 
 *  Way 4: Annonymus Function.
 *  arr1.forEach(function(x){
 *   x += x; 
 *  })
 *  
 * 
 *  *** if we decalere a function by using function keyword not by 
 *      var or arrow type, only then the following is valid. ***
 *      myFunction();
 *      function myFunction(){ };
 *      Call First Define Later ***
 * 
 * 
 *  ----------- Big Int -----------
 *  12345678901234567 -> Change to 12345678901234568
 *  so use,
 *  123456789012345678n -> 123456789012345678n
 *  For bigInt JS doesnt support Weak typing due precision issue.
 * 
 *  ----------- Symbol -----------
 *  Used in Meta Programming(to change the basic func of js itself)
 *  Symbol('mySymbol');
 *  Symbol('mySymbol') === Symbol('mySymbol'); Output: false.
 * 
 *  ----------- Undefined -----------
 *  Means no value .
 *  let person{} : undefined
 *  person.name: undefined
 *  myArray[]: undefined
 *  myArray[100]: undefined
 **/