export type NormalInputProps = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: string;
  labelText: string;
  placeholder: string;
  type: string;
  message: string;
};
