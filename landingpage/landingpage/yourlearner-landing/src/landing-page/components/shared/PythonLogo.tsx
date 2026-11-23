import React from "react"

export function PythonLogo({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img 
      src="/logo.png" 
      alt="YourLearner Logo" 
      className={className || ""}
      {...props} 
    />
  )
}
