import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Works from '../pages/Works';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevDepth: this.getPathDepth(this.props.location)
    };
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter(n => n !== '');
    return pathArr.length;
  }

  UNSAFE_componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 800, exit: 400 };
    return (
      <>
        <Navbar />
        <TransitionGroup component='div' className='App'>
          <CSSTransition
            timeout={timeout}
            classNames='pageSlider'
            mountOnEnter={false}
            unmountOnExit={true}
            key={currentKey}
            >
            <div
              className={
                this.getPathDepth(location) - this.state.prevDepth >= 0
                  ? 'left'
                  : 'right'
              }>
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/works' component={Works} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}

export default withRouter(App);
