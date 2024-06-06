'use client'
import React, { useState } from 'react';
import  './style.css'; // Import your CSS file
import SignIn from '@/components/signin';
import SignUp from '@/components/signup';

const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  // Function to toggle between login and signup forms
  const toggleForm = () => {
    setIsLoginForm(prevState => !prevState);
  };

  return (

<div className='flex justify-center items-center h-screen'>
<div className={`rounded-lg w-[70%] ${isLoginForm }  child-container`}>        {isLoginForm ? (
          <SignIn toggleForm={toggleForm} />
        ) : (
          <SignUp toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
