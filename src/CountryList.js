import React from 'react'
import { CardColumns } from 'react-bootstrap'
import { connect } from "react-redux"
import Country from "./Country"
import { withRouter } from 'react-router-dom';

class CountryList extends React.Component {
    render() {
        console.log(this.props.match.params.param);

        return (
            <div style={{ width: '65vw' }}>
                <CardColumns>
                    {this.props.countries.map((elem, index) => {
                        if (elem.region == this.props.match.params.param) {
                            return <Country key={index} country={elem} index={index} />
                        }
                        else if (!this.props.match.params.param) {
                            return <Country key={index} country={elem} index={index} />
                        }

                    })}
                </CardColumns>

            </div>
        )
    }
}
const mapStateProps = (state) => ({
    countries: state.countryReducer.countries
})
export default connect(mapStateProps)(withRouter(CountryList));