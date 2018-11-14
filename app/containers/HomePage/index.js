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
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import axios from 'axios';
import messages from './messages';

import { makeSelectRecords } from '../App/selectors';
import { makeSelectUserInput } from './selectors';
import reducer from './reducer';
import { changeInput } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    // console.log('did we get props?', this.props);
    // make a call to api to retrieve all entries
    // this.props.fetchAllStrings();
  }

  handleSaveString(e) {
    e.preventDefault();
    // console.log('This is input: ', this.props);
    axios
      .post('/api/submitPost', {
        text: this.props.userInput,
      })
      .then(() => this.props.clearInput())
      .catch(err => console.error(err));
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
              value={this.props.userInput}
              type="text"
              className="userInput"
              onChange={this.props.handleUserInput}
            />
          </label>
          <input value="submit" type="submit" />
        </form>
        <Link to="/history">Browse Entries</Link>
        {/* run map on repositories to print them in */}
        <h3>{this.props.userInput}</h3>
        {this.props.records.map(item => (
          <h4>{item}</h4>
        ))}
      </div>
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  handleUserInput(event) {
    // e.preventDefault();
    dispatch(changeInput(event.target.value));
  },
  clearInput() {
    dispatch(changeInput(''));
  },
  // handleSaveString(e) {
  //   e.preventDefault();
  //   console.log('This is input: ', this.props);
  // },
});

const mapStateToProps = createStructuredSelector({
  records: makeSelectRecords(),
  userInput: makeSelectUserInput(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'homePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
