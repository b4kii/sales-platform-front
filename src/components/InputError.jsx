const InputError = ({errorsList}) => {
  return (
    <div className="max-h-0 font-semibold w-full overflow-hidden text-sm text-red-400 transition-[max-height] duration-300 ease-in-out peer-invalid:peer-data-[focused='true']:max-h-[10rem]">
      <ul className="list-disc">
        {errorsList.map((error, index) => (
          <li
            key={index}
            className="ml-[50%] -translate-x-[50%]"
          >
            {error}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputError;
