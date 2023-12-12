// task add the letter a to each name and double the age
let update = {}

const people = [
    { name: 'fred', age: '7', color: 'blue'},
    { name: 'bob', age: '8', color: 'red'},
    { name: 'top', age: '4', color: 'toap'},
    { name: 'kevin', age: '17', color: 'mauve'},
    { name: 'toad', age: '71', color: 'orange'},
]



people.forEach((e)=>{
    update = {
        name: e.name + " a"
    }
    console.log(update) 
})
// console.log(update)