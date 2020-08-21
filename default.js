function add(n1,n2=20) {
    if(n2==undefined){
        // n2=0;
        // n2=n2||20;
    }
    return n1+n2;
}
const total=add(12);
console.log(total);