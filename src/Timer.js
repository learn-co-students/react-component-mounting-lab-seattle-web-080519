import React, { Component } from 'react';

class Timer extends Component {

  state = {
    time: 0,
    color: '#'+Math.floor(Math.random()*16777215).toString(16)
  };

  // The componentDidMount method is often a good place to include setInterval or setTimeout functions, allowing you to delay something from happening on a component or cause some repeating change. Perfect for our timer app.
// In the Timer component, there is already a method, clockTick, that handles updating the state. The state value, time, is then included in the render. We just need to set up an interval to call clockTick.
// To create a setInterval, the best practice is to assign it to a variable within the scope of our class:
// Write a componentDidMount that initializes an interval. Pass clockTick as the callback function and set it to 1000 to update every second:
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000)
  };


  // clean up after ourselves when it comes to intervals. Not cleaning up can cause memory leaks (meaning that system memory is allocated to something that is no longer necessary and won't free up), as intervals can keep firing after a component unmounts.
  // clear an interval, we use the built in clearInterval method, passing in the local variable:
  // Write a componentWillUnmount method in Timer that cleans up the interval you've created:
  componentWillUnmount() {
    this.interval = clearInterval(this.interval);
  };
  



  render() {

    const { time, color, className } = this.state
    return (
      <section className="Timer" style={{background: color}}>

        <h1>{ time }</h1>
        <button onClick={ this.stopClock }>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={ this.handleClose }>X</small>

      </section>
    );
  }

  //clock functions
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time+1
    }))
  }

  stopClock = () => {
    clearInterval(this.interval)
  }

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id)
  }


}

export default Timer;
