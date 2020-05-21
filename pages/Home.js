import React, { Component } from 'react';
import Outline from '../components/Outline';
import Spectacles from '../components/Spectacles';
import HeadingHome from '../components/HeadingHome';
import ButtonHome from '../components/ButtonHome';

class Home extends Component {
  constructor(){
    super()
    this.toggleEnterState = this.toggleEnterState.bind(this);
    this.togglePreloadingState = this.togglePreloadingState.bind(this);
    this.state = {
      isVisible: false,
      isLoading: false
    };
  }

  toggleEnterState() {
    const {isVisible} = this.state
    this.setState({
      isVisible: !isVisible
    })
  }

  togglePreloadingState() {
    const {isLoading} = this.state
    this.setState({
      isLoading: !isLoading
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
        <HeadingHome />
        <ButtonHome />
      </div>
    );
  }
}

export default Home;
