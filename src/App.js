import './App.css';
import AddTask from './Comp/AddTask';
import FilterTask from './Comp/FilterTask';
import ListTasks from './Comp/ListTasks';

function App() {
  return (
    <div>
      <h1>ReduxChp</h1>
      <FilterTask/>
      <ListTasks/>
      <br/>
      <br/>
      <AddTask/>
    </div>
  );
}

export default App;

