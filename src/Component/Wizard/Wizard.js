import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import StepOne from '../Steps/StepOne'
import StepTwo from '../Steps/StepTwo'
import StepThree from '../Steps/StepThree'




class Wizard extends Component {




// state = {
//      name:'',
//      address:'',
//      city:'',
//      state:'',
//      zip: 0   
//     }

// onInputChangePropName = (e) => {
//         this.setState({name: e.target.value})
//     }
// onInputChangeAddress = (e) => {
//         this.setState({address: e.target.value})
//     }
// onInputChangeCity = (e) => {
//         this.setState({city: e.target.value})
//     }
// onInputChangeState = (e) => {
//         this.setState({state: e.target.value})
//     }
// onInputChangeZip = (e) => {
//         this.setState({zip: e.target.value})
//     }
    
goBack(path) {
        this.props.history.push(path);
    }

// postNewHouse = () => {
//     axios.post('http://localhost:8080/api/house', { 
    
//         name: this.state.name,
//         address: this.state.address,
//         city: this.state.city,
//         state:this.state.state,
//         zip:this.state.zip,
//     })
//     .then((response) => {
//         console.log(response.data)
//         this.goBack('../')
//     })
//  }





render() {
    return(
    <div>(Wizard)
        <h1>Add New Listing</h1>
        <button onClick={() => this.goBack('../')}>Cancel</button>
        
        <Route path="/wizard/step1" component={StepOne}/>
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree}/>
        
        
        
        
        
        {/* <br></br>
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
        <button onClick={() => this.postNewHouse()}>Complete</button>
 */}

    </div>
    )
}

}


export default Wizard;