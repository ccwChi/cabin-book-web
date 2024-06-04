const FormRow = ({ label, error, children }) => {
    return (
      <div className={`grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 py-3.5 ${error ? 'border-b border-gray-200' : ''} ${children.props.type === 'button' ? 'flex justify-end gap-3' : ''}`}>
        {label && <label htmlFor={children.props.id} className="font-medium">{label}</label>}
        {children}
        {error && <span className="text-sm text-red-700">{error}</span>}
      </div>
    );
  };
  
  export default FormRow;
  