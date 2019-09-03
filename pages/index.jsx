import React, { Component } from 'react';
import Link from 'next/link';
import PageWrapper from '../layout/pageWrapper';

export default class Main extends Component {
    render() {
      return (
            <PageWrapper>
                This is the main page
                <Link to="/odyssey">Odyssey</Link>
                <Link to="/enroute">Enroute</Link>
            </PageWrapper>
        )
    }
}