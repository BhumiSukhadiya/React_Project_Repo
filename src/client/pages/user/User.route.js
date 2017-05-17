import React from 'react';
import Layout from '../../components/Layout';
import User from './User';

const title = 'User';

export default {
  path: '/user',
  action() {
    return {
      title,
      component: <Layout><User title={title} /></Layout>,
    };
  },
};
