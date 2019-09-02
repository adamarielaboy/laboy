import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopSection from '../components/TopSection';
import ImageSection from '../components/ImageSection';

export default class Main extends Component {
    render() {
        return (
            <div>
                This is Odyssey
                <Link to="/">Main</Link>
                <Link to="/enroute">Enroute</Link>
                <TopSection heroImage="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" heroAlt="Odyssey Project" introHeader="A Solution for Career Changers" introCaption={["Client: Citi Ventures, the entrepreneurial division of Citi Bank", <br/>, "In collaboration with: Damesh Kirabayeva, Victor Michud, and Nicole Rifai"]} methodologyHeader="Methodologies" methodologyContent="Generative Research: ethnographic, in-depth interviews, diary studies, user interviews, literature reviews, storyboarding, affinity mapping, ecosystem mapping, context mapping. Evaluative Research: Usability Tests, Survey Design, Content Evaluation" />
                <ImageSection images={[
                    { url: "https://images.pexels.com/photos/1449638/pexels-photo-1449638.jpeg?cs=srgb&dl=clouds-hand-pill-1449638.jpg&fm=jpg", alt: "image 1"}, { url: "https://images.pexels.com/photos/2825369/pexels-photo-2825369.jpeg?cs=srgb&dl=alps-altitude-clouds-2825369.jpg&fm=jpg"}, { url: "https://images.pexels.com/photos/920689/pexels-photo-920689.jpeg?cs=srgb&dl=astronomy-astrophotography-constellation-920689.jpg&fm=jpg"}]} header="The Power Rests in Interviewing People" caption={["What we did? 1:1 Interviews, Participatory Workshops (Context Mapping, Card Sorting, and Ecosystem Mapping), and Ethnographic Field Studies"]} />
            </div>
        )
    }
}