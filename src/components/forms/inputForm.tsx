import React from 'react'

interface inputFormProps {
    label?: string,
    type?: string,
    id?: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    errorMessage?: string,
    isError?: boolean,
    disabled?: boolean,
    lenght?: number
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
}

export default function InputForm({label, type, id, placeholder, isError=false, errorMessage, value, onChange, lenght}: inputFormProps) {
  return (
    <div className='w-full md:w-full px-3 mb-6 md:mb-0'>
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor={id}>
            {label}
        </label>
        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${isError? 'border-red-500': 'null'}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        id={id} 
        type={type}
        placeholder={placeholder} 
        value={value}
        maxLength={lenght}
        onChange={onChange}
        />
        {isError && <p className='text-red text-xs italic'>{errorMessage}</p>}
    </div>
  )
}
