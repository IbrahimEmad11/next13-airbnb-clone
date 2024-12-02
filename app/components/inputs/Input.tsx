'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import { useState } from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled = false,
  formatPrice = false,
  required = false,
  register,
  errors,
}) => {
  const [hasText, setHasText] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasText(e.target.value.trim().length > 0);
  };

  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        onChange={handleInputChange} // Track changes to input
        className={`
          peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
            formatPrice ? "pl-9" : "pl-4"
          } ${
            errors[id] ? "border-red-500" : "border-neutral-300"
          } ${errors[id] ? "focus:border-red-500" : "focus:border-black"}
        `}
      />
      <label
        htmlFor={id}
        className={`
            absolute 
            text-md
            duration-150 
            transform 
            top-5 
            z-10 
            origin-[0] 
            left-2 
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 
            peer-focus:-translate-y-3
            ${hasText ? 'scale-75 -translate-y-3' : ''}
            ${errors[id] ? "text-red-500" : "text-zinc-500"}
          `}
          
          
          
      >
        {label}
      </label>
      {errors[id] && (
        <p className="text-sm text-red-500 mt-1">
          {errors[id]?.message?.toString() || "This field is required"}
        </p>
      )}
    </div>
  );
};

export default Input;
