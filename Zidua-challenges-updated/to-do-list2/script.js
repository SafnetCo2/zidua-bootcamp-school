const textInputField = document.querySelector('#text-input-field');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');



    addButton.addEventListener('click', () => {
        // const textInputField = input.value;
        // input.value = '';
     if (textInputField.value.trim().length == '')
        return;
    //create div add class todo-item-container

    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer);
    //create p element and id = todo=text
    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    
        todoItemContainer.appendChild(todoText);


        //add double click to todoText
        todoText.addEventListener('dblclick', () => {
            todoText.classList.add('line-through');
            editButton.setAttribute('disabled', 'disabled');
            
        });

        //create edit button add=id edit buton
        const editButton = document.createElement('button');
        editButton.id = 'edit-button';
        
        // //create img add to button
         const editImage = document.createElement('img');
         editImage.src = 'icons8-edit.svg';
        editButton.appendChild(editImage);
        todoItemContainer.appendChild(editButton);
        //add click event to do edit-button 
        editButton.addEventListener('click', () => {
            textInputField.value = todoText.innerText;
            const parent = editButton.parentElement; parent.parentElement.removeChild(parent);
        });

        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete-button';
        //create image add to delete button
        const deleteImage = document.createElement('img');
        deleteImage.src = 'icons8-delete.svg';
        deleteButton.appendChild(deleteImage);
        todoItemContainer.appendChild(deleteButton);

        //add click event for deleteButton
        deleteButton.addEventListener('click', () => {
            const parent = deleteButton.parentElement;
            parent.parentElement.removeChild(parent);
        });
    
    
    
    
    
  textInputField.value='';
});