import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TextField, Button, List, ListItem, ListItemSecondaryAction, ListItemText, Card, CardContent } from '@mui/material';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="outlined"
      />
      <Button onClick={handleAddTask} variant="contained" color="primary">
        Добавить задачу
      </Button>
      <List>
        {todos.map((todo, index) => (
          <Card key={index}>
            <CardContent>
              <ListItem>
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                  <IconButton aria-label="delete" onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </div>
  );
};

export default TodoApp;
