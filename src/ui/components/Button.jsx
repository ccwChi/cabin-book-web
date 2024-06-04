const Button = ({
  size = "medium",
  variation = "primary",
  children,
  ...props
}) => {
  const sizeClasses = {
    small: "text-xs py-1 px-2 uppercase font-semibold text-center",
    medium: "text-sm py-3 px-4 font-medium",
    large: "text-base py-3 px-6 font-medium",
  };

  const variationClasses = {
    primary: "text-brand-50 bg-brand-600 hover:bg-brand-700",
    secondary:
      "text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      {...props}
      className={` rounded-md border-gray-300 border shadow-md w-fit ${sizeClasses[size]} ${variationClasses[variation]}`}
    >
      {children}
    </button>
  );
};

export default Button;
