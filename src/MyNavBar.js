import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import { setFilter } from "./store/actions/country"
import Dropdown from "react-bootstrap/Dropdown"


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
                        {/* {this.props.regions.map(x => {
                            return (
                                <Nav.Link as={Link} to={`/region/${x}`}>{x}</Nav.Link>
                            )
                        }
                        )} */}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Regions
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {this.props.regions.map(x => {
                                    return (
                                        <Dropdown.Item as={Link} to={`/region/${x}`}>{x}</Dropdown.Item>
                                    )
                                }
                                )}
                                
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                SubgRegions
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {this.props.subregions.map(x => {
                                    return (
                                        <Dropdown.Item as={Link} to={`/region/${x}`}>{x}</Dropdown.Item>
                                    )
                                }
                                )}
                                
                            </Dropdown.Menu>
                        </Dropdown>
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
    regions: state.countryReducer.regions,
    subregions: state.countryReducer.subregions

})

const mapDispatchToProps = { setFilter }

export default connect(mapStateProps, mapDispatchToProps)(MyNavBar)