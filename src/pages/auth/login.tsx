import React, { useState } from 'react';
import InputForm from '../../components/forms/inputForm';

export default function Login() {
    const [isError, setError] = useState(false);
    const [cardNumber, setCardNumber] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(e.target.value)
        setError(e.target.value == '');
    }
    
  return (
    <div className="flex justify-center items-center h-screen pt-8" style={{backgroundColor: '#F2F2F2'}}>
      <div className="w-full max-w-sm p-1 bg-white shadow-md rounded-lg shadow-cyan-100">
        <form action="" className="w-full">
            <div className='px-3 py-7 text-xl'>
                Login
            </div>
          <div className=" -mx-3 mb-6">
            <div className="w-full px-3 mb-6">
              <InputForm
                label="Card Number"
                placeholder="Enter Card Number"
                type='text'
                isError={isError}
                value={cardNumber}
                onChange={handleInputChange}
                errorMessage='Card Number is required.'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
