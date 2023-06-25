const orders = [
    {
        userId: 1,
        amount: 10
    },
    {
        userId: 1,
        amount: 15
    },
    {
        userId: 2,
        amount: 5
    },
    {
        userId: 2,
        amount: 100
    },

];
const sum  =  orders.filter(order => order.userId === 1)
    .map(order => order.amount)
    .reduce((a, b) => a + b);
console.log(sum);
    

    



