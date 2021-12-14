import React from 'react';

class About extends React.Component {
    render() {
        return <h4>Awesome Loyalty App! Version <i>{this.props.version}</i></h4>
    }
}

export default About;