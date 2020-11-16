import React from 'react'
import { CardColumns } from 'react-bootstrap'
import { connect } from "react-redux"
import Country from "./Country"
import { withRouter } from 'react-router-dom';
import Pagination from "react-bootstrap/Pagination"

class CountryList extends React.Component {
    state = {
        items : [],
        active : 1,
        countriesToDisplay: [],
        pageState : 25
    }
    componentDidMount() {
        if (!this.state.items.length) {
            let pagination = []
            for (let number = 1; number <= (this.props.countries.length/this.state.pageState); number++) {
                pagination.push(
                    <Pagination.Item key={number} active={number === this.state.active} >
                    {number}
                    </Pagination.Item>)
            }
            this.setState({
                items : pagination
            })
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        
        if(prevProps.match.params !== this.props.match.params || prevState.active !== this.state.active) {
            let test = this.props.countries.filter(elem => {
                return elem.region == this.props.match.params.param || !this.props.match.params.param;
            }).slice((this.state.active-1)*25, this.state.active*25);
            this.setState({
                countriesToDisplay: test
            })
        }
    }

    updateActive = (e) => {
        console.log(e.target.text)
        this.setState({
            active : parseInt(e.target.text)
        })

    }

    render() {
        return (
            
            <div style={{ width: '65vw' }}>
                <div>
                    <Pagination size="sm" active={this.state.active} onClick={this.updateActive.bind(this)}>{this.state.items}</Pagination>
                </div>
                <CardColumns>
                    {this.state.countriesToDisplay.map((elem, index) => {
                       return <Country key={index} country={elem} index={index} /> 
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