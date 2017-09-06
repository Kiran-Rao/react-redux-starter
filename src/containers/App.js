import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, pingApi } from '../redux/counter/actions';
import Welcome from '../components/Welcome';
import Button from '../components/Button';


const App = ({ count, message, ping, increase, decrease }) => {
  return (
    <div>
      <Welcome count={count} message={message} />
      <Button title="Increase" click={increase} />
      <Button title="Decrease" click={decrease} />
      <Button title="Ping" click={ping} />
    </div>
  );
};


const mapStateToProps = (state) => ({
  count: state.counter.get('count'),
  message: state.counter.get('message')
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increment()),
  decrease: () => dispatch(decrement()),
  ping: () => dispatch(pingApi())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
