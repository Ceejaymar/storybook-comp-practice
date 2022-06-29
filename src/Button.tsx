import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provides text to the button */
  children: ReactNode;

  /** Which variant look would you like to use */
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: 50,
        padding: '10px 15px',
      }}
    >
      {children}
    </button>
  );
};
