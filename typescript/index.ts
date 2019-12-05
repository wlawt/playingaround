/* function greeter(person: string) {
  return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.textContent = greeter(user); */

class Student {
  fullName: string;

  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

// Properties the class must adhere to
/* 
    Otherwise -> will always have to define types all the time
    It's like a function but for types
*/
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello " + person.firstName + " " + person.lastName;
}

//let user = { firstName: "j", lastName: "s" };
let user = new Student("H", "j", "u");

document.body.textContent = greeter(user);

// Another example
class sss {
  constructor(public age: number, public first: string) {}
}

interface Students {
  age: number;
  first: string;
  //last: string
  //gender: string
}

function sayhi(student: Students) {
  return "hello " + student.age + student.first;
}

let s = new sss(1, "james");

sayhi(s);

// Interfaces
interface labelProp {
  label: String;
  name?: String; // Optional
}

function printLabel(labeledObj: labelProp) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "size of 10" };
printLabel(myObj);

// Interface function
interface search {
  (source: string, subString: string): boolean;
}

let mysearch: search;
mysearch = function(src, sub): boolean {
  let res = src.search(sub);
  return res > -1;
};

// Instances and classes
interface ClockConstructor {
  new (hours: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour, minute): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("yea");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("yea");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
