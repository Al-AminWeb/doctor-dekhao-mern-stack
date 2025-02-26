import React, { useState } from 'react';

function Login(props) {

    const [state,setState] = useState('Sign Up')

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')

    const onSubmitHandler =async(event) =>{
        event.preventDefault()

    }



    const handleChange = (e) => {
        
    }

    return (
        <form className='min-h-[80vh] flex items-center justify-center w-full'>
            <div className='bg-white p-8 rounded-lg shadow-md w-96'>
                <p className='text-2xl font-bold mb-4'>{state === 'Sign Up' ? "Create Account": "Login"}</p>
                <p className='text-gray-600 mb-6'>Please {state === 'Sign Up' ? "sign up": "log in"} to book appointment</p>
                <div className='space-y-4'>
                    {state === 'Sign Up' && (
                        <div>
                            <p className='text-gray-700 mb-1'>Full Name</p>
                            <input 
                                type="text" 
                                onChange={(e)=>setName(e.target.value)} 
                                value={name} 
                                required
                                className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>
                    )}
                    <div>
                        <p className='text-gray-700 mb-1'>Email</p>
                        <input 
                            type="email" 
                            onChange={(e)=>setEmail(e.target.value)} 
                            value={email} 
                            required
                            className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                    </div>
                    <div>
                        <p className='text-gray-700 mb-1'>Password</p>
                        <input 
                            type="password" 
                            onChange={(e)=>setPassword(e.target.value)} 
                            value={password} 
                            required
                            className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                    </div>
                </div>
                <button 
                    type="submit"
                    className='w-full bg-primary text-white font-medium py-2.5 px-4 rounded-lg
                        hover:bg-primary/90 transform hover:-translate-y-0.5 
                        active:translate-y-0
                        transition-all duration-150
                        shadow-md hover:shadow-lg
                        mt-6'
                >
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>

                <p className="text-center text-gray-600 mt-4">
                    {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"} 
                    <button 
                        type="button"
                        onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                        className="text-primary font-medium ml-2 hover:underline"
                    >
                        {state === 'Sign Up' ? 'Login' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </form>
    );
}

export default Login;