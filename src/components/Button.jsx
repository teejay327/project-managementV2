
const Button = ({ children, ...props }) => {

  return (
  <button className="m-2 p-3 bg-stone-800 text-stone-500 hover:bg-stone-400 hover:text-stone-700 rounded-md"
    { ...props }
  >
    { children }
  </button>
  )
};

export default Button;