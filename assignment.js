// 1  Write a program to add two numbers.

var arrey=[10,20]
arrey.push(30,40)
console.log(arrey)


//2  Check if a number is even or odd.

var number=87
if(number%2==0){
    console.log("Even")
}
else{
    console.log("odd")
}

//3  Find the largest of three numbers.

var largestNumber=0
for(i=0;i<arrey.length;i++){
    if(largestNumber<arrey[i]){
        largestNumber=arrey[i]
    }
}console.log(largestNumber)


//4      Convert Celsius to Fahrenheit.

var calcius=25
var farhenint=(calcius*9/5)+32
console.log(calcius+"c="+ farhenint + "F")



//5   Calculate the sum of all numbers from 1 to 100 using a loop.

var loop=0
for(i=1; i<=100; i++)
    loop=loop+i
console.log(loop)


