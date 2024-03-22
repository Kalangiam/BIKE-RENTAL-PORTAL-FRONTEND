import React, { useState } from 'react'
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast'
import ApiRoutes from '../utils/ApiRoutes';
import Table from 'react-bootstrap/Table';
import Support from '../utils/Support';
import TopBar from './TopBar';

function Status() {

  let [data, setData] = useState({})
  const getRrDetails = async (e) => {
    e.preventDefault()
    try {


      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      let no = formProps.no

      let res = await AxiosService.get(`${ApiRoutes.RR.path}/${no}`, {
        authenticate: ApiRoutes.RR.authenticate
      })

      if (res.status === 200) {
        toast.success(res.data.message)
        setData(res.data.data)
      }



    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <>
    <TopBar/>
      <div className='loginwrapper text-center'>
        <form action="" onSubmit={getRrDetails}>
          <h3>Check Status</h3><br></br>
          <div className="form-group justify-content-center">
            <input type="text" placeholder="Booking No" className="form-control" name='no' />
          </div>
          <button>Check
            <i className="zmdi zmdi-arrow-right"></i>
          </button><br></br>
        </form>
      </div>
      <div className='details-wrapper text-center align-content-center' >
        <Table style={{width:'100%'}}striped bordered hover >
          <thead>
            <tr>
              <th className='text-bg-secondary ' >Item </th>
              <th className='text-bg-secondary'>Value</th>

            </tr>
          </thead>
          <tbody>
            {
              Object.keys(data).map((e, i) => {
                return <tr key = {e}>
                  <td>{Support.UpperCase(e)}</td>
                  <td>{data[e] !== null ? data[e] : "-"}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Status