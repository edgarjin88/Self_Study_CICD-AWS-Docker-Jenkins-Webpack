import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';
import ArtistDetail from './components/artists/ArtistDetail';
// import ArtistCreate from './components/artists/ArtistCreate';
// import ArtistEdit from './components/artists/ArtistEdit';  // 

const componentsRoutes = { 
  
  component: Home,
  path: '/',
  indexRoute: {component: ArtistMain}, //like an index.html
  childRoutes:[
    {path: 'artists/new',
      getComponent(location, cb){
        System.import('./components/artists/ArtistCreate')
        .then(module => cb(null, module.default)); 
    }},
    {path: 'artists/:id',
    getComponent(location, cb){
      System.import('./components/artists/ArtistDetail')
      .then(module => cb(null, module.default)); 
  }},
  {path: 'artists/:id/edit',
  getComponent(location, cb){
    System.import('./components/artists/ArtistEdit')
    .then(module => cb(null, module.default)); 
}}
  ]
}; 

//System.import. code splitting. 
//webpack just manually scanning System.import for code splitting, so no helper function can be used here. 

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentsRoutes}/>
  );
};

export default Routes;
