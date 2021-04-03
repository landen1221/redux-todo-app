import './App.css';
import TodoForm from './TodoForm';
import TodoCard from './TodoCard';
import Navbar from './Navbar';
import {useSelector} from 'react-redux'

function App() {
  const todos = useSelector(store => store.todos)
  const completedTodos = todos.filter((todo) => todo.completed === true)
  const unCompletedTodos = todos.filter((todo) => todo.completed === false)

  return (
    <div className="App">
      <Navbar />
      <h1>Write it down, get it done...</h1>
      <TodoForm todos={todos}/>
      <h4 id="myTasks">Current Tasks:</h4>
      {unCompletedTodos.length > 0 ? "" :<p id="myTasks">- You're all caught up!</p>}

      {unCompletedTodos.map((todo) => <TodoCard key={todo.id} todo={todo}/>)}

      <h4 id="myTasks">Completed Tasks:</h4>
      {completedTodos.map((todo) => <TodoCard key={todo.id} todo={todo}/>)}
    </div>
  );
}

export default App;
