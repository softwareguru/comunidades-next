//this is a merge component between an input and select field
const InputSelect = ({
  label,
  inputName,
  inputType = "text",
  inputPlaceholder = "",
  errorMessage = "",
  selectName,
  options = [],
  inputRegister,
  selectRegister,
}) => {
  return (
    <div className="w-full lg:w--full">
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          className=" appearance-none  focus:ring-macazan-green focus:border-macazan-green block w-full  pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder={inputPlaceholder}
          {...inputRegister}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          {options && options.length > 0 && (
            <select
              id={selectName}
              name={selectName}
              className=" focus:ring-macazan-green focus:border-macazan-green h-full py-0 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
              defaultValue={options[0].value}
              {...selectRegister}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-macazan-pink">{errorMessage}</p>
    </div>
  );
};

export default InputSelect;
