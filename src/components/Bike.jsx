import '../CSS/Bike.css'
import { useNavigate } from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";



function Bike({ bike }) {
    let navigate = useNavigate()
    let BookBike = () => {
        navigate('/rr/create')
    }

    return (
        <>
            
            <div className='col-4'>
                <Card className="card mt-6 w-96">
                    <CardHeader color="blue-gray" className="card-header relative h-56">
                        <img
                            src={bike.img}
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody className='card-body'>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Model : {bike.Name}
                        </Typography>
                        <Typography variant="h5" color="blue-gray" className="mb-2 text-danger">
                            Price : {bike.price} / day
                        </Typography>
                        <Typography variant="h5" color="blue-gray" className="mb-2 text-success">
                            Fuel : {bike.fuel}
                        </Typography>
                        <Typography>
                            Built for off-road trails and rugged terrain, mountain bikes typically have knobby tires, suspension systems, and sturdy frames
                        </Typography>
                    </CardBody>
                    <CardFooter className="card-footer pt-1">
                        <Button onClick={BookBike}>Book Now</Button>
                    </CardFooter>
                </Card>
            </div>

        </>
    )
}

export default Bike