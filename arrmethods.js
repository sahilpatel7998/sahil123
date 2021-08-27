// let people = ["Greg","Mary","Devon","James"];
// //1.loop
// for(let i=0;i<people.length;i++)
// {
//     console.log(people[i]);
// }

// //  2- shift methods
// let arr1 = people.shift();
// console.log(people);
// //console.log(arr1);
// /* for(let i = 0;i<people.length;i++)

//     console.log(people[i]);
// }*/
// //3. pop()
// // let arr2 = people.pop();
// console.log(people.pop());
// console.log(people);

// //4, unshift

// console.log(people.unshift('Matt'));
// console.log(people);

// //5. push
// console.log(people.push('sahil'));
// console.log(people);

// //6. slice
// let arr3 = people.slice(2);
// console.log(arr3);

// //7.indexof
// let arr4 = [ 'Matt', 'Mary', 'Devon', 'sahil' ] 
// console.log(arr4.indexOf('Mary'));

// //8.
// console.log(arr4.indexOf('Foo'));

// //9.splice 
// let people1 = ["Greg","Mary","Devon","James"];
// people1.splice(2,1,"Elizabeth","Arti");
// console.log(people1);

//10
// let withBob= people.concat('Bob');
// console.log(withBob);

// //6. 
// let people2 = ["Greg","Mary","Devon","James"];
// for(let i = 0;i<people2.length;i++){
//     console.log(people2[i]);

//     if (people2[i]==='Mary'){
//         break;
//     }
// }
// let people3 = ["Greg","Mary","Devon","James"];
//     for (let i = 0; i<people3.length;i++){
//         console.log(people3[i]);
//         if (people3[i]=='James');{
//         break;
//     }
//     }



const data1 = [
    {
        id: 1,
        name: "chair",
        price: 350,
        available: true,
        type: "wooden",
        discount: 5,
    },
    {
        id: 2,
        name: "table",
        price: 350,
        available: true,
        type: "metal",
        discount: 5,

    },
    {
        id: 2,
        name: "cupboard",
        price: 1350,
        available: true,
        type: "fiber",
        discount: 25,
    },
    {
        id: 3,
        name: "bed",
        price: 3500,
        available: false,
        type: "wooden",
        discount: 0,
    },
    {
        id: 4,
        name: "chair",
        price: 450,
        available: true,
        type: "fiber",
        discount: 10,
    },
    {
        id: 5,
        name: "cupboard",
        price: 550,
        available: true,
        type: "fiber",
        discount: 25,
    },
    {
        id: 6,
        name: "chair",
        price: 500,
        available: false,
        type: "wooden",
        discount: 5,
    },
    {
        id: 7,
        name: "cupboard",
        price: 13500,
        available: true,
        type: "metal",
        discount: 25,
    },
    {
        id: 8,
        name: "bed",
        price: 1350,
        available: false,
        type: "fiber",
        discount: 0,
    },
    {
        id: 9,
        name: "chair",
        price: 1000,
        available: true,
        type: "wooden",
        discount: 5,
    },
    {
        id: 10,
        name: "table",
        price: 999,
        available: true,
        type: "fiber",
        discount: 25,
    }
]


// function find(fiber) {
//     return fiber.type === 'fiber';
//   }

//   console.log(data.find(find));


//  1....
// let newarray = data.filter(ele => ele.available=== true)
// console.log(newarray);

// 2.

//3.
// let newarray1 = data.filter(el=> el.type === "fiber")
// console.log(newarray1);

// //4.
// let newarray2 = data.filter(el=>{
//     if (el.name == 'bed'){
//       return  el.type = 'wooden';

//     }
// })
// console.log('array 2',newarray2)

//2.
// let newarray3 = data.map(function(el){
//     return el.price  - (el.discount/100 * el.price);
// })

// let arr2 = data.map (obj=> obj.price -  (obj.discount/100 * obj.price))

//console.log( arr2);

// console.log(data.map(add => add.discountedPrice = ));

// let array11 = data.map(x=> x.price - );
// let result = data.map( element=> {
//     if(element.discount > 0){
//         const discountedPrice = element.price -  (element.discount/100 * element.price);
//         return {...element, discounted_price : discountedPrice}
//     }
//     else { return element}
// })
// console.log('result',result);

// function let() {
//     let a = 50;
//     if (true){
//         a = 10;
//         console.log(a);
//     }

// }
// console.log(a)

// const num = [3,5,3,33,43,74,35,43,35,98,87,434,736];

// const array1 =  num.filter(age=> age > 50 && age < 0);
// console.log(array1);
// result  = data.map(element => {
//     if (element.price > 0){
//     discountedprice = element.price - (element.discount/100-element.price)
//     return {...element,discountedPrice:discountedprice}
//     }
// })

// console.log(result);

// const array1 = data.map(x => x.id > 2 && x.id < 10)
// console.log(array1);

// const arr = data.filter(x => {
//     if (x.discountedPrice > 500){

// console.log(arr);

// const arr3 = ['abc','fgd','dsa','asad','fsd'];
// console.log(data.concat(arr3));

// console.log(arr3.copyWithin(0,1,3));

// console.log('========' + Object.entries(data));

// console.log(data.every(x => x.id > 0));
// console.log(data.some(x => x.id > 0));
// console.log(data.fill(x=> x.id))

const items = [{
    item: "1",
    type: "fruit",
    qty: 1,
    price: 200
},
{
    item: "2",
    type: "cereal",
    qty: 2,
    price: 110
},
{
    item: "3",
    type: "fruit",
    qty: 3,
    price: 120
},
{
    item: "4",
    type: "fruit",
    qty: 4,
    price: 130
},
{
    item: "5",
    type: "fruit",
    qty: 5,
    price: 140
},
{
    item: "6",
    type: "fruit",
    qty: 6,
    price: 150
},
{
    item: "7",
    type: "cosmetic",
    qty: 7,
    price: 160
},
{
    item: "8",
    type: "cosmetic",
    qty: 8,
    price: 170
},
{
    item: "9",
    type: "cereal",
    qty: 9,
    price: 180
},
{
    item: "10",
    type: "cereal",
    qty: 10,
    price: 190
},
{
    item: "11",
    type: "bakery",
    qty: 5,
    price: 43
},
{
    item: "12",
    type: "cement",
    qty: 8,
    price: 90
},
{
    item: "13",
    type: "cement",
    qty: 8,
    price: 920
}
];

const discount = [{
    type: 'fruit',
    disc: 10 // 10%
},
{
    type: 'cereal',
    disc: 5 // 5%
}
]

// const fruitsList = items.filter(fruit => fruit.type === 'fruit');
// const fruitsAmount = fruitsList.reduce((accumulator, currentValue) =>{
//     accumulator += (currentValue.price * currentValue.qty)
//     return accumulator
// }, 0);
// console.log('fruits amount', fruitsAmount);

const totalBill = items.reduce((accumulator, currentValue) =>{
    accumulator += (currentValue.qty * currentValue.price)
    return accumulator
}, 0)
console.log(totalBill);
// 
//4.

const Discount = discount.find(element=>element.type =='fruit')
console.log(Discount);
console.log(Discount.disc);
const fruitsDiscount = Discount.disc
const fruitsList = items.filter(fruit => fruit.type === 'fruit');
const discountedPrice = fruitsList.reduce((accumulator, currentValue) =>{
    accumulator += ((currentValue.price - (currentValue.price * (fruitsDiscount/100))) * currentValue.qty)
    return accumulator
}, 0)

console.log('discounted price of fruits', discountedPrice);

//5.
const discount1 = discount.find(element => element.type == 'fruit')

const fruitdiscount = discount1.disc
const list = items.filter(fruit => fruit.type == 'fruit');

const discountedprice = list.reduce((accumulator, currentvalue)=>{
    accumulator += ((currentvalue.price- (currentvalue.price * fruitdiscount/100 ))  * currentvalue.qty)
    return accumulator
}, 0)
console.log(discountedprice);

// var data = [{costOfAirtickets: 2500, costOfHotel: 1200},{costOfAirtickets: 1500, costOfHotel: 1000}];

// var result = [data.reduce((acc, n) => {
//   for (var prop in n) {
//     if (acc[prop]) acc[prop] += n[prop];
//     else acc[prop] = n[prop];
//   }
//   return acc;
// }, {})]
// console.log(result)

// var data = [{costOfAirtickets: 2500, costOfHotel: 1200},{costOfAirtickets: 1500, costOfHotel: 1000}];
// var result = [];
// var sum = 0;
// var costsum = 0;
// data.map(function(item, key){
//   var cost = item;
//   //nsole.log(cost);
//   sum = sum + cost.costOfAirtickets;
//   costsum = costsum + cost.costOfHotel;

// }) ;

// result = [{costOfAirtickets:sum, costOfHotel:costsum}];

// console.log(result);
const fruitlist = items.filter(fruit => fruit.type = 'fruit')
const fruitCost = fruitlist.reduce((accumulator, currentValue)=> {currentValue.type == 'fruit';
  accumulator = (currentValue.price * currentValue.qty)
  return accumulator
}, {})
console.log(fruitCost);

//  const Discount1 =  discount.find (element => element.type== 'fruit')
//  console.log(Discount1);
//  console.log(Discount1.disc);
//  const fruitdisc = Discount.disc;
//  console.log(fruitdisc);

 const cosmeticlist = items.filter(cosmetic => cosmetic.type = 'cosmetic')
const cosmeticCost = cosmeticlist.reduce((accumulator, currentValue)=> {
  accumulator += (currentValue.price * currentValue.qty)
  return accumulator
}, 0)
console.log(cosmeticCost);

const cementList = items.filter(cement => cement.type == 'cement');
const cementAmount = cementList.reduce((accumulator, currentValue) =>{
    accumulator += (currentValue.price * currentValue.qty)
    return accumulator
}, 0)
console.log('cement amount', cementAmount);


const cementlist = items.filter(cement => cement.type === 'cement')
const cementCost = cementlist.reduce((accumulator, currentValue)=> {
  accumulator += (currentValue.price * currentValue.qty)
  return accumulator;
}, 0)
console.log(cementCost);

// const cementlist = items.filter(cement => cement.type === 'cement')
// const cementCost = cementlist.reduce((accumulator, currentValue)=> {
//   accumulator += (currentValue.price * currentValue.qty)
//   return accumulator;
// }, 0)
// console.log(cementCost);

const bakerylist = items.filter(bakery => bakery.type = 'bakery')
const bakeryCost = bakerylist.reduce((accumulator, currentValue)=> {
  accumulator = (currentValue.price * currentValue.qty)
  return accumulator
}, 0)
console.log(bakeryCost);

// result  = items.map(element => {                                                                                                                                                               
//         if (element.price > 0){
//         discountedprice = element.price - (element.discount/100-element.price)
//         return {...element,discountedPrice:discountedprice}
//         }
// //     })
// const arr = [1,4,4,77,5,7,5];
// const result = arr.map(x => x*2)
// console.log(result);

// let people = ["Greg","Mary","Devon","James"];
 
// for ( let i=0;i<people.length;i++ ){
//     // console.log(people[i]);
// }
// console.log(people[i]);
const result = data1.filter ( x => x.discount = 'cement')
console.log(result) 
// const fruitlist = items.filter(fruit => fruit.type = 'fruit')
// const fruitCost = fruitlist.reduce((accumulator, currentValue)=> {currentValue.type == 'fruit';
//   accumulator = (currentValue.price * currentValue.qty)
//   return accumulator
// }, {})
// console.log(fruitCost);

const fruitlist1 = items.filter(fruit => fruit.type = 'fruit')
const fruitcost1 = fruitlist1.reduce((accumulator, currentValue)=> {currentValue.type == 'fruit';
accumulator = (currentValue.price * currentValue.qty)
}, {} )
console.log(fruitcost1);




