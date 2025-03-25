//Day 12
// Javascript 99days
//object orient programming
//learning prototype
let phone = {
  name: "Iphone",
  type: "Xs",
  use() {
    console.log("3 months used.");
  },
};
let apple = {
  brand: "apple",
};

//here in apple named object is created a prototype of phone object to access properties of phone object's
apple.__proto__ = phone;
//clases created

class Car {
  //car class's blueprint is below
  //constructor will execute first after one object is created and two parameters will be brand and available
  constructor(brand, available) {
    //brand and availibility stored in brand and available variable in left
    this.brand = brand;
    this.available = available;
  }
  price = "82000";
  location = "Global";
//function inside a class
  checkavailable() {
    console.log(`This  ${this.brand} car is ${this.available}`);
  }
}
//object creation with the parameters
let firstcar = new Car("bmw", "unavailable");
let secondcar = new Car("tesla", "available");
//wheel class extends the parents class Car
class Wheel extends Car {
  
  constructor(brand, available,wheelbrand) {
    //super method is helping to connect parent's class parameter to access from child wheel class and setting the value to store 
    super(brand, available);
    
    
    this.wheelbrand = wheelbrand;
  }
  price=920;
  location="japan";

}
let firstwheel = new Wheel("tesla", "non available" , "MRT");
//practice


let data = "first website data";
//creating class with two properties

class User {
  constructor(name , email){
    this.name = name ;
    this.email = email;
  }
  viewdata(){
    console.log("web data",data)
  }
}
let user1 = new User("Kakon","kakon.aiubcse@gmail.com");

class Admin extends User{
  constructor(name, email){
    super(name,email);
  }
  editData(){
    data = "Updated"
    console.log("edited data",data)
  }
}
let admin = new Admin("admin","admin@gmail.com");
