/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';
import { doLogin } from './Login.action';
import { connect } from 'react-redux';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  handleLoginClick = () => {
    history.push('/');
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(doLogin());
    history.push('/test');
  }


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <form method="post" onSubmit={this.onFormSubmit}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="usernameOrEmail">
                                Username or email address:
                            </label>
              <input
                className={s.input}
                id="usernameOrEmail"
                type="text"
                name="usernameOrEmail"
                autoFocus
              />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                                Password:
                            </label>
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
              />
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                                Log in
                            </button>
            </div>
          </form>
          <button onClick={this.handleLoginClick}>Click me to go home</button>
        </div>
      </div>
    );
  }
}

export default connect()(withStyles(s)(Login));
