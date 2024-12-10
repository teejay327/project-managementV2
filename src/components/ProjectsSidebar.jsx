
const ProjectsSidebar = ({ onHandleAddProject }) => {

    return (
      <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-200 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Team projects</h2>
        <button onClick={ onHandleAddProject } className="px-4 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-400
           hover:bg-stone-500">
          + Add project
        </button>
      </aside>
    )
};

export default ProjectsSidebar;