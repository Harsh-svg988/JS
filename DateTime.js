

const newDate = new Date();   //Create an instant Date
newDate.toLocaleDateString('default',{
    weekday:'long',

})
// console.log(newDate.toLocaleDateString());


let myCreatedDate = new Date(2024,9,31);//Custom Date
console.log(myCreatedDate.toLocaleString())


// TIME
let myTimeStamp = Date.now();
console.log(myTimeStamp);//It prints number of milliseconds from 1 JAN 1970
console.log(myCreatedDate.getTime())