import { Container, InputContainer } from "./style";
import { InputProps } from "../../interfaces";

const Input = ({
  type,
  name,
  register,
  autoComplete,
  error,
  label,
  placeholder,
  required,
  onChange,
  size,
  className,
  value,
  disabled,
}: InputProps) => {
  return (
    <Container className={className}>
      <label>
        {label} {!!error && <span> - {error}</span>}
      </label>

      <InputContainer
        value={value}
        size={size}
        type={type}
        {...register(name)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        disabled={disabled}
      />
    </Container>
  );
};

export { Input };
