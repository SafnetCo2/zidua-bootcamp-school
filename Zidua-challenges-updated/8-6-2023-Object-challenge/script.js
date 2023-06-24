const users = [
    {name:"Tom",age: 30,city: "Newyork" ,newyork: true},
    {name:"Peter",age:2,city:"chicago",chicago: true}, 
    {name:"Jose",age:40,city:"Newyork",newyork:true},
    {name:"Mrka",age:60,city:"chicago",chicago:true},
    
];

//for..of,map,filter{
// for(let user of users){
//     console.log(user);
// }
//for...in
//returns key of object and the loop
// const user = users[0];
// for(let userProp in user){
    //console.log(userProp);
    //console.log(userProp,user[userProp]);
    //returns key and its value
// }
//filter

const filterUsers =users.filter(user=>{
    return user.newyork;
});
console.log(filterUsers);



/* */
// const filterUsers =users.filter(user=>{
//     return user.age;
// });
// console.log(filterUsers);


//find 
// const foundUser =users.find(user =>{
//     return user.name === 'Tom';
// });
// console.log(foundUser);


//findIndex matching index
// const foundUser =users.findIndex(user =>{
//         return user.name === '';
//     });
//     console.log(foundUser);


//map
// const name =users.map(user =>{
//     return user.name;
// });
// console.log(users.)
