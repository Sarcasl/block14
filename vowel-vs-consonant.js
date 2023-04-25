//Create a code that accepts a string of lowercase letters
//Print the word with how many consonants and vowels it has


let vowelCount = 0
let constCount = 0
let inputTest = "textbook"

const vowels = ["a","e","i","o","u"];



for (let i =0; i < inputTest.length; i++){
    if (vowels.includes(inputTest[i])){
        vowelCount+=1
    }else{
        constCount++
    }    
}
console.log(`${inputTest} has ${constCount} consonants and ${vowelCount} vowels.`)

        
        




