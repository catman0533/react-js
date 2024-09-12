import React from 'react';
import TemperatureConverter from './TemperatureConverter/TemperatureConverter';
import TodoList from './TodoList/TodoList';

const App = () => {
  return (
    <div className="App">
      <TemperatureConverter />

      <h1>Список дел</h1>
      <TodoList />
    </div>
  );
};

export default App;
