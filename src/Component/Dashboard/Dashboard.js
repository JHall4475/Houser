import React, {Component} from 'react';
import House from '../House/House';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios'


class Dashboard extends Component {

state ={
    houses:[]
}

goToWizard(path) {
    this.props.history.push(path);
}

componentDidMount(){
    this.getHouses()
}

getHouses = () => {
    axios.get('http://localhost:8080/api/houses')
    .then(houseList => {
        console.log(houseList)
        this.setState({houses: houseList.data})
    })
}





render() {
    return(
    <div>
        <p>Dashboard</p>
        <button onClick={() => this.goToWizard('../wizard')}>Add New Property</button>
       {this.state.houses.map(house => {
           return(
               <div>
                <House
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    img={house.img}
                    mortgage={house.mortgage}
                    rent={house.rent}
                    state={house.state}
                    zip={house.zip}
               />
               
               </div>
           )
       })}
        
    </div>
    )
}

}

export default Dashboard;