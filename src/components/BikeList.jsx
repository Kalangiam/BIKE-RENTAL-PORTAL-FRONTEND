import React from 'react'
import Bike from './Bike'
import TopBar from './TopBar'

function BikeList() {
    let bikes = [
        {
            "id": "1",
            "Name": "Bajaj SS 400",
            "img": "https://bike.nedient.in/admin/img/vehicleimages/knowledges_base_bg.jpg",
            "fuel": "Petrol",
            "capacity": "2 seats",
            "price": "Rs.345"
        },
        {
            "id": "2",
            "Name": "Bajaj RS200",
            "img": "https://bike.nedient.in/admin/img/vehicleimages/bike_755x430.png",
            "fuel": "Petrol",
            "capacity": "2 seats",
            "price": "Rs.859"
        },
        {
            "id": "3",
            "Name": "Suzuki 1",
            "img": "https://bike.nedient.in/admin/img/vehicleimages/featured-img-300.jpg",
            "fuel": "Petrol",
            "capacity": "2 seats",
            "price": "Rs.859"
        },
        {
            "id": "4",
            "Name": "KTM Duke 390",
            "img": "https://bike.nedient.in/admin/img/vehicleimages/featured-img-3000.jpg",
            "fuel": "Petrol",
            "capacity": "2 seats",
            "price": "Rs.636"
        },
        {
            "id": "5",
            "Name": "Yamaha R1",
            "img": "https://bike.nedient.in/admin/img/vehicleimages/bikes_755x430.png",
            "fuel": "Petrol",
            "capacity": "2 seats",
            "price": "Rs.354"
        },
        {
            "id": "6",
            "Name": "Bajaj SS 400",
            "img": "https://bike.nedient.in/admin/img/vehicleimages/th1.jpg",
            "fuel": "Petrol",
            "capacity": "2 seats",
            "price": "Rs.450"
        }
    ]
    return (
        <div className='container'>
            <div>
                <TopBar/>
            </div>
            <div className='row'>
             
                    {
                        bikes.map((bike) => {
                            return <Bike key={bike.id} bike={bike} />
                        })
                    }
            
            </div>
        </div>
    )
}

export default BikeList