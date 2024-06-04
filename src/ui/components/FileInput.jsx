const FileInput = ({ ...props }) => (
    <input
    className="text-base rounded-sm file:font-inherit file:font-medium file:p-2 file:mr-3 file:rounded-sm file:border-none file:text-brand-50 file:bg-brand-600 file:cursor-pointer file:transition file:hover:bg-brand-700"
    type="file"
      {...props}
    />
  );
  
  export default FileInput;