const person={name:'sourov',age:23,gfName:'deeya',cNo:'01768305455'};

const {name,gfName,cNo,salary} =person;

// const gfName=person.gfName;
// const cNo=person.cNo;


// console.log(gfName,cNo,name,salary);
// console.log(gfName,cNo,name,salary);

const complexObject ={
    name:'abc',
    info:{
        address:'kola bagan',
        leader:'Tiger leader'
    }
}
const {leader}=complexObject.info;
console.log(leader);

const allFriends=['sourov','debarati','dibyo','deeya']
const[first,...oldFriends]=allFriends;
console.log(oldFriends);