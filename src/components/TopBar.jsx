import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom'
import useLogout from '../hooks/useLogout';

function TopBar() {
  let navigate = useNavigate()
  let logout = useLogout()
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/bike">Bike Rental Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/status')}>Status</Nav.Link>
              <Nav.Link onClick={() => navigate('/rr/create')}>Book</Nav.Link>
              <NavDropdown title="Admin Service" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate('/admin/dashboard')}>Dashboard</NavDropdown.Item>
                <NavDropdown.Divider />

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container>
        <button className='btn btn-danger' style={{ padding: '2px', width:'70px', borderRadius: '50px', height: '30px', marginTop: '1px' ,marginRight:'5px'}} onClick={useLogout()}>logout</button>

        </Container>
      </Navbar>
    </div>
  )
}

export default TopBar