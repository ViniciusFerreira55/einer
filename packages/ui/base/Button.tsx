import * as React from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-blue-500 text-white font-bold px-5 py-2 rounded-sm hover:bg-blue-400"
    >
      {children}
    </button>
  );
};
