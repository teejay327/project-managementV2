import { useRef } from 'react';
import Input from './Input.jsx';

const NewProject = ({ onAdd }) => {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      desciption: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="py-2 px-4 hover:bg-stone-500 hover:text-stone-200">Cancel</button> </li>
        <li><button onClick={ handleSave } className="py-2 px-4 bg-stone-800 text-stone-200 rounded-md
        hover:bg-stone-400 hover:text-stone-200">Save</button></li>
      </menu>
      <div >
        <Input type="text" ref={ title } label="Title"/>
        <Input ref={ description } label="Description" textarea/>
        <Input type="date" ref={ dueDate } label="Due date"/>
      </div>
    </div>
  )

}

export default NewProject;