import React, { Component } from 'react';

class Test extends Component {
  componentDidMount(){
    console.log("Component did mounted")
  }
  render() {
    return (
      <div>
        <h1> Test Page</h1>
      </div>
    );
  }
}
export default Test;