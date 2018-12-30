import React, { Component } from 'react';
import axios from 'axios';

class Graphic extends Component {
    state = {
        currencyData: []
    };
   
    componentDidMount = () => {
        this.axiosCurrency();
    };

    axiosCurrency = async () => {
        let currencyRequest = await axios.get('https://free.currencyconverterapi.com/api/v6/convert?q=USD_MXN,MXN_USD&compact=ultra&date=2018-09-21&endDate=2018-09-26');
        let currency = currencyRequest.data;
        this.setState({ currency });
        console.log(currency);
    };

    render() {
        return(
            <div>Hola mundo</div>
        )
    }
}

export default Graphic;