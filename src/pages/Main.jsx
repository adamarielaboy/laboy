import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

export default class Main extends Component {
    render() {
        return (
            <div>
                This is the main page
                <Link to="/odyssey">Odyssey</Link>
                <Link to="/enroute">Enroute</Link>
            </div>
        )
    }
}