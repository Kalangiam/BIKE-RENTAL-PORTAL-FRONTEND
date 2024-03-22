import React, { useState, useEffect } from 'react'
import TopBar from '../TopBar'
import toast from 'react-hot-toast'
import useLogout from '../../hooks/useLogout'
import ApiRoutes from '../../utils/ApiRoutes'
import Card from 'react-bootstrap/Card'
import AxiosService from '../../utils/AxiosService'
// import Support from '../../utils/Support'
import Table from 'react-bootstrap/Table'

import { useNavigate } from 'react-router-dom'

function Dashboard() {
    let [countData, setCountData] = useState([])
    let [data, setData] = useState([])
    let logout = useLogout()
    let navigate = useNavigate()
    let getDashboardCount = async () => {
        try {
            let res = await AxiosService.get(ApiRoutes.DASHBOARD_COUNT.path, {
                authenticate: ApiRoutes.DASHBOARD_COUNT.authenticate,

            })
            if (res.status === 200) {
                setCountData(res.data.data)
            }
        } catch (error) {
            toast.error(error.response.data.message)
            if (error.response.status === 401) {
                logout()
            }

        }
    }

    let loadData = async (status) => {
        try {
            let res = await AxiosService.get(`${ApiRoutes.LIST.path}/${status}`, {
                authenticate: ApiRoutes.LIST.authenticate,

            })
            if (res.status === 200) {
                setData(res.data.data)
            }
        } catch (error) {
            toast.error(error.response.data.message)

        }
    }

    useEffect(() => {
        getDashboardCount()
    }, [])
    return (
        <>
            <TopBar />
            <div className='CardWrapper'>

                {
                    countData.map((value) => {
                        return (<Card key={value._id} style={{ width: '10rem', cursor: 'pointer' }} onClick={() => loadData(value._id)}>
                            <Card.Body className="dashcard" style={{ display: "flex", justifyContent: "space-between"}}>
                                <Card.Title>{value._id}</Card.Title>
                                <Card.Title>({value.count})</Card.Title>
                            </Card.Body>
                        </Card>)

                    })
                }


            </div>
            {
                data.length ? <div className='details-wrapper'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>no </th>
                                <th>bike</th>
                                <th>name</th>
                                <th>email</th>
                                <th>mobile</th>
                                <th>For_time(hrs)</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((e, i) => {
                                    return <tr key={e._id}>
                                        <th>{i + 1}</th>
                                        <th>{e.no} </th>
                                        <th>{e.bike}</th>
                                        <th>{e.name}</th>
                                        <th>{e.email}</th>
                                        <th>{e.mobile}</th>
                                        <th>{e.For_time}</th>
                                        <th style={{color:'red'}}>{e.status}</th>
                                        <th ><button style={{ padding: '2px', borderRadius: '50px', height:'30px', marginTop:'1px' }}  onClick={() => navigate(`/admin/service/${e.no}`)}>View</button></th>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>

                </div> : <h4 style={{ textAlign: "center" }}>No data available</h4>
            }

        </>

    )
}

export default Dashboard