import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap'
import {connect} from "react-redux"
import Country from "./Country"

class CountryList extends React.Component {
    render() {
        return (
            <div style={{ width: '65vw' }}>
                <CardColumns>
                    {this.props.countries.map((elem, index) => {
                        return <Country key={index} country={elem} index={index} />
                    })}
                </CardColumns>
                
            </div>
        )
    }
}
const mapStateProps = (state) => ({
    countries : state.countryReducer.countries
})
export default connect(mapStateProps)(CountryList);