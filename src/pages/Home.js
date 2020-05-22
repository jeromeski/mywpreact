import React, { Component } from 'react';
import Outline from '../components/Outline';
import Spectacles from '../components/Spectacles';
import HeadingHome from '../components/HeadingHome';
import ButtonHome from '../components/ButtonHome';

class Home extends Component {
  constructor(){
    super()
    this.toggleEnterState = this.toggleEnterState.bind(this);
    this.state = {
      isVisible: false,
    };
  }

  toggleEnterState() {
    const {isVisible} = this.state
    this.setState({
      isVisible: !isVisible
    })
  }

  componentDidMount() {
    this.toggleEnterState()
  }

  render(){
    return (
      <div className='container'>
        <Outline in={this.state.isVisible} />
        <Spectacles in={this.state.isVisible} />
        <HeadingHome in={this.state.isVisible} />
        <ButtonHome in={this.state.isVisible} />
      </div>
    );
  }
}

export default Home;
