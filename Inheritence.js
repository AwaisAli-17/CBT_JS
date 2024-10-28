//JS use Proto Typal inheritence
class Person{
    //member variables are defined in constructor

    //static: to keep track og whole class not depending on objects
    static #numberOfPeople = 0;

    constructor(name,age){
        this.name = name;
        this.age = age;
        Person.#numberOfPeople++;
    }

    greet(){
        console.log(`Hello! my name is ${this.name}`);
    }

    static getInstanceCount(){
        return this.#numberOfPeople;
    }
}

class Programmer extends Person{
    constructor(name,age,favoriteLanguage){
        super(name,age)
        this.favoriteLanguage = favoriteLanguage;
    }
    //Override greet
    greet(){
        console.log(`Hello! my name is ${this.name} and like ${this.favoriteLanguage}`);
    }

}

let programmer1 = new Programmer('Owais',25,'Java');
programmer1.greet()
console.log(programmer1 instanceof Person)
console.log(programmer1 instanceof Programmer)




