import React from 'react'


function Button({text, bgColor = "bg-sky-600", className = "", textColor = "text-white", ...props }) {


  return (
  <button className={`${bgColor} ${textColor} ${className} rounded-lg `} {...props}>{text}</button>
  )
}

export default Button
