const names = require('./names.js')
const hobbies = require('./hobbies.js')

function people() {
    const newPeople = names('Paolo', 'Rossi')
    const newHobbies = hobbies('Calcio', 'Videogames','Tecnologia')
    const { firstName, lastName } = newPeople
    const { hobbies: hobbiesArray } = newHobbies
    return {
        firstName,
        lastName,
        hobbies: hobbiesArray
    }
    
}

console.log(people());
