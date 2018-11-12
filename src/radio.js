import React, { Component } from 'react';
import Table from './table';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: 'name'
        };
    };

    handleRadio(e) {
        console.log(e.target.value);
        this.setState({
            sort: e.target.value
        });
    }

  render() {
      console.log(this.state);
    return (
      <div className="Radio">
        <label htmlFor="sort">Name:</label>
        <input onChange={(e) => this.handleRadio(e)} type="radio" name="sort" value="name"/>
        <label htmlFor="sort">Age:</label>
        <input onChange={(e) => this.handleRadio(e)} type="radio" name="sort" value="age"/>
        <Table state={this.state}/>
      </div>
    );
  }
}

export default Radio;
