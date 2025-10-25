//1  Find the length of a string.

var Hi="Hallo"
console.log(Hi.length)

//2     Convert a string to uppercase and lowercase.


var text="Hallo World"
console.log(text.toUpperCase())
console.log(text.toLowerCase())

//3   Count how many vowels are in a given string.
let word="My name is Sady"
let vowels="aeiouAEIOU"
let count=0
for(i=0;i<word.length;i++)
    if(vowels.includes(word[i])){
        count++
    }console.log("vowels:",count)



//4    Reverse a string without using built-in methods.
 
let string="Hallo Guys"
let Reversestring=""
for(let i=string.length-1;i>=0;i--){
    Reversestring=Reversestring+string[i]
}console.log(Reversestring)


//5   	Check if a string is a palindrome.
 
let words= "maam"
let Reverse=""
for(let a=words.length-1;a>=0;a--){
    Reverse+=words[a]
}if(words==Reverse){
    console.log("PLAINDROME")
}
else{
    console.log("NOT PLAINDROME")
}



