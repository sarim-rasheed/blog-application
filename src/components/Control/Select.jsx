import React, {useId, forwardRef} from 'react'

function Select({options, label, className = "", ...props},ref) {
 
 const id = useId();
 
    return (
        <div className='w-full'>
        {label && <label className=' text-2xl' htmlFor={id}> {label} </label>} <br/>
        <select id={id} ref={ref} className={`my-5 ${className}`}  {...props}>
            {
                options?.map((option) => (
                    <options key={option}>{option}</options>
                ))
            }
        </select>
      </div>
  )
}

export default Select
