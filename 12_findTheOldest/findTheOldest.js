const findTheOldest = function(arr) {
    return arr.reduce( (oldestPerson, person) => {
        let age = 0;

        if ("yearOfDeath" in person) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = (new Date()).getFullYear() - person.yearOfBirth;
        } 

        if (age > oldestPerson.age) {
            oldestPerson.age = age;
            oldestPerson.name = person.name;
        };
        return oldestPerson;
    }, {age: 0, name: ''} );
};

/* Note:
We also can omit the initial value:
-  If there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element. (the solution did)
- If the array is empty, then reduce call without initial value gives an error. (!important)
*/

// Do not edit below this line
module.exports = findTheOldest;
