let todos = [
    { title: 'Todo 1', done: false },
    { title: 'Todo 2', done: false },
    { title: 'Todo 3', done: true },
    { title: 'Todo 4', done: true },
]

let doneTodos = [];
let onGoingTodos = [];


todos.forEach(todo => {
    if (todo.done) {
        doneTodos.push(todo);
    } else {
        onGoingTodos.push(todo);
    }
})


console.log('✅ Done Todos:');
doneTodos.forEach(todo => {
    console.log(`- ${todo.title}`);
})

console.log('\n ❌ On Going Todos:');
onGoingTodos.forEach(todo => {
    console.log(`- ${todo.title}`);
})

// Output:      