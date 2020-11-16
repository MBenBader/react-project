import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import { setFilter } from "./store/actions/country"

class MyNavBar extends Component {
    searchCountry = (e) => {
        this.props.setFilter(e.target.value)
    }

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
                        <InputGroup>
                            <FormControl
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                onChange={this.searchCountry.bind(this)}
                            />
                        </InputGroup>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateProps = (state) => ({
    regions: state.countryReducer.regions
})

const mapDispatchToProps = { setFilter }

export default connect(mapStateProps, mapDispatchToProps)(MyNavBar)