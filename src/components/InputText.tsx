interface IInputTextProps {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<IInputTextProps> = ({
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  ...rest
}) => {
  return (
    <div className="mb-4">
      <input
        className={
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
