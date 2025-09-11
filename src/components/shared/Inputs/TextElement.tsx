import React, { InputHTMLAttributes } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  ValidationRule,
  Path,
} from "react-hook-form";

// Make the interface generic
interface TextElementProps<TFieldValues extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  rules?: ValidationRule<any>;
  isBlue?: boolean;
}

// Make the component function generic
const TextElement = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  errors,
  rules = {},
  isBlue = false,
  ...rest
}: TextElementProps<TFieldValues>) => {
  const errorMessage = errors[name]?.message;
  return (
    <div className="flex flex-col gap-y-2 flex-grow-1">
      <input
        className={`  fix-autofill no-arrow-number ${
          isBlue ? "input-alter" : "input"
        }`}
        id={name}
        {...register(name, rules)}
        {...rest}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default TextElement;
