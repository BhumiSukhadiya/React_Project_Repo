import React from 'react';
import Layout from '../../components/Layout';
import TabComponent from './TabComponent';

const title = 'TabComponent';

export default {
    path: '/tabComponent',
    action() {
        return {
            title,
            component: <Layout><TabComponent title={title} /></Layout>,
        };
    },
};
