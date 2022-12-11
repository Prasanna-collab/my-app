function Todo(prasanna){
     return (
          <div className='card'>
               <h1>{prasanna.title}</h1>
               <p>{prasanna.timing}</p>
               <p>{prasanna.defaultValue}</p>
               <button onClick={()=>prasanna.updatedValue("king")}>Delete</button>
               {/* here flag value is changed, using callBack function.  */}
               
          </div>
     )
}

export default Todo;