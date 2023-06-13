import React from 'react'
import {Link} from 'react-router-dom'
import { Nav, Navbar, NavLink } from 'react-bootstrap'

export default function Navigation() {
  return (
    <div >

        <Navbar collapseOnSelect expand="sm" className='navbar' variant="dark">
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-toggle='collapse' data-bs-target='#navabrScroll' />
            <Navbar.Collapse id="navbarScroll">
                <Nav>

                  <NavLink eventKey='0' as={Link} to="/" className='Logo'>VS Trailers</NavLink>
                  <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                  <NavLink eventKey="2" as={Link} to="/TeluguMovies">Telugu Movies</NavLink>
                  <NavLink eventKey="3" as={Link} to="/EnglishMovies">English Movies</NavLink>
                  <NavLink eventKey="4" as={Link} to="/ProfilePage">ProfilePage</NavLink>
                  <NavLink eventKey="5" as={Link} to="/Login" className='signup' >Sign In</NavLink>
                  
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </div>
  )
}