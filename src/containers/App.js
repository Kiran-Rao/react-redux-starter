import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counter';
import Button from '../components/button';

const App = (props) => {
  return (
    <div>
      <div>
        Hello world! The count is: {props.count}
      </div>
      <Button title="Increase" click={props.increment} />
      <Button title="Decrease" click={props.decrement} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.get('count')
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
