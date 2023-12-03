import { twMerge } from "tailwind-merge";

function Button({
  variant = "primary",
  size = "medium",
  children = "Button",
  type = "button",
  extraClassName = "",
  onClick = () => {},
  onSubmit = () => {},
}) {
  const sizes = {
    large: "px-6 py-3 font-semibold",
    medium: "px-4 py-2 font-medium",
    small: "px-3 py-1 font-normal",
  };

  const variants = {
    primary:
      "h-fit bg-primary-600 rounded-md hover:opacity-90 text-white focus:outline-none",
    outline: "h-fit border border-primary-500 rounded-md focus:outline-none",
  };

  const className = twMerge(
    variants[variant] + " " + sizes[size],
    extraClassName
  );

  return (
    <button
      onSubmit={onSubmit}
      onClick={onClick}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
