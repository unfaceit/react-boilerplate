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
import Button from '../../components/Button';

import { makeSelectRecords } from '../App/selectors';
import { makeSelectUserInput } from './selectors';
import reducer from './reducer';
import { changeInput } from './actions';
import { PageWrapper, Form, Label, TextArea } from './homePageUI';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    // console.log('did we get props?', this.props);
    // make a call to api to retrieve all entries
    // this.props.fetchAllStrings();
  }

  handleSaveString(e) {
    e.preventDefault();
    axios
      .post('/api/submitPost', {
        text: this.props.userInput,
      })
      .then(() => this.props.clearInput())
      .catch(err => console.error(err));
  }

  render() {
    return (
      <PageWrapper>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
        <Form onSubmit={e => this.handleSaveString(e)}>
          <Label>Please enter whatever you want to save:</Label>
          <TextArea
            value={this.props.userInput}
            type="text"
            className="userInput"
            onChange={this.props.handleUserInput}
          />
          <Button value="Submit">
            <input type="submit" />
          </Button>
        </Form>
        {/* <Button value="Browse Entries"> */}
        {/* Wrapping link in Button tag did not work as eslint self-close the tag. eslint-ignore did not help. Adjusted global <a> tag. */}
        <Link to="/history">Browse Entries</Link>
        {/* </Button> */}
      </PageWrapper>
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
