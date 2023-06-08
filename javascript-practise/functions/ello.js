function sayHello(name){
    console.log('---------------');
    console.log('-----Hello---'+ name +'-----'+'!')
    console.log('---------------')

}
sayHello('bob');
// let a = sayHello;
// a('bon');
// a(fub);
// a(bar);
// a();
function calculateTax(amount){
    let res = amount *.0825
    return res;
}
let tax =calculateTax(100);
console.log(tax)