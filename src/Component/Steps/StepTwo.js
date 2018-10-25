import React, { Component } from 'react';
import { connect } from 'react-redux'

class StepTwo extends Component {

    constructor(props){
        super(props)
    this.state = {
        imageUrl: props.imageUrl
    }
}

 onInputChangeImageUrl = (e) => {
        this.setState({imageUrl: e.target.value})
    }

    
goBack(path) {
        this.props.history.push(path);
    }

goToNextStep(path) {
    this.props.history.push(path);
}





    render() {
        console.log(this.props)
        return(
        <div>(StepTwo)
            <br></br>
            <input
                onChange={this.onInputChangeImageUrl}
                value={this.state.imageUrl}
                type="text"
                placeholder="ImageUrl"
            ></input>
            <br></br>
     <button onClick={() => this.goBack('../wizard/step1')}>Previous Step</button> 
     <button onClick={() => this.goToNextStep('../wizard/step3')}>Next Step</button> 

    
    
        </div>
        )
    }

}

const func = (state) => {
    return state
}

export default connect(func)(StepTwo);