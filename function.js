function getFirstElement (arr){
<<<<<<< HEAD
    console.log(arr);
=======
    if (arr.length == 0) {
        return "Üres a tömb!"
    }
    return arr[0];
>>>>>>> feature/improvement
}
const numbers = [1, 2, 3];
const words = ["apple", "banana", "cherry"];
console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First word: ${getFirstElement(words)}`);