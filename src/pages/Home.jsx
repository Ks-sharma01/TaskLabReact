import { useEffect, useState } from "react";
import TaskCart from "../components/TaskCart";
import Index from "./Index";
import Model from "../components/Model";
import { fetchWithAuth } from "../api/fetchWithAuth";

const Home = () => {
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [formData, setFormData] = useState({
        TaskTitle: "",
        TaskDescription: "",
        TaskStatus: "",
        TaskDueDate: "",
        TaskRemarks: ""
    })
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target
            setFormData(prev =>({
                ...prev,
                [name]: value
            }))
        setError(err => ({
            ...err,
            [name]: ""
        }))
    }

    const validate = () => {
        const newErrors = {};

     if(!formData.TaskTitle.trim()){
        newErrors.TaskTitle = "Task Title is required";
     }
     if(!formData.TaskDescription.trim()){
        newErrors.TaskDescription = "Task Description is required";
     }
     if(!formData.TaskStatus.trim()){
        newErrors.TaskStatus = "Task Status is required";
     }
     if(!formData.TaskRemarks.trim()){
        newErrors.TaskRemarks = "Task Remarks is required";
     }
     if(!formData.TaskDueDate.trim()){
        newErrors.TaskDueDate = "Task DueDate is required";
     }
 
        setError(newErrors);
        return Object.keys(newErrors).length ===0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        const token = localStorage.getItem("token")
                    console.log(formData);
                    console.log(token);
      
        try{
            const api = await fetch("https://localhost:7284/api/Home/AddTask", {
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            const data = await api.json()
            console.log(data);
            setOpen(false)
        }
        catch(err){
            console.error(err);
        }

    }
    useEffect(()=>{
        if (!selectedId) return;
        fetchDataToEdit();

    }, [selectedId])
        console.log(selectedId)

       const fetchDataToEdit = async() =>{
            const fetchedData = await fetchWithAuth(`https://localhost:7284/api/Home/TaskById/${selectedId}`,{
                method: "GET"
        })
        const result = await fetchedData.json();
        const data = Array.isArray(result) ? result[0] : result;

        console.log(data);

            setFormData({
                TaskTitle: data.taskTitle,
                TaskDescription: data.taskDescription,
                TaskStatus: data.taskStatus,
                TaskDueDate: data.taskDueDate,
                TaskRemarks: data.taskRemarks
            })
        }
         
        useEffect(()=>{
            EditData();
        }, [])
            const EditData = async() =>{
                const api = await fetchWithAuth(`https://localhost:7284/api/Home/UpdateTask/${selectedId}`,{
                    method : "PUT",
                   
                })
                const data = await api.json();
                setFormData(data);
                setOpen(false);
            }
    
    console.log(formData)

    return (
        <div>
            <Index>
                <div className="flex justify-end mb-2 ">
                    <button onClick={() => setOpen(true)} className="border shadow px-6 rounded py-2 bg-blue-500 font-bold text-white cursor-pointer hover:bg-gray-500">Add </button>
                </div>
                <Model isOpen={open} onClose={() => setOpen(false)} task = {selectedId}>
                    <form className="space-y-2" onSubmit={selectedId ? EditData : handleSubmit}>

                        <div className="flex flex-col">
                            <input onChange={handleChange}
                                value={formData.TaskTitle}
                                className={`w-full outline-none rounded-md border ${error.TaskTitle ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} bg-gray-100 px-2 py-2 focus:ring-1`} type="text" name="TaskTitle" placeholder="Enter Task Title"
                            />
                            {error.TaskTitle && (
                                <span className=" text-red-500">{error.TaskTitle}</span>
                            )}
                            </div>

                        <div className="flex flex-col">
                            <textarea rows={3}
                                onChange={handleChange}
                                value={formData.TaskDescription}
                                className={`w-full outline-none rounded-md border ${error.TaskDescription ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} bg-gray-100 px-2 py-2 focus:ring-1`} name="TaskDescription" placeholder="Enter Task Description" />
                        {
                            error.TaskDescription && (
                                <span className=" text-red-500">{error.TaskDescription}</span>
                            )
                        }
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="status" className="font-medium text-gray-700">Status: </label>
                            <select name="TaskStatus"
                                onChange={handleChange}
                                value={formData.TaskStatus}
                                className={`w-full outline-none rounded-md border ${error.TaskStatus ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} bg-gray-100 px-2 py-2 focus:ring-1`}>
                                <option value=""  disabled hidden>Select an option</option>
                                <option value="Pending">Pending</option>
                                <option value="OnHold">On Hold</option>
                                <option value="Finished">Finished</option>
                            </select>

                        {
                            error.TaskStatus && (
                                <span className=" text-red-500">{error.TaskStatus}</span>
                            )
                        }

                        </div>
                        <div className="flex flex-col">
                            <input
                                onChange={handleChange}
                                value={formData.TaskRemarks}
                                name="TaskRemarks"
                                className={`w-full outline-none rounded-md border ${error.TaskRemarks ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} bg-gray-100 px-2 py-2 focus:ring-1`} placeholder="Remarks" />

                        {
                            error.TaskRemarks && (
                                <span className=" text-red-500">{error.TaskRemarks}</span>
                            )
                        }
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="dueDate" className="text-gray-700 font-medium">Due Date</label>
                            <input
                                type="date"
                                onChange={handleChange}
                                value={formData.TaskDueDate}
                                name="TaskDueDate"
                                className={`w-full outline-none rounded-md border ${error.TaskDueDate ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} bg-gray-100 px-2 py-2 focus:ring-1`}
                                />

                        {
                            error.TaskDueDate && (
                                <span className=" text-red-500">{error.TaskDueDate}</span>
                            )
                        }
                        </div>

                        <div className="flex justify-start">
                            <button type="submit" className="px-4 py-2 rounded-md font-semibold text-white bg-green-600 cursor-pointer hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">
                                {selectedId ? "Update" : "Add"}
                            </button>
                        </div>
                    </form>
                </Model>
                <TaskCart modal = {setOpen}  setSelectedId = {setSelectedId}/>
            </Index>
        </div>
    )
}
export default Home;