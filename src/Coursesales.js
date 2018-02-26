import React, { Component } from 'react';
import Course from './Course'
import './App.css'

class Coursesales extends Component {
    sumPrice(price){
        this.setState({total: this.state.total + price});
    }

    constructor(props){
        super(props);

        this.state = {
            total: 0
        };
        this.sumPrice = this.sumPrice.bind(this);
    }

    render(){
        console.log(this.props.items);
        const courses = this.props.items.map((item, i) => {
            return <Course name={item.name} price={item.price}
                           key={i} sumPrice={this.sumPrice} active={item.active} />
        });
        return(
            <div>
                <h2>Buy Your Bitcoins Today</h2>
                <div id="courses">
                    {courses}
                    <p id="total" className="p-font"> Total in US Dollars<b>{this.state.total}</b></p>
                </div>
            </div>
        );
    }
}

export default Coursesales;