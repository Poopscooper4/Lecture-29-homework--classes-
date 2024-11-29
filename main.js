// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(),
//  რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    static isAdult(age) {
      return age >= 18;
    }
  }
  

  const person = new Person("vako", 25);
  console.log(person.introduce()); 

  



// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person,
//  რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.
class person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static isAdult(age) {
      return age >= 18;
    }
  }
  
  // ახალი ობიექტის შექმნა
  const person2 = new Person("vako", 25);
  
  // სტატიკური მეთოდის შემოწმება
  console.log(Person.isAdult(25)); // true (25 >= 18)
  console.log(Person.isAdult(16)); // false (16 < 18)
  
  // სტატიკური მეთოდი ობიექტისგან პირდაპირ არ გამოიძახება
  // console.log(person.isAdult(25)); // Error: isAdult is not a function
  

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} makes a sound.`;
    }
  }
  
  class Dog extends Animal {
    speak() {
      return `${this.name} says: woof`;
    }
  }

  const dog = new Dog("Buddy");
  console.log(dog.speak()); 
  



// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში.
//  დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.

class Vehicle {
    constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
    }
  
    describe() {
      return `This is a ${this.brand} vehicle with a speed of ${this.speed} km/h.`;
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, speed, model) {
      super(brand, speed);
      this.model = model;
    }
  
    describe() {
      return `${super.describe()} It's a ${this.model} model.`;
    }
  }
  
 
  const car1 = new Car("Toyota", 180, "Corolla");
  const car2 = new Car("BMW", 240, "X5");
  console.log(car1.describe()); 
  console.log(car2.describe());
  

// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). 
// შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.

class Product {
    constructor(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    static filterByCategory(products, category) {
      return products.filter(product => product.category === category);
    }
  }

  const products = [
    new Product("Laptop", 1000, "electronics"),
    new Product("Phone", 500, "electronics"),
    new Product("Shoes", 100, "clothing")
  ];
  const electronics = Product.filterByCategory(products, "electronics");
  console.log(electronics);
  

// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.
class Event {
    constructor(name, date) {
      this.name = name;
      this.date = new Date(date);
    }
  
    isUpcoming() {
      const now = new Date();
      return this.date > now;
    }
  }
  

  const event1 = new Event("Conference", "2024-12-01");
  const event2 = new Event("Party", "2024-11-20");
  console.log(event1.isUpcoming()); 
  console.log(event2.isUpcoming()); 
  

// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.

// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.