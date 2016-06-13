import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import Home from './components/home';
import KennelDashboard from './components/dashboard/kenneldashboard';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<KennelDashboard />)
      });
    }
  });

  let pathFor = (path, params) => {
    let query = params && params.query ? FlowRouter._qs.parse(params.query) : {};
    return FlowRouter.path(path, params, query);
  };

  let urlFor = (path, params) => {
    return Meteor.absoluteUrl(pathFor(path, params));
  };

  let currentRoute = (route) => {
    FlowRouter.watchPathChange();
    return FlowRouter.current().route.name === route ? 'active' : '';
  };

  FlowHelpers = {
    pathFor: pathFor,
    urlFor: urlFor,
    currentRoute: currentRoute
  };
}
