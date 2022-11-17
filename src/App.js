import './App.css';
import TodolistClass from './components/todolistClass';
import TodolistFunction from './components/todolistFunctional';
function App() {
  return (
    <div className="App">
      <h1>Using Class Components</h1>
      <TodolistClass />
      <h1>Using Functional Component with Hooks</h1>
      <TodolistFunction />
    </div>
  );
}

export default App;
