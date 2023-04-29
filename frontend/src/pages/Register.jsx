const Register = () => {
  return (
    <div className='h-[70%] w-[50%] bg-[#B2BCFE] rounded-xl shadow-xl mx-auto '>
      <div className='ml-10 mt-10'>
        <p className='font-bold text-2xl'>Login</p>
        <p className='mt-3 text-[#64748B] '>
          Welcome back,Enter your credentials to access your account
        </p>
        <p className='text-[20px] mt-2'>Name</p>

        <input
          className='rounded-md w-[90%] h-[40px] mt-2 outline-none px-2'
          type='text'
          placeholder='Enter your name'
        />

        <p className='text-[20px] mt-2'>Email Address</p>

        <input
          className='rounded-md w-[90%] h-[40px] mt-2 outline-none px-2'
          type='text'
          placeholder='Enter your email'
        />
        <p className='text-[20px]  mt-2 '>Password</p>
        <input
          type='password'
          className='border-none rounded-md w-[90%] h-[40px] outline-none px-2'
          placeholder='Enter your password'
        />
        <div className='mt-5 h-[44px]'>
          <button className='bg-[#00083B] h-full rounded-md  w-[90%] text-white'>
            Continue
          </button>
        </div>
        <div>
          <p className=' ml-[20%] mt-4 '>
            Do you have an account?
            <span className='text-[#00083B]  font-bold'> Sign up Here</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
