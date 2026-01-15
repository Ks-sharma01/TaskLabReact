const NavLink =()=>{
  //  const filteredSearch = tasks.filter((task) => 
  // `${task.taskTitle} ${task.taskDescription}`.toLowerCase().includes(searchText.toLowerCase())
  // )
  const pendingTasks =() =>{
    
  }
    return(
<div className="flex bg-gray-200 p-1 rounded-lg w-fit shadow-sm">
      <button className="px-4 py-2 text-sm font-semibold rounded-md bg-white text-gray-800 shadow transition cursor-pointer">
        All
      </button>
      <button className="px-4 py-2 text-sm font-semibold rounded-md text-gray-800 ml-1 hover:bg-white transition cursor-pointer">
        Pending
      </button>
      <button className="px-4 py-2 text-sm font-semibold rounded-md text-gray-600 ml-1 hover:bg-white transition cursor-pointer">
        Completed
      </button>
</div>

    )
}
export default NavLink;