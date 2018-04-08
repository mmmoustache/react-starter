import React from 'react';// eslint-disable-line
import Home from './templates/Home';
import Page from './templates/Page';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
    title: 'Home',
    showInNav: false,
    content: 'This is my home page',
  },
  {
    path: '/about/',
    exact: false,
    component: Page,
    title: 'About',
    showInNav: true,
    content: 'This is my about page',
  },
  {
    path: '/contact/',
    exact: false,
    component: Page,
    title: 'Contact',
    showInNav: true,
    content: 'This is my contact page',
  }
];

export default routes
