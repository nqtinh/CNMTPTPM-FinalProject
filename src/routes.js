import React from 'react';
import DefaultLayout from './components/DefaultLayout';

const Following = React.lazy(() => import('./views/Following'));
const Followers = React.lazy(() => import('./views/Followers'));
const Tweets = React.lazy(() => import('./views/Tweets'));
const EditProfile = React.lazy(() => import('./views/EditProfile'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/following', name: 'Following', component: Following },
  { path: '/followers', name: 'Followers', component: Followers },
  { path: '/tweets', name: 'Tweets', component: Tweets },
  { path: '/editprofile', name: 'EditProfile', component: EditProfile },
];

export default routes;