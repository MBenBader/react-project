import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"
import { connect } from 'react-redux';

class MyNavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Country list</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/all" >All</Nav.Link>
                        {this.props.regions.map(x => {
                            return (
                                <Nav.Link as={Link} to={`/region/${x}`}>{x}</Nav.Link>
                            )
                        }
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateProps = (state) => ({
    regions: state.countryReducer.regions
})

export default connect(mapStateProps)(MyNavBar)