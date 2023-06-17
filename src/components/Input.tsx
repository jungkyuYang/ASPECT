import React from 'react';

interface LabelProps extends React.ComponentProps<'label'> {}

interface InputProps extends React.ComponentProps<'input'> {
  isValid: boolean;
}

function Input({ ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {!props.isValid && (
        <span className="error-message">올바른 형식이 아닙니다.</span>
      )}
    </div>
  );
}

export default Input;
