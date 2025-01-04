// import { forwardRef  } from "react";
import { forwardRef } from 'react';

// const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
 const classes = "w-full p-1 border-stone-300 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return <p className="flex flex-col gap-1 myt-4">
      <label className="text-sm uppercase font-bold text-stone-500">{ label }</label>
      { textarea ? <textarea ref={ ref } className={ classes } {...props}/> : <input ref={ ref } className={ classes } /> }
    </p>
});

export default Input;