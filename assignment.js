// 1
var arrey=[10,20]
arrey.push(30,40)
console.log(arrey)

//3
var largestNumber=0
for(i=0;i<arrey.length;i++){
    if(largestNumber<arrey[i]){
        largestNumber=arrey[i]
    }
}console.log(largestNumber)


//5

var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Sum of numbers from 1 to 100 is:", sum);


