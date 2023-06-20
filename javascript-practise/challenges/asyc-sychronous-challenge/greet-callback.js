function greet(name, callback){
    console.log(`Hello ${name}!`);
    callback();
}
function ask(){
    setTimeout(() =>{
        console.log('this is a call back function');
    }, 2000);
}
greet('John',ask);