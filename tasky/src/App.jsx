import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';




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

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];   // making copy of the array
    tasks.splice(taskIndex, 1);    //choose the element of the array - taskIndex and remove it from the array splice()
    setTaskState({tasks});   // sets task state with updated array
  } 

    const formChangeHandler = (event) => {   //Takes in an event as a parameter
    //  (this contains the name and contents of the form field that has been changed)
    let form = {...formState};     // saves the current formState to form variable

    switch(event.target.name) {    // switch statement - updates parts of the form 
      // if change event has occurred on the title field, then the value from that field should be added to form.title
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);    // sets the form state with the updated form objects
  }

  


   const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: ""
  });

  console.log(formState);

    const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
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
      deleteTask = {() => deleteHandler(index)}

    />
  ))} 
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />

   

     



    </div>
  );

}

export default App;
