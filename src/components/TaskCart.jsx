import { useEffect, useState } from "react";
import { fetchWithAuth } from "../api/fetchWithAuth"

const TaskCart = () => {
    const [task, setTask] = useState([]);
    
    useEffect(()=>{
        try{
            const fetchTask = async() =>{
            const api = await fetchWithAuth("https://localhost:7284/api/Home/AllTasks")
            const data = await api.json()
            setTask(data);
        }
        fetchTask();
    }
    catch(err){
        console.log(err)
    }
    },[])
    return (
        
        <div className="w-full flex justify-around gap-3 mt-4">
            <div className="bg-gray-300 rounded shadow h-50 w-60">
           <div className="flex justify-between p-2">
            <div className="flex flex-col overflow">
            <span>Pending</span>

            <div>Task Titlefskdflsdfjsdfkdflljjfdasdhfksdfshkjkdfhfsdfhwefkds</div>
           
            </div>
            <div className="flex flex-col gap-2">
                <button className="bg-green-400">edit</button>
                <button className="bg-red-500">delete</button>
            </div>
           </div>
           <div className="p-2">
            title description
           </div>
            </div>
            <div className="bg-gray-300 rounded shadow h-50 w-60">
            fdjsf
            </div>
            <div className="bg-gray-300 rounded shadow h-50 w-60">
            djfslkf
            </div>
            <div className="bg-gray-300 rounded shadow h-50 w-60">
            ldjsf
            </div>
            <div className="bg-gray-300 rounded shadow h-50 w-60">
            ldjsf
            </div>
        </div>

    )
}

export default TaskCart;