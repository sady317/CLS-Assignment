//15
var Myself={
    Name:"Sady",
    Profession:"Student",
    City:"Moulavibazar",
}
var values= Object.values(Myself)
console.log(values)

// 16
var numbers=[10+20+40+52+83]
var average=numbers/5
console.log(average)



//17
var arrey=[10,62,38,74,57,29,35,]
var highestnumber=0
for(var i=0; i<arrey.length;i++){
    if(highestnumber<arrey[i])
        highestnumber=arrey[i]
}console.log(highestnumber)


//19
var subject={
    English:52,
    Bangla:70,
    Math:40,
    Science:78,
    Islam:84,
}
var keys=Object.keys(subject)
var values=Object.values(subject)
// console.log(keys)

for(var contant in keys){
    var list=keys[contant]
console.log(keys[contant],":", subject[list])
}
