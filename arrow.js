// function dubbleIt(num) {
//     return num*3;
// }
// const dubbleIt=function(num){
//     return num*3;
// }
// ES6 arrow function...
const doubleIt=num=>num*2;
const give=()=>5
const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
const result=doubleIt(5);
const result2=give();
const result3=doMath(12,30);
console.log(result3);