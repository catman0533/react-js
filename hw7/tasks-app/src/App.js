// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './tasksSlice';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const status = useSelector((state) => state.tasks.status);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Task List</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load tasks.</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
