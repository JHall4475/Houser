import React, {Component} from 'react';


class House extends Component {



render() {
    const{name, address, city, img, mortgage, rent, state, zip} =this.props
    return(
    <div>
        House (Inside Dashboard)
        <p>name {name}</p>
        <p>address {address}</p>
        <p>city {city}</p>
        <img src={img} alt=''/>
        <p>mortgage {mortgage} rent {rent}</p>
        <p>State {state} Zip Code {zip} </p>
        <button onClick={() => this.props.deleteHouse()}>Delete</button>


    </div>
    )
}

}

export default House;