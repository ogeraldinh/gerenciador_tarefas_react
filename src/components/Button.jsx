function Button({className = "", variant = "default", ...props}) {
  const variants = {
    default:
      "hover:bg-slate-600",
    delete:
      "hover:bg-red-900",
  };
  const baseClasses =
    "bg-slate-400 text-white p-2 rounded-md cursor-pointer transition-colors";

  const variantClasses = variants[variant] || variants.default;
  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
