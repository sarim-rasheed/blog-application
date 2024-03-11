import React from 'react'


function Button({text, bgColor = "bg-sky-600", className = "", textColor = "text-white", ...props }) {


  return (
  <button className={`${bgColor} ${textColor} ${className} rounded-lg w-16 h-12`} {...props}>{text}</button>
  )
}

export default Button
