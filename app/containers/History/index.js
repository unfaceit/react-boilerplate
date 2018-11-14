/**
 *
 * History
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHistory from './selectors';
import { fetchAll } from './actions';
import reducer from './reducer';
import saga from './saga';

import { PageWrapper, EntriesList } from './historyUI';

/* eslint-disable react/prefer-stateless-function */
export class History extends React.PureComponent {
  componentDidMount() {
    // perform axios request
    // later substitue to saga

    // on load of the container do a request to DB to get all the records.
    this.loadHistory();
  }

  loadHistory() {
    axios
      .get('/api/fetchAll')
      .then(data => {
        const records = data.data;
        this.props.loadRecords(records);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <PageWrapper>
        <h4>Look at all the wonderful things people have shared with us:</h4>
        <EntriesList>
          {this.props.history.map(item => (
            <h4 className="entry" key={item.id}>
              {item.text}
            </h4>
          ))}
        </EntriesList>
        <Link to="/">Go Back</Link>
      </PageWrapper>
    );
  }
}

// History.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  history: makeSelectHistory(),
});

const mapDispatchToProps = dispatch => ({
  loadRecords(data) {
    dispatch(fetchAll(data));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'history', reducer });
const withSaga = injectSaga({ key: 'history', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(History);
