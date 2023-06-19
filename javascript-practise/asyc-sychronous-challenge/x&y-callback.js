let x = function(){
    console.log('will be called inside another function');
};
let y = function(callback){
    console.log('x will be called as a parameter in my function')
    callback();

};
y(x);
//why call back is important
let calc = function(num1,num2,calcType){
    if(calcType === 'add'){
        return num1 +num2;
    }
    else if(calcType === 'multiply'){
        return num1*num2;
    }
    
};
console.log(calc(2,3, 'add'));
//output 5


//2 f
let add = function(a,b){
    return a+b;
}; 


let multiply= function(a,b){
    return a*b;
}; 


let calc = function(num1,num2,callback){

    return callback(num1,num2);

};
console.log(calc(2,3, add), 3000);