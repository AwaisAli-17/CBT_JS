let string = 'Hello! Hi!'

console.log(string.includes('H'));

// Get the individual char
console.log(string.charAt(1));
console.log(string[0]);

//join strings
console.log(string.concat(" Hi!"));

//indexOf
console.log(string.indexOf('!'));

//lastIndexOf
console.log(string.lastIndexOf('!'));

//slice
console.log(string.slice(1))
console.log(string.slice(2,5))

//toArray
console.log(string.split('').map(x => x.toUpperCase()).join(''))
console.log(string.split('').map(x => x.toUpperCase()).join())


//Apply colors to strings fa
//install chalk; npm install chalk 
//chalk.red('Hello') + chalk.blue('Hi'); print Hello in red color and Hi in blue
//for background
//chalk.bgGreen('Working'); print working with green bg color
