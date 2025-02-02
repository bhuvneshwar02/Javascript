class customer{
    constructor(name,email){
          this.email = email;
          this.name;
    }
    get info(){
        return this.name;
    } 
    printDetails() {
        console.log(`Name and emaul of customer is ${this.name} and ${this.email}`);
    }
}

const customer1 =new Customer("john", 'abs@gmail.com');
const customer2 = new Customer("bob","abc@gmail.com");
console.log(customer1);
customer1.printDetails();
customer2.printDetails();
console.log(customer1.info);
console.log(customer2.info);



// inheritance :  