const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';

}

// const secondTodoList = [];
// function secondAddTodo () {
//   const secondInputElement = document.querySelector('.js-name-input-second');

//   const name = secondInputElement.value;
//   secondTodoList.push(name);
//   // console.log(secondTodoList);
//   const displayElement = document.querySelector('.js-display-todo');

//   secondInputElement.value = '';

//   for(let i = 0; i < secondTodoList.length; i++) {
//     const value = secondTodoList[i];
//     displayElement.innerHTML = `<p>${value}</p>`;
//     console.log(value);
    
//   }
// }