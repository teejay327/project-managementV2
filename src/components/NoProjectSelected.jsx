import Button from './Button.jsx'
import NoProjectImage from '../assets/no-projects.png';

const NoProjectSelected = () => {

  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={ NoProjectImage }/>
      <h2 className=" my-4 text-xl font-bold text-stone-600">No project selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p classNamer="mt-8">
        <Button>Create a new project</Button>
      </p>
    </div>
  )
};

export default NoProjectSelected;