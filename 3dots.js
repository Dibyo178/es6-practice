 const ages=[12,13,14,15];
 const ages2=[11,2,4,54,23];
 const allAges=ages.concat([5]).concat(ages2);
// dots method
const allAges2=[...ages,5,...ages2]
// for max no 3 dots...
const n1=500;
const n2=700;
const n3=900;
const taka=[100,2,54,5];
// const maximum=Math.max(n1,n2,n3);
const maximum=Math.max(...taka);
 console.log(maximum);