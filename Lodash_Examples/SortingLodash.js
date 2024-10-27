import _ from 'lodash'
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

let sorted = _.sortBy(people,['firstName','lastName','age']);
console.log(sorted);

// sort by acsending first and last name but desc age

sorted = _.orderBy(people,['firstName','lastName','age'],['asc','asc','desc']);
console.log(sorted);

// shuffle (to shuffle array)
console.log(_.shuffle([1,2,3,4,5,6,7,8,9]));

// reverse (to reverse array)
console.log(_.reverse([1,2,3,4,5,6,7,8,9]));
