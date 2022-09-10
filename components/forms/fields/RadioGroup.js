const RadioGroup = ({
  options = [],
  name = "",
  label = "",
  description = "",
  errorMessage = "",
  register,
  defaultChecked = options[0]?.value || "",
}) => {
  return (
    <div className="radiogroup">
      <label className="text-base">{label}</label>
      <p className="text-sm leading-5 text-black font-semibold">
        {description}
      </p>
      <fieldset className="mt-4">
        <div className="space-y-4">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name={name}
                type="radio"
                value={option.value}
                defaultChecked={option.value === defaultChecked}
                className="h-4 w-4 border-gray-300 text-macazan-green focus:ring-macazan-green"
                {...register}
              />
              <label
                htmlFor={option.id}
                className="ml-3 block text-sm  text-gray-700"
              >
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      <p className="mt-6 text-sm text-macazan-pink">{errorMessage}</p>
    </div>
  );
};

export default RadioGroup;
