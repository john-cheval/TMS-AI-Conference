import React, { TextareaHTMLAttributes } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  ValidationRule,
  Path,
} from "react-hook-form";

// Update the interface to extend TextareaHTMLAttributes
interface TextAreaElementProps<TFieldValues extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  rules?: ValidationRule<any>;
}

// Update the component to use the new interface name
const TextAreaElement = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  errors,
  rules = {},
  ...rest
}: TextAreaElementProps<TFieldValues>) => {
  const errorMessage = errors[name]?.message;
  return (
    <div className="flex flex-col gap-y-2 flex-grow-1">
      <textarea
        className="input  fix-autofill"
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

export default TextAreaElement;
