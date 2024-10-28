class Person{
    //member variables are defined in constructor
    // add # with var name to make it private as #age
    #age = 0;

    //static: to keep track og whole class not depending on objects
    static #numberOfPeople = 0;

    constructor(name){
        this.name = name;
        console.log(`New person created with name: ${name}`)
        Person.#numberOfPeople++;
    }

    getAge(){
        console.log("Getting person age...")
        return this.#age
    }

    haveBirthday(){
        this.#age+=1
        return this.#age
    }

    getNumberOfPeople(){
        console.log(`You have created ${numberOfPeople} persons`);
    }

    static getInstanceCount(){
        return this.#numberOfPeople;
    }
}


let person = new Person('Shaun');
let person2 = new Person('Sue');
let person3 = new Person('Bob');
person.haveBirthday()
person.haveBirthday()
console.log(person.getAge());
console.log(Person.getInstanceCount());

