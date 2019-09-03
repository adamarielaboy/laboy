import React, { Component, Fragment } from 'react';
import TopSection from '../components/TopSection';
import ImageSection from '../components/ImageSection';
// import odysseyContent from '/static/content/odyssey.json.js';

export default class Main extends Component {
    render() {
        const { topSection, imageSections } = odysseyContent;
        return (
            <Fragment>
                <TopSection heroImage={topSection.hero.image} heroAlt={topSection.hero.name} introHeader={topSection.intro.header} introCaption={topSection.intro.content} methodologyHeader={topSection.methodology.header} methodologyContent={topSection.methodology.content} />
                {
                    imageSections && imageSections.length > 0 && imageSections.map(section => <ImageSection key={section.header} images={section.images} header={section.header} caption={section.caption} />)
                }
            </Fragment>
        )
    }
}