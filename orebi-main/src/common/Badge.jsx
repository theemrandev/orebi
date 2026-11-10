import React from 'react'

const Badge = ({badge,className}) => {
  return (
    <div className={`pt-3 pb-3 px-8 text-[14px] font-dm font-bold text-[#FFFFFF] bg-[#262626] w-23  ${className}`}>{badge}</div>
  )
}

export default Badge