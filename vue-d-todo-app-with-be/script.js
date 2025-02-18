Vue.createApp({
  data() {
    return {
      apiUrl: "http://localhost:3000/todos/",
      todos: [],
      userInputNewTodo: "",
      showHint: false,
      activeFilter: "all",
      filters: JSON.parse(localStorage.getItem("filters")) || {
        all: true,
        open: false,
        done: false,
      },
    };
  },
  computed: {
    filteredTodos() {
      if (this.activeFilter === "open") {
        return this.todos.filter((todo) => !todo.done);
      } else if (this.activeFilter === "done") {
        return this.todos.filter((todo) => todo.done);
      } else {
        return this.todos;
      }
    },
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }
        return (this.todos = await response.json());
      } catch (error) {
        console.error("Error fetching todos:", error);
        this.todos = []; // fallback
      }
    },

    async updateTodoState(todo) {
      try {
        const response = await fetch(`${this.apiUrl}${todo.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ done: todo.done }), // Send updated 'done' state
        });
        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    },

    async addTodo() {
      // Remove spaces from user input
      const inpNewTodoValue = this.userInputNewTodo.trim();

      // Check if user input is empty
      if (inpNewTodoValue === "") {
        this.userInputNewTodo = "";
        this.$refs.newTodoInput.focus();
        return;
      }

      // Check if user tries to add a duplicate todo
      if (
        this.todos.some(
          (todo) =>
            todo.description.toLowerCase() === inpNewTodoValue.toLowerCase()
        )
      ) {
        this.userInputNewTodo = "";
        this.$refs.newTodoInput.focus();
        this.showHint = true; // Show hint

        setTimeout(() => {
          this.showHint = false; // Hide hint
        }, 2000);
        return;
      }

      // Add new todo to backend
      await this.postNewTodo(inpNewTodoValue); // pass todo description to the postNewTodo function

      this.userInputNewTodo = ""; // Clear input after adding
      this.$refs.newTodoInput.focus(); // Focus the input field

      // Scroll to the bottom of the list after the new todo is added
      this.$nextTick(() => {
        const listContainer = this.$refs.todoList;
        if (listContainer) {
          listContainer.scrollTop = listContainer.scrollHeight;
        }
      });
    },

    async postNewTodo(inpNewTodoValue) {
      try {
        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ description: inpNewTodoValue, done: false }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }

        const newTodo = await response.json();
        this.todos.push(newTodo);
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    },

    async removeDoneTodos() {
      const doneTodos = this.todos.filter((todo) => todo.done === true);

      for (const todo of doneTodos) {
        await this.deleteDoneTodos(todo.id);
      }
      //  After all deletes, update list view
      await this.fetchTodos();
    },

    async deleteDoneTodos(todoId) {
      try {
        const response = await fetch(`${this.apiUrl}${todoId}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    },

    setFilter() {
      // Reset all filters to false
      Object.keys(this.filters).forEach((filterKey) => {
        this.filters[filterKey] = false;
      });

      // Set the selected filter to true based on the activeFilter
      this.filters[this.activeFilter] = true;

      // Save the updated filters to localStorage
      this.saveFilterToLocalStorage();
    },

    saveFilterToLocalStorage() {
      localStorage.setItem("filters", JSON.stringify(this.filters));
    },
  },

  created() {
    this.fetchTodos();
  },
}).mount("#app");
