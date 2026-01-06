import { useEffect, useState } from "react";
import { fetchWithAuth } from "../api/fetchWithAuth";

const TaskCart = ({modal, setSelectedId}) => {
  const [task, setTask] = useState([]);
  // const [editData, setEditData] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const api = await fetchWithAuth(
          "https://localhost:7284/api/Home/AllTasks"
        );
        const data = await api.json();
        setTask(data);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchTask();
  }, []);

const sendEditData = async(id)=>{
  modal(true)
  setSelectedId(id);
}

  return (
    <div className="w-full p-3 ">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {task.map((item, index) => (
          
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between">
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
                <button onClick={()=> sendEditData(item.id)} className="text-xs px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600">
                  Edit
                </button>
                <button className="text-xs px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600">
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
        ))}
      </div>
    </div>
  );
};

export default TaskCart;
