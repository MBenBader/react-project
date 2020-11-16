import './App.css';
import React from "react"
import Axios from 'axios';
import { connect } from 'react-redux';
import { setCountries, setRegions } from "./store/actions/country"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryList from "./CountryList";
import MyNavBar from './MyNavBar';

class App extends React.Component {
  componentDidMount() {
    let regions = []
    Axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      this.props.setCountries(response.data)
      if (response.data.length) {
        response.data.forEach(element => {
          if (!regions.includes(element.region) && (element.region)) {
            regions.push(element.region)
          }
        });
        this.props.setRegions(regions)
        console.log(regions)
      }
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className="App" >
        <Router>
          <MyNavBar />
          <Switch>
            <Route path="/all" component={CountryList} />
            <Route path="/region/:param" component={CountryList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  countries: state.countryReducer.countries
})
const mapDispatchToProps = { setCountries, setRegions }
export default connect(mapStateProps, mapDispatchToProps)(App)
