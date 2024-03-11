import React, {useId, forwardRef} from 'react'

function Input({type="text", label, className = "", ...props},ref) {

  const id = useId();

  return (
    <div>
      {label && <label htmlFor={id}> {label} </label>}
      <input type={type} className={` ${className}`} {...props}/>
    </div>
  )
}

export default forwardRef(Input);
