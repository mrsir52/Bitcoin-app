import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
    render() {
        const courses = [
            { name: 'Single Bitcoin', price: 987 },
            { name: '2 Bitcoin', price: 2 * 987 },
            { name: '3 Bitcoin', price: 3 * 987 },
            { name: '4 Bitcoin', price: 4 * 987 }
        ];
        return (
            <div className="App">
                <div className="App-header">
                <div className="icon blink">
                    <i class="fab fa-bitcoin"></i>
                </div>

                    <h1>Bitcoin Extravaganza!!!!!</h1>
                </div>
                <Coursesales items={courses}/>
            </div>
        );
    }
}

export default App;
