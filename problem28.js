class Animal {
    constructor(name){
        this.name=name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks.`);
    }
}
const animal = new Animal('tom');
const dog = new Dog('spike');
animal.speak();
dog.speak();