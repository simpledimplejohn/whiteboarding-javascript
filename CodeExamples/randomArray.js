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
const ageArr = [];
let person = {name: "",age: 0};


for (let i = 0; i < nameArr.length; i ++) {
    person.name = nameArr[i]
    person.age = randnum()
    ageArr.push(person)
}

console.log(ageArr)