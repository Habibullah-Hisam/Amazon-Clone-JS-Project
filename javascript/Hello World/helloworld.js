//console.log("hello world");

// var a = "kewn";

// if(a == "ami"){
//  console.log("hea he.. boy");
// }else if(a == "kewna"){
//  console.log(
//   "what the hell"
//  );
// }else{
//  console.log("if's ok");
// }






// if else


// var aam = 500;
// var comola = 300, chal = 40, dal = 50;
// if(aam > comola && chal == dal){
//  console.log("ami bazare jabo");
// }else{
//  console.log("tui bazare ja");
// }

// var aam = 500;
// var comola = 300, chal = 40, dal = 50;
// if(aam > comola || chal == dal){
//  console.log("ami bazare jabo");
// }else{
//  console.log("tui bazare ja");
// }


//arrys

// var friends = ["abm","nj","jl","glm","army","ami"];
// friends.sort();
// console.log(friends);
// friends.reverse();
// console.log(friends);
// console.log(friends.length);
// console.log(friends.indexOf("ami"));
// console.log(friends[2]);
// friends.pop();
// console.log(friends);
// friends.push("nj");
// console.log(friends);          //FIFO
// friends.shift();
// console.log(friends);
// friends.unshift("abm");
// console.log(friends);          //LIFO



//loops
//         while loop

// var kotoBar = 0;
// while(kotoBar < 20){
//  console.log(kotoBar,"ek bar kore barabo");
//  kotoBar++;
// }

//        for loop

// var i;
// for(i = 0;i < 20;i++){
//  console.log(i,"amar sonar bangla ami tomay valo basi");
// }

// var friends = ["abm","nj","jl","ami","army","glm"];
// for(i = 0;i < friends.length; i++){
//  if(i == friends.indexOf("ami")){continue;};
//  console.log(friends[i],"eid mubarak");
// }


//functions


// function duble(n){
//  var multiplay = n * 2;
//  console.log(multiplay);
// }

// duble(10);  



// function secondToHours(s){
//  var secondToMinut = s/60;
//  var minutToHors = secondToMinut/60;
//  console.log(minutToHors);
// }

// secondToHours(500000);



// function sum(n1,n2){
//  console.log(n1+n2);
// }

// sum(500,5684);   // thats the way to run functions in vs code

                          //another way to run functions
// function sum(n1,n2){
//  jogKor = (n1+n2);
//  return jogKor;
// }

// var output = sum(500,5684); 
// console.log(output);




//             objects


// var chair = {
//  legs: 4,
//  handle: 2,
//  hasFoam: true,
//  isItOk: true
// };
// console.log(chair);

// var person = {
//  name: "hablu",
//  age: 250,
//  status: "single",
// };

// console.log(person.age, person.name);
// console.log(person);



//            class

// class Vapa {
//  constructor (narikel, gurTukra){
//   this.narikel = narikel;
//   this.gurTukra = gurTukra;
//  }
// }

// var mypitha = new Vapa(0,5);
// console.log(mypitha);

// class Flowers {
//  constructor(golap, rojonigondha, hasnahena, togor, beli, roktojoba, golapijoba){
//   this.golap = golap;
//   this.rojonigondha = rojonigondha;
//   this.hasnahena = hasnahena;
//   this.togor = togor;
//   this.beli = beli;
//   this.roktojoba = roktojoba;
//   this.golapijoba = golapijoba;
//  }
// }

// var myItems = new Flowers(80,90,40,12,22,44,51);
// console.log(myItems);

// let month = 5;
// switch (month) {
//   case 1:
//     console.log("Its january");
//     break;
//   case 2:
//     console.log("Its february");
//     break;
//   case 3:
//     console.log("Its march");
//     break;
//   case 4:
//     console.log("Its april");
//     break;
//   case 5:
//     console.log("Its may");
//     break;
//   case 6:
//     console.log("Its june");
//     break;
//   case 7:
//     console.log("Its july");
//     break;
//   case 8:
//     console.log("Its august");
//     break;
//   case 9:
//     console.log("Its september");
//     break;
//   case 10:
//     console.log("Its october");
//     break;
//   case 11:
//     console.log("Its november");
//     break;
//   case 12:
//     console.log("Its december");
//     break;

//   default:
//     console.log("It can't be a month")
//     break;
// }

// let username = window.prompt("Enter yout user name");
// username = username.trim();
// let firstChar = username.slice(0, 1);
// firstChar = firstChar.toUpperCase();
// let anythingelse = username.slice(1);
// anythingelse = anythingelse.toLocaleLowerCase();
// username = firstChar + anythingelse;
// console.log(username); //method chaining can do the same but in one line

// method chaining
 
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();
// console.log(username);


// function isValid(email){
  // if(email.includes("@") && email.includes(".com")){
  //   return true;
  // }
  // else{
  //   return false;
  // }
//   return email.includes("@") && email.includes(".com") ? true : false;
// };
// console.log(isValid("hellow@fake.com"));

// let username = "Bro code";
// let toUpper = username.toUpperCase();
// let toLower = username.toLowerCase();
// let latters = [...username];
// console.log(latters,username,toUpper);
// console.log(toUpper,toLower);

// function sum(...numbers){
//   let result = 0;
//   for(let number of numbers){
//     result = result + number
//   }
//   return result;
// }

// total = sum(1,3,10);
// console.log(`total:${total}`);
// function avg(...numbers){
//   let result = 0;
//   for(let number of numbers){
//     result = result + number;
//   }
//   return result/numbers.length;
// }
// avarage = avg(40,50,90,85,63,54).toFixed(2);
// console.log(`avarage:${avarage}`);

// let names = ["Hbh","Gm","Abm","Nj","Jl"];
// names.forEach(display);
// function display(something){
//   console.log(something);
// };

// let upper = names.map(toupper);
// console.log(upper);

// let lower = names.map(tolower);
// console.log(lower);

// function toupper(element){
//   return element.toUpperCase();
// }
// function tolower(element){
//   return element.toLowerCase();
// }

// let dates = ["2024-5-10","2026-9-4","2014-2-21"];
// function changedate(element){
//   let parts = element.split("-");
//   return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }
// let toBdStyle = dates.map(changedate);
// console.log(`toBdStyle ${toBdStyle}`);


// let numbers = [1,50,2,52,6,7,8,52,85,96,8,5,7,54,58,63,54];
// let themax = numbers.reduce(getMax);
// let themin = numbers.reduce(getMin);
// let total = numbers.reduce(getTotal);

// console.log(total);

// function getTotal(accumulator, element){
//   return accumulator + element;
// }

// function getMax(accumulator, element){
//   return Math.max(accumulator, element);
// }

// function getMin(accumulator, element){
//   return Math.min(accumulator, element);
// }

// const squares = numbers.map((element) => Math.pow(element, 2));
// const squaresTotal = squares.reduce((accumulator, element) => accumulator + element);
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// console.log(oddNums);

// const person = {
//   firstName : "spongboob",
//   lastName : "squrepants",
//   age : 30,
//   isImployed : true,
//   says : () => (console.log("Hi! I am spongboob"))
// };

// person.says();

// function laptop(brand, prossesor, genarationofProssesor, ram, storage, keybord, chargar, webcam, use){
//   this.brand = brand,
//   this.prossesor = prossesor,
//   this.genarationofProssesor = genarationofProssesor,
//   this.ram = ram,
//   this.storage = storage,
//   this.keybord = keybord,
//   this.chargar = chargar,
//   this.webcam = webcam,
//   this.use = function(){
//     console.log(`My brand is ${this.brand}`);
//   }
// };
// const laptop1 = new laptop("ASUS","core i9","12","32GB","2TB","mecanical","35W","5MP");
// const laptop2 = new laptop("hp","core i7","3","16GB","1TB","membren","35W","5MP");

// console.log(laptop1,laptop2);
// laptop1.use();
// laptop2.use();

// class MathUtil{
//   static PI = 3.14159;
//   static getDiamitter(reduas){
//     return reduas * 2;
//   };
//   static getCurcomfarence(reduas){
//     return 2 * this.PI * reduas;
//   };
//   static getArea(reduas){
//     return this.PI * Math.pow(reduas, 2);
//   }
// };

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiamitter(10));
// console.log(MathUtil.getCurcomfarence(10));
// console.log(MathUtil.getArea(10));



// class User{
  
//   static userCount = 0;

//   constructor(username){
//     this.username = username;
//     User.userCount++;
//   };
//   static getUserCount(){
//     console.log(`There are ${User.userCount} user online`);
//   };
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patric");
// const user3 = new User("Sandy");

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
// User.getUserCount();



// class Aninmal{

//   constructor(name,age,speed){
//     this.name = name;
//     this.age = age;
//     this.speed = speed;
//   }
// }

// class Crow extends Aninmal {
//   constructor(name, age, kiKore){
//     super(name, age);
//     this.kiKore = kiKore;
//   }
//   sings(){
//     console.log("ka ka ka");
//   }
// }

// const kak = new Crow("kawa", 3, "BAL");
// kak.sings();
// console.log(kak.name);
// console.log(kak.age);
// console.log(kak.kiKore);




// class Rabbit extends Aninmal {
//   constructor(name, age, speed, isPet){
//     super(name, age, speed);
//     this.isPet = isPet;
//   }
// }

// class RabbitFromForest extends Rabbit {
//   constructor(name, age, speed, isVegan){
//     super(name, age, speed, isVegan);
//     this.isVegan = isVegan;
//   }
// }

// const rabbitFF = new RabbitFromForest("alpha", 4, "23mph", true);

// if(rabbitFF.isVegan == true){
//   console.log("I want ot eat it");
// }
// else{
//   console.log("wag thuh");
// }
// console.log(rabbitFF.isVegan);

// const rabbitFromDesart = new Rabbit("dingo", 5, "15mph", false);

// console.log(rabbitFromDesart);

// class Rectangle{
//   constructor(width, height){
//     this.width = width;
//     this.height = height;
//   } 

//   set width(newWidth){
//     if(newWidth > 0){
//       this._width = newWidth;
//     }
//     else if(newWidth !== Number){
//       console.error("width must be a number");
//     }
//     else{
//       console.error("width must be a positive number");
//     }
//   }
//   set height(newHeight){
//     if(newHeight > 0){
//       this._height = newHeight;
//     }
//     else if(newHeight !== Number || newHeight == String){
//       console.error("height must be a positive number");
//     }
//     else{
//       console.error("height must be a number")
//     }
//   }
//   get width(){
//     return this._width;
//   }
//   get height(){
//     return this._height
//   }
//   get area(){
//     return this._height * this._width;
//   }
// }

// const rectangle = new Rectangle(52,"5"
// );

// console.log(rectangle._height,rectangle._width);
// console.log(rectangle.area);

// class Person{

//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newfirstName){
//     if(typeof newfirstName === "string" && newfirstName.length > 0){
//       this._firstName = newfirstName;
//     }
//     else{
//       console.error("first name must be a non-empty string");
//     }
//   }
// }

// const person = new Person("a", 550, "steak");


