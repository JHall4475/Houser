import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class StepThree extends Component {

    constructor(props){
        super(props)
    this.state = {
        mortgage: props.mortgage,
        rent: props.rent,
    }
}

    onInputChangeMortgage = (e) => {
        this.setState({ mortgage: e.target.value })
    }
    onInputChangeRent = (e) => {
        this.setState({ rent: e.target.value })
    }

    postNewHouse = () => {
        axios.post('http://localhost:8080/api/house', {

            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
        })
            .then((response) => {
                console.log(response.data)
                this.goBack('../')
            })
    }


    goBack(path) {
            this.props.history.push(path);
        }



    render() {
        return (
            <div>(StepThree)
            <h1>Add New Listing</h1>
                <br></br>
                <input
                    onChange={this.onInputChangeMortgage}
                    value={this.state.mortgage}
                    type="text"
                    placeholder="Monthly Mortgage Amount"
                ></input>
                <br></br>

                <input
                    onChange={this.onInputChangeRent}
                    value={this.state.rent}
                    type="text"
                    placeholder="Desired Monthly Rent"
                ></input>
                <button onClick={() => this.goBack('../wizard/step2')}> Previous Step</button>
                <button onClick={() => this.postNewHouse()}>Complete</button>


            </div>
        )
    }

}

const func = (state) => {
    return state
}

export default connect(func)(StepThree);