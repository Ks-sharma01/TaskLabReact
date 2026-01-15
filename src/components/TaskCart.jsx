
const TaskCart = ({modal, setSelectedId, tasks, setTasks, searchText}) => {

const token = localStorage.getItem("token")

const sendEditData = async(id)=>{
  modal(true)
  setSelectedId(id);
}

  const deleteTask = async (id)=>{
    if(!window.confirm("Are you sure want to delete this task?")) return;
    try{
     const res = await fetch(`https://localhost:7284/api/Home/DeleteTask/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
      
    })
    if(res.ok){
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
    else alert("Failed to delete task");
  }
  catch(err){
    throw new Error(err);
  }
}

  const filteredSearch = tasks.filter((task) => 
  `${task.taskTitle} ${task.taskDescription}`.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="w-full p-3 bg-gray-100 rounded">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          filteredSearch.length > 0 ? (

            filteredSearch.map((item, index) => (
              
              <div
            key={index}
            className="bg-white rounded-xl hover:shadow-2xl transition cursor-pointer duration-300 flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-between items-start p-3 border-b">
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-semibold text-orange-600">
                  {item.taskStatus || "Pending"}
                </span>

                {/* Title with overflow control */}
                <h3 className="text-sm font-semibold text-gray-800 truncate max-w-40">
                  {item.taskTitle}
                </h3>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-1">
                <button onClick={()=> sendEditData(item.id)} className="text-xs px-2 py-1 cursor-pointer rounded bg-green-500 text-white hover:bg-green-600">
                  Edit
                </button>
                <button onClick={() => deleteTask(item.id)} className="text-xs px-2 py-1 cursor-pointer  rounded bg-red-500 text-white hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="p-3 text-sm text-gray-600 overflow-hidden">
              <p className="line-clamp-3">
                {item.taskDescription || "No description available"}
              </p>
            </div>

            {/* Footer */}
            <div className="px-3 py-2 text-xs text-gray-500 border-t">
              Due: {item.taskDueDate || "Not set"}
            </div>
          </div>
        ))
      ) : (
         <p className="text-gray-500 text-sm col-span-full text-center">
            No tasks found
          </p>
      )
      
      }
        </div>
        </div>
      );
    };
    
export default TaskCart;






