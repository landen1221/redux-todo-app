import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./TodoForm.css";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

const TodoForm = () => {
    console.log('git testing')
    const dispatch = useDispatch()
    const addTodo = (todo) => dispatch({type: "ADD_TODO", payload: todo})
    const INITIAL_STATE = { task: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let postTodo = {...formData, ['id']: uuid(), ['completed']: false}
    setFormData({ task: "" });
    addTodo(postTodo)
  };

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <TextField
          id="task"
          name="task"
          label="Task:"
          style={{ margin: 8 }}
          placeholder="Add New Todo"
          helperText="&nbsp;Press 'enter' to add task"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.task}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TodoForm;
