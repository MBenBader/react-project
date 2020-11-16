import logo from './logo.svg';
import './App.css';
import React from "react"
import Axios from 'axios';
import { connect } from 'react-redux';
import { setCountries } from "./store/actions/country"
import { Container } from 'react-bootstrap';

class App extends React.Component {
  componentDidMount() {
    Axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      this.props.setCountries(response.data)
      console.log(this.props.countries)
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className="App" >

      </div>
    );
  }
}

const mapStateProps = (state) => ({
  countries: state.countryReducer.countries
})
const mapDispatchToProps = { setCountries }
export default connect(mapStateProps, mapDispatchToProps)(App)
