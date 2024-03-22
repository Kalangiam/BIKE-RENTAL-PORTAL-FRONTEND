import React from 'react'
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ApiRoutes from '../utils/ApiRoutes';

function RRCreate() {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);

            // console.log(formProps)
            let res = await AxiosService.post(ApiRoutes.RR_CREATE.path, formProps, {
                authenticate: ApiRoutes.RR_CREATE.authenticate
            })

            if (res.status === 200) {
                // toast.success(res.data.message)
                alert("check your mail for BookingID to check status ")
                navigate('/status')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    return (
        <>
            <div className='loginwrapper'>
                <form action="" onSubmit={handleSubmit}>
                    <h3 className='text-center'>Book your Order</h3><br></br>
                    <div className="form-group">
                        <input type="text" placeholder="Bike Model" className="form-control" name='bike' />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" className="form-control" name='name' />
                    </div>
                    <div className="form-wrapper">
                        We'll never share your email with anyone else.
                        <input type="text" placeholder="Email Address" className="form-control" name='email' />
                        <i className="zmdi zmdi-email"></i>
                    </div>

                    <div className="form-wrapper">
                        <input type="text" placeholder="Mobile number" className="form-control" name='mobile' />
                        <i className="zmdi zmdi-lock"></i>
                    </div>
                    <div className="form-wrapper">
                        <input type="text" placeholder="Time (in hrs)" className="form-control" name='For_time' />
                        <i className="zmdi zmdi-lock"></i>
                    </div>
                    <button>Book my order
                        <i className="zmdi zmdi-arrow-right"></i>
                    </button>
                </form>
            </div></>
    )
}

export default RRCreate