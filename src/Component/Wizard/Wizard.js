import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';



class Wizard extends Component {

state = {
     name:'',
     address:'',
     city:'',
     state:'',
     zip: 0   
    }

onInputChangePropName = (e) => {
        this.setState({name: e.target.value})
    }
onInputChangeAddress = (e) => {
        this.setState({address: e.target.value})
    }
onInputChangeCity = (e) => {
        this.setState({city: e.target.value})
    }
onInputChangeState = (e) => {
        this.setState({state: e.target.value})
    }
onInputChangeZip = (e) => {
        this.setState({zip: e.target.value})
    }
    
    goBack(path) {
        this.props.history.push(path);
    }



render() {
    return(
    <div>(Wizard)
        <h1>Add New Listing</h1>
        <button onClick={() => this.goBack('../')}>Cancel</button>
        <input
            onChange={this.onInputChangePropName}
            value={this.state.name}
            type="text"
            placeholder="Name"
        ></input>
        <br></br>

        <input
            onChange={this.onInputChangeAddress}
            value={this.state.address}
            type="text"
            placeholder="Address"
        ></input>
        <br></br>

        <input
            onChange={this.onInputChangeCity}
            value={this.state.city}
            type="text"
            placeholder="City"
        ></input>

        <input
            onChange={this.onInputChangeState}
            value={this.state.state}
            type="text"
            placeholder="State"
        ></input>

        <input
            onChange={this.onInputChangeZip}
            value={this.state.zip}
            type="text"
            placeholder="Zip"
        ></input>


    </div>
    )
}

}


export default Wizard;