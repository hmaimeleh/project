import React from 'react';


function Project() {
  return (
    <div  className="App"> 
    <h1> Task List Application </h1>
      <form>
      <input type="text" style={{
        padding: "20px",
        margin: "10x",
        fontSize: "10x",
        outline: "none",
  
      }} 
      placeholder='Add Todo'/>
      <input type="submit" style= {{ backgroundColor: "green", color: "fff" }}
      />
     </form>
     </div>
  )
    
    }

  
export default Project; 
