import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./TodoCard.css";
import { Checkbox } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { VscTrash } from "react-icons/vsc";

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, task, completed } = todo;

//   const [checked, setChecked] = useState(completed);

  const removeTodo = (id) => dispatch({ type: "REMOVE_TODO", id });
  const toggleCompleted = (id, completed) => dispatch({type: "TOGGLE_COMPLETED", id, completed})
  
  const handleChange = (e) => {
    const setCompleted = !completed
    console.log(setCompleted)
    console.log(completed)
    toggleCompleted(id, setCompleted)
    console.log(todo)
  };

  const removeTask = () => {
      console.log('removed')
    removeTodo(id);
  };

  return (
    <div className="TodoCard">
      <Paper className="makeStyles-paper-8 paper">
        <Grid container spacing={0}>
          <Grid item xs={11}>
            <Checkbox checked={completed} onClick={handleChange} />
            {task}
          </Grid>
          <Grid item xs={1}>
            {/* <Tooltip title="Delete">
              <VscTrash id="trash" onClick={removeTask} />
            </Tooltip> */}
            <Tooltip title="Delete">
              <IconButton aria-label="delete" onClick={removeTask}>
                <DeleteIcon id="trash" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default TodoCard;
