import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

export default class Main extends Component {
    render() {
        return (
            <div>
                This is Enroute
                <Link to="/">Main</Link>
                <Link to="/odyssey">Odyssey</Link>
            </div>
        )
    }
}