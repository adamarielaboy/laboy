import React, { Component } from 'react';
import Link from 'next/link';
import PageWrapper from '../layout/pageWrapper';

export default class Main extends Component {
    render() {
      return (
            <PageWrapper>
                This is the main page
                <Link>
                    <a href="/odyssey">
                        Odyssey
                    </a>
                </Link>
                <Link>
                    <a href="/enroute">
                        Enroute
                    </a>
                </Link>
            </PageWrapper>
        )
    }
}