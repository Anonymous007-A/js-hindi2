// primitive

// 7type= number. string ,boolean ,null,undefined,synbol,BigInt

const score =1000.3
let bigNumber = 2435535244543n

let id =Symbol('123')
let anotherId = Symbol('123')
console.log(id == anotherId);
console.table([id,anotherId,score,bigNumber]);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);

// refrence(Non primitive)

// Array,object,function

let heros = ["ironMan", "captian America", "hwakai"];
console.log(typeof heros);

let fun = function(){
    Name='Ankush'
    Age = 23
    console.log(fun);
}
console.log(typeof fun);
console.log(fun);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive),  heap (non primitive)

let email = "user@google.com"
let anotherEmail= email
anotherEmail = "master@outlook.com"
console.log(email);
console.log(anotherEmail);


//Heap

let userOne = {
    EmailId : "google@email.com",
   PasswordOfId : 233234

}
console.table([userOne.EmailId,userOne.PasswordOfId]);
let userTwo = userOne

userTwo.EmailId = " userOne@google.com"
userTwo.PasswordOfId = 234567

console.table([userOne.EmailId,userOne.PasswordOfId]);
console.table ([userTwo.EmailId,userTwo.PasswordOfId]);



