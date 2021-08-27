//1.ways to print in javascript
//console.log("hello world");
// alert("this is me");
// document.write("this is document write");

// 2.javascript console API
//console.log("hello world");
//console.warn("this is warning");
// console.error("this is an error");

// 3.javascript variables
//variables?= containers to store data values
var number1 = 34;
var number2 = 66;
// console.log(number1+number2);

//4. data types in javascript
//number
var num1 = 33;
var num2 = 44;

//string
var str1 = "this is the string";
var str2 = "this is also a string";

///objects
var marks = {
    ravi: 34,
    sahil: 99,
    sam: 90

}
// console.log(marks)
var a = true;
var b = false;
// console.log(a)

// var undefined23
var und = undefined;
// console.log(und);

var n = null;
// console.log(n);
/*
at a very high level there are two types of datatypes in javascript
1. primitive detatype: undefined, null, number, string, boolean, symbol
2. refrence data types: arrays and objects
*/

var arr = [1, 2, "sahil", 4, 5]
// console.log(arr)

// opreators in javascript

var a = 55;
var b = 56;
// console.log("the value of a+b is",a+b);
// console.log("the value of a-b is",a-b);
// console.log("the value of a*b is",a*b);
// console.log("the value of a/b is",a/b);

//assignment operators

var c = b;
//c += 2;
//c -= 2; c = c-2
//c *= 2; 
//c /= 2;
// console.log(c);

//comparison operators
var x = 44;
var y = 33;
// console.log(x==y);
// console.log(x>=y);
// console.log(x>=y);
// console.log(x>y);
// console.log(x>y);

//logical operators

//logical end
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

//logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

//logical not (imp)
// console.log(!false);
// console.log(!true);


// function in javascript
// DRY = do not  repeat your self
//function avg(a, b) {
return (a + b) / 2;


c1 = avg(4, 6);
c2 = avg(5, 9);
// console.log(c1, c2);

//coditionals in javascript

/*
var age = 22;
if (age > 9){
    console.log ('you are not a kid');
}
else{
    console.log('you are a kid');
}

//if - else ladder
if(age > 30){
    console.log("abd");
}
else if (age>26){
    console.log("cad");
}
else if (age>22){
    console.log(" def");
}
else if (age>18){
    console.log("egg");
}
else{
    console.log(" end of ladder");
}
*/

//for loop

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
//  for(var i=0;i< arr,length;i++)
//  {
// if(i==2){
//     break;
//     continue;
// }
//      console.log(arr[i])
//  }

// arr.forEach(functio(element){
//     console.log(elemrnt);
// })

//while loop

//let j = 0;
// while(j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// } 

//DO WHILE LOOP

// do {
//     console.log(arr[j]);
//     j++;

// } while (j < arr.length);

let myarr = ["fan,camera, 34, nill ,true"];

//array methods
myarr.pop();
myarr.push();
myarr.shift();
myarr.unshift();;
// const newLen = myarr.unshift("sam")
// console.log(newLen);
// console.log(myarr);

// string methods in javascript

let Mylovelystring = "sam is a good boy"; 98
// console.log(Mylovelystring.length);
// console.log(Mylovelystring.indexOf("good"));
// console.log(Mylovelystring.indexOf("good"));

// console.log(Mylovelystring.slice(0,3));  (sam)
d = Mylovelystring.replace("sam ", "sahil");
// console.log(d, Mylovelystring);

myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());

// DOM Manipulation

// let elem = document.getElementById('click');
// console.log(elem);

// let elem = document.getElementsByClassName('container');
// // console.log(elem);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// // console.log(elem.innerHTML);
// console.log(elem.innerText);

//Events in javascript

function clicked() {
    //  console.log("the button was clicked")
}

//Arrow funcions
function summ(a, b) {
    return a + b;
}
summ = (a, b) => {
    return a_ + b;
}
logkaro = () => {
    // console.log("i am your log");
}
//setTimeout and setinterval
// setInterval(logkaro, 2000);

//javascript local storage

