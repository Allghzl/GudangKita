import React from "react";

const Checkbox = ({
  label,
  checked = false,
  onChange,
  className = "",
}) => {
  return (
    <label className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <span className="w-5 h-5 border-2 border-gray-600 rounded-md flex items-center justify-center peer-checked:bg-gray-700">
        <svg
          className="hidden w-3 h-3 text-white peer-checked:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 12l-2-2a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 10-1.414-1.414L9 12z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      {label && <span className="text-gray-800">{label}</span>}
    </label>
  );
};

export default Checkbox;
