import React, { Component } from 'react';
import Link from 'next/link';
import PageWrapper from '../layout/pageWrapper';

export default class Main extends Component {
    render() {
      return (
            <PageWrapper>
                This is the main page
                <Link href="/projects/odyssey">
                    <a>
                        Odyssey
                    </a>
                </Link>
                <Link href="/projects/enroute">
                    <a>
                        Enroute
                    </a>
                </Link>
            </PageWrapper>
        )
    }
}