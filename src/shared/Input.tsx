import React from "react";

interface InputdataProps {
  type: string;
  name: string;
  placeholder?: string;
  border?: string;
}

const Input: React.FC<InputdataProps> = ({
  type,
  placeholder,
  name,
  border,
}) => {
  return (
    <div
      className={`md:w-96 rounded-xl border border-solid border-greyscale6 relative px-4 py-5 ${
        border || ""
      }`}
    >
      <label className="text-greyscale2 text-xs absolute left-4 -top-2 bg-white px-1">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`text-greyscale2 outline-none px-1 text-sm md:text-base placeholder:text-greyscale3`}
      />
    </div>
  );
};

export default Input;
