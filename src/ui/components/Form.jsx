const Form = ({ type = "regular", children }) => {
  const formClass =
    type === "modal"
      ? "w-[80rem]"
      : "p-6 bg-gray-50 border border-gray-200 rounded-md";

  return (
    <form className={`${formClass} overflow-hidden text-sm`}>{children}</form>
  );
};


export default Form;
