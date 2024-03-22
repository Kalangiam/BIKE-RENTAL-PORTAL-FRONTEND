import React from 'react'
import { useState, useEffect } from 'react'
import TopBar from '../TopBar'
import toast from 'react-hot-toast'
import useLogout from '../../hooks/useLogout'
import ApiRoutes from '../../utils/ApiRoutes'
import AxiosService from '../../utils/AxiosService'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Support from '../../utils/Support'
import { useParams } from 'react-router-dom'


function Service() {
  let [data, setData] = useState({})
  let params = useParams()
  let { no } = params
  let logout = useLogout()

  const getData = async () => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.SERVICE.path}/${no}`, {
        authenticate: ApiRoutes.SERVICE.authenticate

      })

      if (res.status === 200) {
        setData(res.data.data)

      }
    } catch (error) {
      toast.error(error.response.data.message)
      if (error.response.status === 401) {
        logout()
      }
    }
  }

  const changeStatus = async (payload) => {
    try {
      let res = await AxiosService.put(`${ApiRoutes.CHANGE_STATUS.path}/${payload.no}`, payload, {
        authenticate: ApiRoutes.CHANGE_STATUS.authenticate
      })

      if (res.status === 200) {
        toast.success(res.data.message)
        getData()
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    if (no)
      getData()

  }, [])

  return (
    <>
      <TopBar />
      <div className="details-wrapper text-center justify-content-center">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(data).map((e, i) => {
                return <tr key={e}>
                  <td>{Support.UpperCase(e)}</td>
                  <td>{data[e] !== null ? data[e] : "-"}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
      <div className='text-center justify-content-center"'>
        {
          data.status === "Not Booked" && <Button className='text-center'style={{ padding: '2px', borderRadius: '50px', height:'30px', marginTop:'1px' }}variant='warning' onClick={() => changeStatus({ no: data._id })}>Take order</Button> 
            }
            {
               data.status === "Waiting" && <Button className='text-center' style={{ padding: '2px', borderRadius: '50px', height:'30px', marginTop:'1px' }}variant='success' onClick={() => changeStatus({ no: data._id })}>Confirm order</Button> 
            }
      </div>
    </>

  )
}

export default Service