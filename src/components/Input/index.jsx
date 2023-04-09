export const Input = ({ label, type, id, register, placeholder }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input type={type} id={id} placeholder={placeholder} {...register} />
    </>
  );
};
