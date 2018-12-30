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
        // Date format
        let today = new Date();
        let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        let lastWeekYear = lastWeek.getFullYear();
        let lastWeekMonth = lastWeek.getMonth() + 1;
        let lastWeekDay = lastWeek.getDate();
        let lastWeekDate = `${lastWeekYear}-${lastWeekMonth}-${lastWeekDay}`;
        let todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
        console.log(todayDate);
        console.log(lastWeekDate);

        // Conect to api
        let currencyRequest = await axios.get(`https://free.currencyconverterapi.com/api/v6/convert?q=USD_MXN,MXN_USD&compact=ultra&date=${lastWeekDate}&endDate=${todayDate}`);
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