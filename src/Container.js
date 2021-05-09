import React, { Component } from "react";
import ApiSearch from "./API.js";
import EmployeeList from "./userList";


class Container extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    ApiSearch()
      .then(res => this.setState({ results: res }))
  }

  render() {
    return (
      <div>
        <EmployeeList results={this.state.results} />
      </div>
    );
  }
}

export default Container;