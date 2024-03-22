import React, { useEffect } from 'react'
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';
import '../CSS/Login.css'


function Create() {

    const navigate = useNavigate()

    useEffect(() => {
        sessionStorage.clear()
    }, [])

    const handleLogin = async (e) => {

        e.preventDefault()

        try {
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            let res = await AxiosService.post(ApiRoutes.CREATE_USER.path, formProps, {
                authenticate: ApiRoutes.CREATE_USER.authenticate
            })

            if (res.status === 200) {
                toast.success(res.data.message)
                navigate('/users/login')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    return (
        <>
            <div className='loginwrapper'>
                <div className="wrapper" >
                    <div className="inner">
                        <div className="image-holder">
                            <img src="https://th.bing.com/th/id/R.9b824b9f9856e237fdb713b368553506?rik=2WlcIAht653yqg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1882106.jpg&ehk=4chGGRKY6RiGNfRbS5LxklSoVV4jSh22xFoRr433z6s%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <form action="" onSubmit={handleLogin}>
                            <h3>Registration Form</h3>
                            <div className="form-group">
                                <input type="text" placeholder="Full Name" className="form-control" name='name' />
                            </div>
                            <div className="form-wrapper">
                                <input type="text" placeholder="Email Address" className="form-control" name='email' />
                                <i className="zmdi zmdi-email"></i>
                            </div>

                            <div className="form-wrapper">
                                <input type="password" placeholder="Password" className="form-control" name='password' />
                                <i className="zmdi zmdi-lock"></i>
                            </div>
                            {/* <div class="form-wrapper">
						<input type="password" placeholder="Confirm Password" className="form-control"/>
						<i className="zmdi zmdi-lock"></i>
					</div> */}
                            <button>Register
                                <i className="zmdi zmdi-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>

            </div></>


    )
}

export default Create