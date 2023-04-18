export const Input = ({
  label,
  type,
  value,
  id,
  register,
  disabled,
  placeholder,
  className,
}) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input
        type={type}
        id={id}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className={className}
        {...register}
      />
    </>
  );
};
