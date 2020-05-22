import React, { Component } from 'react';
import SkillsIcons from '../components/SkillsIcons';
import Heading from '../components/Heading';

class Skills extends Component {
  constructor() {
    super();
    this.toggleEnterState = this.toggleEnterState.bind(this);
    this.state = {
      isVisible: false
    };
  }
  toggleEnterState() {
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible
    });
  }

  componentDidMount() {
    this.toggleEnterState();
  }

  render() {
    const heading = 'Skills';
    const paragraph =
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim harum, inventore magnam ut in, suscipit sunt voluptatibus velit exercitationem tempora earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
    return (
      <div className='expertise'>
        <Heading heading={heading} paragraph={paragraph} />
        <SkillsIcons in={this.state.isVisible} />
      </div>
    );
  }
}

export default Skills;
