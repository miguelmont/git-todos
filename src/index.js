import { TodoList } from './classes/todo-list.class';
import { Todo } from './classes/todo.class';
import { crearTodoHtml} from './js/componentes';
import './styles.css';

export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHtml(todo));
/* const tarea = new Todo('Aprender Javascript');


todoList.nuevoTodo(tarea);
 */

/* console.log(todoList);
crearTodoHtml(tarea);

localStorage.setItem('mi-key', 'abc123');
setTimeout(()=>{
    localStorage.removeItem('mi-key');
}, 1500); */