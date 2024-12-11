
const Button = (children, ...props) => {

  return (
    <button className="px-4 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-400
    hover:bg-stone-500" { ...props }>
      { children }
    </button>
  )
};

export default Button;