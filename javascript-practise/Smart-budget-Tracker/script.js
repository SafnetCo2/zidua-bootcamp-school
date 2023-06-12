let expenses =[];
let totalAmount =0;

const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expenseBody = document.getElementById("expense-tbody");
const totalAmtCell =document.getElementById("total-amount");


addBtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;
    //validate user value

    if(category === ''){
        alert('please select category');
        return;
    }
    if(isNaN(amount) || amount <=0){
        alert('enter a valid amount');
        return;
    }
    if(date === ''){
        alert('select a date');
        return;
    }

    expenses.push({category, amount, date });
        // display amount
        totalAmount += amount;
        totalAmtCell.textContent = totalAmount;

        const newRow = expense-tbody.insertRaw();
        
        const categoryCell = newRow.insertCell();
        const amountCell = newRow.insertCell();
        const dateCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();
        const deleteBtn =document.createElement('button');

        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click',function(){
            expenses.splice(expenses.indexOf(expense),1);
            totalAmount -= expenses.amount;
            totalAmtCell.textContent=total;
            expense-tbody.removeChild(newRow);
        });
    
    
        
        const expensess = expenses.(expense.length -1);
        categoryCell.textContent = expense.category;
        amountCell.textContent =expense.amount;
        dateCell.textContent =expense.date;
        deleteCell.appendChild(deleteBtn);

});
for (const expense of expenses){
    totalAmount += expense.amount;
    totalAmtCell.textContent =totalAmount;


    for (const expense of expenses) {
        totalAmount += expense.amount;
        totalAmountCell.textContent = totalAmount;
        const newRow =expense-tbody.insertRow();
        const categoryCell = newRow.insertCell();
        const amountCell = newRow.insertCell();
        const dateCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();
        const deleteBtn =document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function(){
            expenses.splice(expenses.indexOf(expense),1);
            totalAmount -=expenses.amount;
            totalAmtCell.textContent=totalAmount;
            expense-tbody.removeChild(newRow);
    });
    const expense = expenses.[expenses.length -1];
    categoryCell.textContent = expense.category;
    amountCell.textContent =expense.amount;
    dateCell.textContent =expense.date;
    deleteCell.appendChild(deleteBtn);

}
}

