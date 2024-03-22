import React, { useEffect } from 'react'
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';
import '../CSS/Login.css'
import { Link } from 'react-router-dom';



function Login() {

  const navigate = useNavigate()

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      let res = await AxiosService.post(ApiRoutes.USER_LOGIN.path, formProps, {
        authenticate: ApiRoutes.USER_LOGIN.authenticate
      })
      if (res.status === 200) {
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('role', res.data.role)
        sessionStorage.setItem('name', res.data.name)
        toast.success("Login Successful")
        navigate('/bike')
        

      }
      else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }

  }



  return (
    <>
      <div className="wrapper" >
        <div className="inner">
          <div className="image-holder">
            <img src="https://th.bing.com/th/id/R.9b824b9f9856e237fdb713b368553506?rik=2WlcIAht653yqg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1882106.jpg&ehk=4chGGRKY6RiGNfRbS5LxklSoVV4jSh22xFoRr433z6s%3d&risl=&pid=ImgRaw&r=0" alt="" />
          </div>
          <form action="" onSubmit={handleLogin}>
            <h3>Sign in </h3>
            <div className="form-wrapper">
              <input type="text" placeholder="Email Address" className="form-control" name='email' />
              <i className="zmdi zmdi-email"></i>
            </div>

            <div className="form-wrapper">
              <input type="password" placeholder="Password" className="form-control" name='password' />
              <i className="zmdi zmdi-lock"></i>
            </div>

            <button className='login'>Sign in
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
            <div className='signup'>
              <Link to='/users/create'>Sign Up</Link>
            </div>
            <div className='signup'>
              <Link to='/users/forgot-password'>Forgot Password</Link>
            </div>
          </form>
        </div>
      </div>



    </>
  )
}

export default Login