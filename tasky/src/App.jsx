import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';


function App() {

     const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Medium", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow",  priority: "High", done: false },
      { id: 3, title: "Tidy up", deadline: "Today",  priority: "Low", done: false }
    ]
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];  //make copy of tasks array
    tasks[taskIndex].done = !tasks[taskIndex].done; // it turns to the opposite value 
    setTaskState({tasks}); // take the tasks array copy and sets the opposite value state ; was faulse now its true
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }


  return (
    <div className="container">
      <h1>Tasky</h1>
        {taskState.tasks.map((task,index) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
      priority={task.priority}
      done={task.done}   // checks if it is true or faulse 
      markDone={() => doneHandler(index)}  // changes the done button to true or faulse

    />
  ))} 

    </div>
  );

}

export default App;
