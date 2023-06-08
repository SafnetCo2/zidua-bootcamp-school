var count =3;
if('count == 4 '){
    console.log('count is greater than 4');

}
else if(count > 4){
    console.log('count is greater than 4')
}
else if(count <4){
    console.log('count is less than four')
}else{
    console.log('count not 4')
}

//switch
let hero = 'superman';
    switch (hero){
        case 'superman':
        console.log('strong');
        break;
        case 'batman':
        console.log('great');
        break
}
// The objective of a switch statement is to give an expression to evaluate and several different statements to execute based on the value of the expression. The interpreter checks each case against the value of the expression until a match is found. If nothing matches, a default condition will be used.

switch (expression) {
    case condition 1: statement(s)
    break;
    
    case condition 2: statement(s)
    break;
    ...
    
    case condition n: statement(s)
    break;
    
    default: statement(s)
 }


 