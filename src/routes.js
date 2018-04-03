import React from 'react';
import {Route, IndexRoute} from 'react-router';
// import Home from './components/Test';
// import Test from './components/Test';

function Home () {
  return (
    <div>
      Home
    </div>
  )
}

function Test () {
  return (
    <div>
      TEST?!
    </div>
  )
}

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/test/',
    exact: false,
    component: Test,
  }
]

export default routes

