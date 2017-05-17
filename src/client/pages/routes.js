/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
import Home from './home/Home.route.js';
import Contact from './contact/Contact.route.js';
import Login from './login/Login.route.js';
import Register from './register/Register.route.js';
import About from './about/About.route';
import Privacy from './privacy/Privacy.route.js';
import Admin from './admin/Admin.route.js';
import Test_route from './test_route/Test_route.route.js';
import NotFound from './notFound/NotFound.route';
import User from './user/User.route';
//import Carouseldemo from './carouseldemo/Carouseldemo.route';
import TabComponent from './tabComponent/TabComponent.route';
export default {

  path: '/',
    // Keep in mind, routes are evaluated in order
  children: [
    Home,
    Contact,
    Login,
    Register,
    About,
    Privacy,
    Admin,
    Test_route,
    User,
    // Carouseldemo,
    TabComponent,
        // Wildcard routes, e.g. { path: '*', ... } (must go last)
    NotFound,
  ],

  async action({ next }) {
        // Execute each child route until one of them return the result
    const route = await next(true);

        // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },

};
