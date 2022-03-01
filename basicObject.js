
let student = {
    name:'srinu',
    id:'05631A0445',
    city: 'hyderabad',
    hoby:'playing volleyball',
    age:21
}

//adding new property
student.mobile= '7981415326'

//removing property
delete student.hoby

//modification of property
student.age=22
console.log(student)

//accesing values
console.log(student.age)
console.log(student['city'])    //if key is not present then it will gives as undefine

//iterating object
for(var k in student){
    console.log(k)   
}


// getting values by iterating object
for(var k in student){
    console.log(student.k)          //actuallyobject don't have k key,so it giving udefined
}


// getting values by iterating object
for(var k in student){
    console.log(student[k])          //actuallyobject don't have k key,so it giving udefined
}
