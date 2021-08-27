/*let obj = {
    firstName: "Elie",
    lastName: "Schoppik",
    favoriteColor: "purple",
    job: "instructor",
    isDeveloper: true
};

console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.favoriteColor);
console.log(obj.job);
console.log(obj.developer);

let obj1 =  {
firstName : 'james',
lastName : 'doe',
job : 'instructor',
isDevloper: true
}

console.log(obj1.firstName);
console.log(obj1.lastName);
console.log(obj1.job);
console.log(obj1.isDevloper);*/




// "The favoriteNumber key exists!"

// if ("nothing" in obj){
//     console.log("The nothing key exists!");
// }
// const array = {
//     firstName: 'john',
//     lastName : 'doe',
//     citynumber : 55
// }
// console.log(array.firstName);
// console.log(array.lastName);
// console.log(array.citynumber);


// let l = 0;
// let n = 0;
// while (l < 5) {
//   l++;
//   if (l === 3) {
//     continue;
//   }
//   n += l;
//   console.log(n);
// }
//1,3,7,12

// let m = 0;
// let n = 0;
// while (m < 5) {
//   m++;
//   if (m === 3) {
//      // continue;
//   }
//   n += i;
//   console.log(n);
// }

//var array = ['mango', 'lemon', 'apple', 50];
//  var ln = array.length
//for (i = 0; i < 3; i++) {
   // console.log(array[i]);
// }
//  console.log(ln);
//  for( let i=1;i<array.length;i++){
//      console.log( i +' = '+ array[i]);
//  }
//  var array = [20,38,49,37,578,483];
//  for (let i = 1;i<4 ;i++){
//      console.log(array[i]);
//     if (i===578){
//     break;
//     i++;
//     }
//     }

// const user =  
//     {
//         name : 'john',
//         lastname : 'doe',
//         age : 25
//     }
// console.log(Object.keys(user));
// var student = 
// {
//         id : 3 ,
//         name :  'sam',
//         marks : 50
// }
// for(const key of Object.keys(student)){
//     console.log(`${key} => ${student[key]}`);
// }
// for(const _value of Object.keys(student)){
//     console.log(`${_value} => ${student[_value]}`);
// }

//     var car = {
//  name : 'toyota',
//         model: 'x10',
//         year : 2000
//     }

// for(const key of Object.keys(car)){
//     console.log(`${key}=${ car[key]}`);
// }
//      console.log(Object.keys(car));    
//      console.log(Object.entries(car));    
//  console.log(Object.values(car));    

// var arr = {
//     abc: 'bcd',
//     efg: 'hij',
//     dbg: 'xyz'
// }
// for (const value of Object.keys(arr)) {
//     console.log(arr[value]);

// }
// for (const value in arr) {
//     console.log(`${value} = ${arr[value]}`);
// }

// for (const value of Object.keys(arr)) {
//     console.log(`${value} = ${arr[value]}`);
// }
// for (const key of Object.keys(arr)) {
//     console.log(key);
//     console.log(`${key} = ${arr[key]}`)
// }

// const car = ['toyota', 'x10', 2000];

// for (let i = 0; i < car.length; i++) {
//     console.log(car[i]);
// }

// for (let i = 1; i < car.length; i++) {
//     console.log(i + ' = ' + car[i]);
//     console.log(car[i])
// }

// var array = ['mango', 'lemon', 'apple', 50];
// //  var ln = array.length
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     if( array[i]<= 2){
//         break;
//     }
// }

    // console.log(v);
// var car = {
//      name : 'toyota',
//             model: 'x10',
//             year : 2000
//         }
        
// for (let v of Object.keys(car)){
    // console.log(car[v] );  
    // console.log(v);
//     console.log(`${v}`);
//     console.log(`${v}=${car[v]}`)

//     // console.log(v);
// }

// console.log(Object.values(car))
// console.log(Object.keys(car))
// console.log(Object.entries(car))

// for (let key in car){
//    // console.log(key)
// }
// for (let key of Object.keys(car)){
//     console.log(key);
//     console.log(car[key]);

// }

// var array = ['mango', 'lemon', 'apple', 50];

// console.log(Object.values(array));
// console.log(Object.keys(array));
// console.log(Object.entries(array));

// for (let key in array){
    // console.log(key[0]);
   // console.log(array[key])
// }
let arr = [1,4,4,77,5,7,5];
let doubled = arr.map(x => x * 2);
console.log(doubled);
let foreach = arr.forEach(function each(x,y) {
    console.log(x,y);
    
})
console.log(foreach);
console.log(Object.entries(arr))

let doubled1  = arr.map(function(x){
    return x * 3;
})
console.log(doubled1);
 
let odd =  arr.filter(x => x%2===1)
console.log(odd);

let even1 = arr.filter(function(x){
    return x % 2 === 0
})
console.log(even1);

 let reducer  = arr.reduce(function (x,y){
     return x/y;
 });
console.log(reducer);
// console.log(arr.reduce());
 
let some = arr.some(function few(x) {
    return x < 0.2862449
    
})
console.log(some);


let every  =  arr.every(function(x){
    return x >= 1;
})
console.log(every)
console.log(arr.find(x => x > 1))

var car =[ {name : 'toyota'},
      {model: 'x10'},
      {year : 2000}]
let find = car.find(function(x){
    return x.name=='toyota';
});
console.log(find);

let index = car.findIndex(function(x){
    return x.year == 2000;
})
console.log(index);


let obj = {
    favoriteNumber: 33,
    favoriteColor: 'blue'
}

// if ("favoriteColor" in obj){
//     console.log("The favoriteNumber key exists!");
// }

// // "The favoriteNumber key exists!"

// if ("nothing" in obj){
//     console.log("The nothing key exists!");
// }
// if ('favouriteNumber' in obj){
//     console.log ('true')
// }


let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (let val in namesAndHobbies){
    console.log(`${val} => ${namesAndHobbies[val]}`);
}

namesAndHobbies.joel = "bridge"

if("joel" in namesAndHobbies){
    console.log("Joel", namesAndHobbies.joel)
}

namesAndHobbies.sam = 'doe';

if ('sam' in namesAndHobbies){
    console.log('sam',namesAndHobbies.sam)
}
namesAndHobbies.sam = 'abc'

if ('sam' in namesAndHobbies){
    console.log('sam',namesAndHobbies.sam)
}

let array = {
             id : 3 ,
             name :  'sam',
             marks : 50
     }

     for (let key of Object.keys(array)){
     //console.log(key);
     //console.log(array[key]);
     console.log(`${key}=> ${array[key]}`)
     }






