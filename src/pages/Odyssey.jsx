import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopSection from '../components/TopSection';
import ImageSection from '../components/ImageSection';
import odysseyContent from '../content/odyssey.json';

export default class Main extends Component {
    render() {
        const { topSection, imageSections } = odysseyContent;
        return (
            <div>
                This is Odyssey
                <Link to="/">Main</Link>
                <Link to="/enroute">Enroute</Link>
                <TopSection heroImage={topSection.hero.image} heroAlt={topSection.hero.name} introHeader={topSection.intro.header} introCaption={topSection.intro.content} methodologyHeader={topSection.methodology.header} methodologyContent={topSection.methodology.content} />
                {
                    imageSections && imageSections.length > 0 && imageSections.map(section => <ImageSection key={section.header} images={section.images} header={section.header} caption={section.caption} />)
                }
            </div>
        )
    }
}