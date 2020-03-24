import React from 'react';

const Input = (props) => {
  const { 
    input,
    meta: { touched, error, warning }, 
    type, 
    label, 
    placeholder 
  } = props

  return (
    <div>
      {label}
      <input value={input.value} onChange={input.onChange} type={type} placeholder={placeholder}/>
      {touched &&
        ((error && <span style={{ color: 'red' }}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )
}

export default Input