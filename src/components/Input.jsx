function Input(props) {
  return (
    <input
      className="bg-white border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props}

      /*
      -> Mesma coisa que:
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange} */
    />
  );
}

export default Input;
