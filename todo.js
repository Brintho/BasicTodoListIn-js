// Brinto code :  
// 1. Create a list of todos with title and done status
let todos = [
    { title: 'Todo 1', done: false },
    { title: 'Todo 2', done: false },
    { title: 'Todo 3', done: true },
    { title: 'Todo 4', done: true },
]

// 2. Create a function that takes a todo and returns true if the todo is done
let doneTodos = [];
let onGoingTodos = [];


// 3. Create a function that takes a todo and returns true if the todo is not done
todos.forEach(todo => {
    if (todo.done) {
        doneTodos.push(todo);
    } else {
        onGoingTodos.push(todo);
    }
})

// 4. Print the list of todos with their status
console.log('✅ Done Todos:');
doneTodos.forEach(todo => {
    console.log(`- ${todo.title}`);
})


// 5. Print the list of todos with their status
console.log('\n ❌ On Going Todos:');
onGoingTodos.forEach(todo => {
    console.log(`- ${todo.title}`);
})
