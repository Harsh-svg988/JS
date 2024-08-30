

const newDate = new Date();   //Create an instant Date
newDate.toLocaleDateString('default',{
    weekday:'long',

})
console.log(newDate.toLocaleDateString());