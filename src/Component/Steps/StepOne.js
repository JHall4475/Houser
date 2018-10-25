import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {updateStepOne} from '../../ducks/actions';


class StepOne extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            address: props.address,
            city: props.city,
            state: props.state,
            zip: props.zip
        }
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
goToStepTwo(path) {
    this.props.updateStepOne(this.state)
    this.props.history.push(path);
}


    render() {
        return(
        <div>(StepOne)
            <br></br>
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
            <br></br>
            <button onClick={() => this.goToStepTwo('../wizard/step2')}>Next Step</button>
    
    
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
    }
}

export default connect(mapStateToProps, {updateStepOne})(StepOne);