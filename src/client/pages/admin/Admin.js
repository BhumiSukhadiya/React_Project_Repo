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
import s from './Admin.css';
import history from '../../core/history';


class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  goToChildRoute= () => {
    history.push('/admin/users');
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>...</p>
          <button onClick={this.goToChildRoute}>Click to go subroute</button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
