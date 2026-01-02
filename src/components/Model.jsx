import { createPortal} from "react-dom"
const Model = ({ isOpen, onClose, children}) =>{
    if(!isOpen) return null;

   return createPortal(
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center"
  >
    <div    
      className="bg-white p-8 rounded-lg flex flex-col w-125"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="px-3 py-2 rounded text-white bg-red-500 cursor-pointer hover:bg-red-600"
        >
          Close
        </button>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Add Task</h2>
      </div>

      <div className="mb-2">
        {children}
      </div>

    </div>
  </div>,
  document.querySelector("#model-root")
);

}

export default Model;