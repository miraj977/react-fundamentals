
import Fundamentals from './Fundamentals';
import Task from './Task';
import './App.css';

function App ()
{
  return (
    <div className="App">
      <div className="container">
        <h1 className="center main-title">React Fundamentals</h1>
        <Fundamentals />
        <hr />
        <Task title="Task Tracker" />
      </div>
    </div>
  );
}

export default App;
