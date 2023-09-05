import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  children,
  loading = false,
  className,
  onClick,
  icon,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || false}
      className={`${loading
        ?? 'bg-opacity-50 pointer-events-none'
        } px-6 py-3 font-ibmmono rounded-md font-regular text-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {loading ? (
        // <Loading className="" />
        <div>
            Loading...
        </div>
      ) : (
        <span className="flex flex-row space-x-2 items-center overflow-hidden whitespace-nowrap overflow-ellipsis w-full">
          <span className='inline-block r overflow-hidden whitespace-nowrap overflow-ellipsis w-full'>
            {children}
          </span>
          {icon && <span className={loading ? 'opacity-0' : 'opacity-100'}>{icon}</span>}
        </span>
      )}
    </button>
  );
}

