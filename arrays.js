function testArray() {
  return 5;
}

// create an array with 5 items, name it myArray
//const myArray
const myArray = [5, "show", "90", 0, "Rio"];

// assign the length of array to arrayLength
//const arrayLength
const arrayLength = myArray.length;

const fastFuriousMen = ["Paul", "Tyrese"];
// add Vin to the end of fastFuriousMen
//const menAVin
fastFuriousMen.push("Vin");
const vinLast =  [...fastFuriousMen]

//now add Luda to the beginning of menVin
// let menLuda = menVin.unshift("Luda");
fastFuriousMen.unshift("Luda")
const ludaFirst = [...fastFuriousMen]
// // now add an array of the ladies to menLuda
const ladiesCast = ["Cardi", "Michelle", "Ronda"];

const allCast = fastFuriousMen.concat(ladiesCast)

const showAllCast = [...allCast]
console.log(showAllCast)
// remove 1 item from the beginning of the array
allCast.shift()

const removeBeginning = [...allCast]
// remove 1 item from the end of the array
allCast.pop()

const removeEnd = [...allCast]

// write a function that takes removeEnd and returns second item
const return2ndItem = ( arr ) => {
   return arr[1]
}

return2ndItem(removeEnd)

//write a function that returns an array of cast members whose names are longer than 4 letters
// function should take the parameter showAllCast

const castMoreThan4 = (arr) => {
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if (arr[i].length > 4){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log('showAllCast', showAllCast)

castMoreThan4(showAllCast)

console.log(castMoreThan4(showAllCast))

// make a function that takes an array as a parameter, and add the first and last numbers of the array

// make a function that takes an array as a parameter, if the array has a number 3
// it will console.log 'I have 3', if not console.log 'No 3'

// explain for loop
// for(let i=0; i<catsArray.length; i++)
// for - type of loop
// let - define variable i
// i < catsArray.length - number i less than the length of cats array
// i++ - add 1 to number i

// how would you reverse a for loop, start with last item and go to first.
// for(let i=catsArray.length; i>=0; i--)

module.exports = { testArray, myArray, arrayLength, vinLast, ludaFirst, showAllCast,
    removeBeginning,
    removeEnd,
    return2ndItem,
    castMoreThan4,
 };
