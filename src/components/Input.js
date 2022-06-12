import React from 'react'

function Input({placeholder,label,onKeyUp}) {
  return (
    <div>
        <label className='text-white font-bold line-h-0 mb-2 ml-1 inline-block'>{label}:</label>
        <input 
            type="text" 
            className='text-white rounded-lg bg-[rgba(0,0,0,.3)] p-3 w-full capitalize' 
            placeholder={placeholder} 
            onKeyUp={(e)=>onKeyUp(e)}
            onChange={(e)=>onKeyUp(e)}
            />
    </div>
  )
}

export default Input