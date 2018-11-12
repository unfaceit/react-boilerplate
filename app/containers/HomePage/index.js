/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import messages from './messages';

import { makeSelectRecords } from '../App/selectors';
import { makeSelectUserInput } from './selectors';
import reducer from './reducer';
import { changeInput } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    console.log('did we get props?', this.props);
    // make a call to api to retrieve all entries
    // this.props.fetchAllStrings();
  }

  // handleSaveString(e) {
  //   e.preventDefault();
  //   console.log('This is input: ', this.props);
  // }

  componentWillReceiveProps() {
    console.log('we recieved props but usinfg redux');
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <form onSubmit={e => this.handleSaveString(e)}>
          <label>
            Please enter whatever you want to save:
            <input
              type="text"
              className="userInput"
              onChange={this.props.handleUserInput}
            />
          </label>
          <input value="submit" type="submit" />
        </form>
        {/* run map on repositories to print them in */}
        <h3>{this.props.userInput}</h3>
        {this.props.records.map(item => (
          <h4>{item}</h4>
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  records: makeSelectRecords(),
  userInput: makeSelectUserInput(),
});
export const mapDispatchToProps = dispatch => ({
  handleUserInput(e) {
    dispatch(changeInput(e.target.value));
  },
  handleSaveString(e) {
    e.preventDefault();
    console.log('This is input: ', this.props);
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'homePage', reducer });

export default compose(
  withConnect,
  withReducer,
)(HomePage);
