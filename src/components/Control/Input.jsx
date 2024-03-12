import React, {useId, forwardRef} from 'react'

function Input({type="text", label, className = "", ...props},ref) {

  const id = useId();

  return (
    <div className='w-full'>
      {label && <label className=' text-2xl' htmlFor={id}> {label} </label>} <br/>
      <input htmlFor={id} type={type} className={` my-5 ${className}`} {...props} ref={ref}/>
    </div>
  )
}

export default forwardRef(Input);
