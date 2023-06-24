import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [form,setForm] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let {email,password} = form;
  }

  const handleUser = (e)=>setForm({...form,email:e.target.value});
  const handlePass =(e)=>setForm({...form,password:e.target.value});

  return (
    <>
      {/* <ToastContainer /> */}
      <div className='max-7xl 
    mx-auto flex items-center 
    justify-center h-[80vh]'>
      <div className='shadow-lg rounded-sm  xs:w-[400px] rounded bg-white p-5'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-center font-bold mb-7 text-[#6469ff] text-[30px]'>Login</h1>
          <label
            htmlFor='username'
            className="block text-md text-[#6569ff] font-medium text-gray-900">
            email</label>
          <input
              type='text'
              id='username'
              name='username'
              className="bg-gray-50 mb-3
              border border-gray-300   text-gray-900
              text-sm rounded-lg focus:ring-[#6469ff] 
              focus:border-[#6469ff] 
              outline-none block w-[100%]   
              p-3"
              placeholder='username'
              value={form.email}
              onChange={handleUser}
              required
            />
            <label
            htmlFor='username'
            className="block text-[#6569ff]   text-md font-medium text-gray-900"
          >
            password
          </label>
          <input
              type='password'
              id='username'
              name='username'
              className="bg-gray-50 mb-3
              border border-gray-300  text-gray-900
              text-sm rounded-lg focus:ring-[#6469ff] 
              focus:border-[#6469ff] 
              outline-none block w-[100%]   
              p-3"
              placeholder='password'
              value={form.password}
              onChange={handlePass}
              required
            />
              <input type='submit' 
            className=" text-white cursor-pointer  font-medium bg-[#6469ff] font-medium
            rounded-md text-sm w-full text-[16px] 
              px-5 py-2.5 text-center text-[16px] "
             value='Login'
            />
            <p className='mt-3 flex flex-wrap gap-2 justify-between text-gray-400'>
              register a new accounte! 
              <span onClick={()=>navigate('/SignUp')} className='cursor-pointer text-[#6469ff] underline decoration-1'>register here</span></p>
          </form>
      </div>
    </div>
    </>
  )
}

export default Login
