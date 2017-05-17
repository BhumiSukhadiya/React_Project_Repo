/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import { connect } from 'react-redux';
import history from '../../core/history';
import { setToken } from '../../pages/login/Login.action';
import cookie from 'react-cookie';

class Navigation extends React.Component {

  doLogout = () => {
        // localStorage.removeItem('token');
    cookie.remove('token');
    this.props.dispatch(setToken(undefined));
    history.push('/');
  }

  componentWillMount() {
            // console.log(localStorage);

    this.setState({
      token: cookie.load('token'),
    });
  }

  shouldComponentUpdate() {
    return true;
  }
  componentWillReceiveProps() {
    this.setState({
      token: cookie.load('token'),
    });
  }

  render() {
    //console.log('render');
    //console.log(this.state);
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/about">About</Link>
        <Link className={s.link} to="/contact">Contact</Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/test">Test Page</Link>
        {this.state.token == undefined ? <span><Link className={s.link} to="/login">Log in</Link>
          <span className={s.spacer}>or</span>
          <Link className={cx(s.link)} to="/register">Sign up</Link></span> :
        <button onClick={this.doLogout}>Logout</button> }
        <Link className={s.link} to="/tabComponent">Tab component</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({ token: state.authentication.token });

export default connect(mapStateToProps)(withStyles(s)(Navigation));
