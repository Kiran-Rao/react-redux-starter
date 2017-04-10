import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counter';
import { Button, Welcome } from '../components';


const App = ({ count, increase, decrease }) => {
  return (
    <div>
      <Welcome count={count} />
      <Button title="Increase" click={increase} />
      <Button title="Decrease" click={decrease} />
    </div>
  );
};


const mapStateToProps = (state) => ({
  count: state.counter.get('count')
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increment()),
  decrease: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
