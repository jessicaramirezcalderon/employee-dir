import React, { Component } from "react";
import ApiSearch from "./API.js";
import SearchForm from "./SearchForm";
import EmployeeList from "./userList";
import Header from "./header";


class Container extends Component {
  state = {
    search: "",
    originalresult: [],
    results: []
  };

  componentDidMount() {
    ApiSearch()
      .then(res => this.setState({ results: res, originalresult: res}))
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    if(!value){
      this.setState({results: this.state.originalresult, [name]: value});
    }
    else{
      this.setState({
        [name]: value
      });
    }
  };

  handleFormSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    const results = this.state.results.filter(result => {
      return result.name.includes(this.state.search);
    })
    this.setState({results});
  };


  render() {
    return (
      <div>
        <Header />
        <div className="listContainer container">
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <EmployeeList results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Container;