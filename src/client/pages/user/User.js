import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './User.css';

class User extends Component {
  render() {
    return (
      <div>User</div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

User.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
