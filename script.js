/*
    let username = prompt("What is your name?")
let confirmEmail = confirm("Do you confirm email&")
console.log("Welcome , " + username + "!")

console.log(`Welcome,  ${username}!`)
console.log(confirmEmail)    

    string - "Some text"
    number - 1234
    boolean - true or false

let currentYear =  2023
let userAge = 15 
let birthYear =  currentYear - userAge

console.log(birthYear)

let currentYear =  2023
let birthYear = 2008
let userAge = currentYear - birthYear

console.log(userAge)

const x = 300
const y = 50

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

const x = Number(prompt("Number x"))
const y = Number(prompt("Number y"))
const operation = prompt("What's next: +, -, *, /, %")

let result;

if (operation === "+") {
    result = x + y;
} else if (operation === "-"){
    result = x - y;
} else if (operation === "*"){
    result = x * y;
} else if (operation === "/"){
    result = x / y;
} else if (operation === "%"){
    result = x % y;
} 

alert(`Result: ${result}`);


const x = Number(prompt("(x*2 + y/5) number x: "))
const y = Number(prompt(`(${x}*2 + y/5) number y: `))
const result = x*2 + y/5

alert(`Result: ${result}`)

const Usersumma = Number(prompt("How much money do you have?: "))
const price = 500

if (Usersumma >= price) {
    alert("You can buy")
} else if (Usersumma <= price){
    alert("You can't buy")
}

const user_login =  "Admin"
const user_password  = "1234"

const candidate_login = prompt("Write your login:")
const candidate_password = prompt("Write your password:")

if (candidate_login == user_login) {
    //Всё гуд, дальше...
    if (candidate_password == user_password) {
        alert("Welcome, Admin!")
    } else {
        alert("Wrong password!")
    }
} else {
    alert("Wrong login!")
}

const randomNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;
const userGuess = Number(prompt("Угадайте число от 1 до 10:"));

if (userGuess === randomNumber) {
  alert("Поздравляем, вы угадали число!");
  score++;
} else {
  alert(`Увы, это не правильное число. Правильный ответ был: ${randomNumber}`);
  score--;
}

alert(`Игра окончена. Правильный ответ: ${randomNumber}, Ваш счет: ${score}`);

const x = Number(prompt("Number x: "))
const y = Number(prompt("Number y: "))

if (x > 0 && y > 0) {
    alert(prompt("Place I"))
} 

if (x > 0 && y < 0) {
    alert(prompt("Place II"))
} 

if (x < 0 && y < 0) {
    alert(prompt("Place III"))
} 

if (x < 0 && y > 0) {
    alert(prompt("Place IV"))
}

if (x == 0 && y == 0) {
    alert(prompt("Place V"))
}

const n = 1

for(let i = 100; i >= n; i--){
    console.log(i)
}

let sum = 0 
let min = prompt("Write min: ") //количество чисел
let max = prompt("Write max: ") //максимальное число

for (let i = 1; i <=min; i++){
    let temp = Math.random() * max
    temp = Math.floor(temp)
    console.log(temp)
    sum += temp
}

const arr = [1, 'apple', 3]
console.log(arr[1])
console.log(arr.length)

const string = 'Apple'

console.log(string[3]) 
alert(sum)

const arr = [421,123,-1,41,1245,10] //length 4 | last index = 3
let sum = 0
let min = arr[0]
let max = arr[0]
for (let i = 0; i <= arr.length-1; i++){
    sum += arr[i]
    if (arr[i] < min) { 
        min = arr[i]
    } else if (arr[i] > max) {
        max = arr[i]
    }
}

let mid = sum / arr.length

console.log(`Sum: ${sum}`)
console.log(`Min: ${min}`)
console.log(`Max: ${max}`)
console.log(`Mid: ${mid}`)

const arr = ['+', '-', '-', '*', '+']

for (let i = 0; i <= arr.length-1; i++) {
    switch(arr[i]) {
        case '+': {
            arr[i] = '-' 
            break
        }
        case '-': {
            arr[i] = '+' 
            break
        }
        case '-': {
            arr[i] = '+' 
            break
        }
        case '*': {
            arr[i] = '/' 
            break
        }
        case '+': {
            arr[i] = '-' 
            break
        }
        default:
    }
}

console.log(arr)

const user = ['Alex', 'John', 'Mike']
const newUser = 'Kate'

user.push(newUser, 'Pier')
console.log(user)

const n = 10

const fibar = [0, 1, 1]

for (let i = 3; i <= n-1; i++) {
    fibar.push(fibar[i-1] + fibar[i-2])
}

console.log(fibar)

const user = {
    email: '1234map@gmail.com',
    name: 'Alex',
    password: '1234lool',
    adress: {
        country: 'USA'
    }
}

user.login = 'Mark'
console.log(user.login)

const userlist = [
    {
        login: "Admin321",
        password: "lool"
    },
    {
        login: "Admin32",
        password: "lool1"
    },
]

console.log(userlist[1].password)

const name = prompt("What is your name?: ")
const age = prompt("How old are you?: ")
const year = prompt("In what year were you born?: ")

const userlist = {
    user: name,
    old: age,
    year: year
}

console.log(userlist)

const arr = [1, 2, 3, 4, 5];
const revarr = arr.reverse(); 

console.log(revarr);

const arr = [123, 321, 412, 456]
let sumPart1 = 0
let sumPart2 = 0

for (let i = 0; i <= arr.length-1; i++) {
    if (i < Math.round.apply(arr.length/2)) {
        sumPart1 += arr[i]
    } else {
        sumPart2 += arr[i]
    }
}

console.log(`Sum 1 ${sumPart1}`)
console.log(`Sum 2 ${sumPart2}`)

if (sumPart1 > sumPart2) {
    console.log('Sum1 > Sum2')
} else if (sumPart1 < sumPart2) {
    console.log('Sum1 < Sum2')
} else if (sumPart1 == sumPart2) {
    console.log('Sum1 < Sum2')
}

let a = 10
let b = 20

let c = a
a=b
b=c

console.log(a)
console.log(b)

let str = "Hello World"
let key = "Hello"
 
if (str.length > key.length) {
    console.log(false)
}  

const getSum = (a,b) => {
    return (a+b)
}

const sayHello = (username) => {
    console.log(`Hello! ${username}`)
}

const username = 'Mark'
sayHello(username)

const sum = getSum (15, 10)
console.log(sum)


let str = "Hello";
let key = "Hello";

if (str.length < key.length) { 
    console.log(false)
}

if (str.length = key.length)  {
    let result = 0 
    for(let i = 0; i <= str.length-1; i++) {
        if (str[i] == key[i])  {
            result += 1
        }
    }
    if (result == str.length)  {
        console.log(true)
    } else {
        console.log(false)
    }
} 

if (str.length > key.length) {
    let result = 0 
    for(let i = 0; i <= str.length-1; i++) {
        if (str[i] > key[i])  {
            result += 1
        }
    }
    if (result > str.length)  {
        console.log(true)
    } else {
        console.log(false)
    }
} 

const StartWith = (str, key) => {

    if (str.length > key.length) {
        let result = 0
        for(let i = 0; i <= key.length-1; i++) {
            if (str[i] == key[i]) {
                result += 1
            }
        }
        if (result == key.length)  {
            return true
        } else {
            return false
        }
    }
}

console.log(StartWith("Hello", "He"))


const startsum = 1000
const percent = 1.5
const month = 10 

const deposit = (startValue, percent, countMonths) => {
    const percentDecimal = percent / 100;
  
    let currentSum = startValue;
    for (let i = 0; i < countMonths; i++) {
        currentSum += currentSum * (percentDecimal * percent);
    }
  
    return currentSum;
}

const finalSum = deposit(startsum, percent, month);
console.log(`Через ${month} месяцев сумма будет ${finalSum.toFixed(2 )}`);

const products = [
    { 
        id: 1, 
        name: "Iphone", 
        price: 3000,
        count: 2
    }, 
    {
        id: 2,
        name: "TV",
        price: 5000,
        count: 1
    }
]

const totalSum = (productsArr) => { 
    let sum = 0
    
    for (const product of productsArr) {
        sum += product.price * product.count;
    }
    
    return sum
}

const result = totalSum(products);
console.log(`Общая сумма: ${result}$`);

const user = { 
    email: "example@gmail.com",
    name: "Alex",
    age: 19,
    confirmEmail: true
}


 ------------------
 email: example@gmail.com
 name: Alex
 age: 19
 confirm email: Email confirm
 ------------------


const printUser = (userInfo) => { 
    console.log("------------------")
    console.log(`${userInfo.email}`)
    console.log(`${userInfo.name}`)
    console.log(`${userInfo.age}`)
    if (userInfo.confirmEmail == true) {
        console.log("Yes")
    }
    console.log("------------------")
}

printUser(user)

const usersData = [ 
    {
        email:"1",
        name: "Alex",
        age: 15,
        confirmEmail: true
    },
    {
        email:"1123",
        name: "John",
        age: 25,
        confirmEmail: false
    },
    {
        email:"14",
        name: "Mike",
        age: 10,
        confirmEmail: true
    },
    {
        email:"2",
        name: "Kate",
        age: 35,
        confirmEmail: true
    },
]

const printUser = (userInfo) => { 
    console.log("------------------")
    console.log(`${userInfo.email}`)
    console.log(`${userInfo.name}`)
    console.log(`${userInfo.age}`)
    if (userInfo.confirmEmail == true) {
        console.log("Yes")
    }
    console.log("------------------")
}

const printAllUser = (usersArr) => {
    for (let i = 1; i <= usersArr.length-1; i++) {
        printUser(usersArr[i])
    }
}

printAllUser(usersData)
*/

