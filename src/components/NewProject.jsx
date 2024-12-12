import Input from './Input.jsx';

const NewProject = () => {

  // return <div className="w-[35rem] mt-16">
  //   <menu className="flex items-center justify-end gap-4 my-4">
  //     <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
  //     <li><button className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
  //   </menu>
  //   <div>
  //     <Input label="Title"/>
  //     <Input label="Description" textarea />
  //     <Input label="Due date" />
  //   </div>
  // </div>
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="py-2 px-4 hover:bg-stone-500 hover:text-stone-200">Cancel</button> </li>
        <li><button className="py-2 px-4 bg-stone-800 text-stone-200 rounded-md
        hover:bg-stone-400 hover:text-stone-200">Save</button></li>
      </menu>
      <div >
        <Input label="Title"/>
        <Input label="Description" textarea/>
        <Input label="Due date"/>
      </div>
    </div>
  )

}

export default NewProject;