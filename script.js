function todos() {
    return {
        newTodo: '',
        todos: [],
        addTodo() {
            if (this.newTodo.trim() === '') return;
            this.todos.push({ text: this.newTodo, completed: false });
            this.newTodo = '';
        },
        toggleTodo(index) {
            this.todos[index].completed = !this.todos[index].completed;
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        isLightTheme: false,
        toggleTheme() {
            this.isLightTheme = !this.isLightTheme;
        }
    };
}