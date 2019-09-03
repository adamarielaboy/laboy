import React, { Component, Fragment } from 'react';
import ImageSection from '../components/ImageSection';
import TopSection from '../components/TopSection';
import PageWrapper from '../layout/pageWrapper';

import enrouteContent from '/static/content/enroute.json.js';

export default class Main extends Component {
    render() {
        const { topSection, imageSections } = enrouteContent;
        return (
            <PageWrapper>
                <TopSection heroImage={topSection.hero.image} heroAlt={topSection.hero.name} introHeader={topSection.intro.header} introCaption={topSection.intro.content} methodologyHeader={topSection.methodology.header} methodologyContent={topSection.methodology.content} description={topSection.description}/>
                {
                    imageSections && imageSections.length > 0 && imageSections.map(section => <ImageSection key={section.header} images={section.images} header={section.header} caption={section.caption} />)
                }
            </PageWrapper>
        )
    }
}