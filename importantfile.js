let arr =["sady","ahmed","chowdhury"]

// arr.pop()  //akdom seser word muche jave
// arr.push("iftekar")  //akdom sese word add hobe
// arr.shift()  //protemr word muche jave
// arr.unshift("iftekar")  // proteme word add hobe



let array=[1,2,3,4,5,5,5,6,6,6,7,8]
// array.filter((n)=>console.log(n))
//MAP METHOD
let specific=5
let find=array.map((n)=>n==specific)
// console.log(find)



arr[1]="iftekar"
// console.log(arr)


// array.map((n)=>console.log(n))

//FIND METHOD
let specificnum=6
let findnum=array.find((n)=>n==specificnum)
// console.log(findnum)


//FILTER METHOD
let filter=6
let filternum=array.filter((n)=>n==filter)
console.log(filternum)



/// Even,Odd
let number=0
if(number%2==0 && number!=0){
    console.log("EVEN")
}
else if(number%2!==0){
        console.log("Odd")
    }
    else{
        console.log("infinity")
    }

//num positive,negative abong zero
    let num=0
    if(num>0){
        console.log("positive")
    }
    else if(num<0){
        console.log("negative")
    }
    else{
        console.log("zero")
    }


 /// age avilabele kina vote ar jonno seti check kora   
let age=22
if(age>=18){
    console.log("you are available for vote")
}
else{
    console.log("you are not available for vote")
}


//kunti boro seti berkorte ati use kora hoy
let a=12
let b=12
if(a>b){
    console.log("a is greater than b")
}
else if(a<b){
    console.log("b is greater than a")
}
else{
    console.log("both are equal")
}


//finding vowels in a word
let text="My name is sady and i'm a student"
let vowels="aeiouAEIOU"
let count=0
for(i=0;i<text.length;i++){
    if(vowels.includes(text[i])){
        count++
    }
}console.log("vowels:",count)


//reverseing word without using built in methods
let word="sady"
let reverseword=""
for(let i=word.length-1;i>=0;i--){
    reverseword=reverseword+word[i]
}console.log(reverseword)


///rule of finding higestnumber
let highesnumber=0
for(let i=0;i<array.length;i++){
    highesnumber+array[i]
        highesnumber=array[i]
    }
console.log(highesnumber)