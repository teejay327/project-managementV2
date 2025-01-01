import Button from './Button.jsx';

const ProjectsSidebar = () => {

    return (
      <aside className="w-1/3 px-8 py-16 font-bold bg-stone-600 text-stone-400 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Team projects</h2>
        <Button>
          + Add project
        </Button>
      </aside>
    )
};

export default ProjectsSidebar;