import React from 'react';

const Input = (props) => {
  const { input, type, label } = props
  return (
    <div>
      <h4>{label}</h4>
      <input value={input.value} onChange={input.onChange} type={type}/>
    </div>
  )
}

export default Input