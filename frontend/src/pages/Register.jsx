import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext.jsx";
import { useEffect, useState } from "react";
import FormRow from "./FormRow.jsx";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember:true
}
const Register = (e) => {
 
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!password || !email || (!isMember && !name)) {
      return displayAlert();
    }
    const currentUser = { name, email, password };
    if (isMember) {
      await loginUser(currentUser);
    } else {
      await registerUser(currentUser);
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }
  },[user, navigate]);
  return (
    <div className='h-[70%] w-[50%] bg-[#B2BCFE] rounded-xl shadow-xl mx-auto '>
      <div className='ml-10 mt-10'>
        <form action="" onSubmit={onSubmit}>
  
        <h3>{values.isMember ?         <p className='font-bold text-2xl'>Login</p> :         <p className='font-bold text-2xl'>Register</p>}</h3>
          
        <p className='mt-3 text-[#64748B] '>
          Welcome back,Enter your credentials to access your account
          </p>
          {!values.isMember&&
            ( 
            <div>
              <p className='text-[20px] mt-2'>Name</p>

<input
  className='rounded-md w-[90%] h-[40px] mt-2 outline-none px-2'
  type='text'
                placeholder='Enter your name'
                value={values.name}
                onChange={handleChange}
                name="name"

/>
</div>
            )
          }
        
            <p className='text-[20px] mt-2'>Email Address</p>
<input
  className='rounded-md w-[90%] h-[40px] mt-2 outline-none px-2'
  type='text'
                placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            name="email"
            
/>
        
          <p className='text-[20px]  mt-2 '>Password</p>
          
        <input
          type='password'
          className='border-none rounded-md w-[90%] h-[40px] outline-none px-2'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            name="password"
          />
          
        <div className='mt-5 h-[44px]'>
          <button type="submit"  disabled={isLoading} className='bg-[#00083B] h-full rounded-md  w-[90%] text-white'>
            Continue
          </button>
        </div>
        <p className="mt-4 ml-14">
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
        </form> 
      </div>
    </div>
  );
};
export default Register;
