// create a random number between two values


// this creates the random number

const randnum = () => {        
        let min = 0
        let max = 100
        let rand = 0;
        rand = Math.random() * (max - min) + min 
        rand = Math.round(rand)
        return rand
}




// challege, take an array of names, create an array of objects that contains the name and an age

const nameArr = ["bob", "fred", "tom", "buzz", "max"];
const color = ["blue","red","orange","red","green"];
const ageArr = [];
let person = {name: "",age: 0};

for(names in nameArr) {
    console.log(name)
}

// for(names in name) {
//     person.name = name[names];
//     person.age = randnum()
//     ageArr.push(person) 
// }
console.log(ageArr)