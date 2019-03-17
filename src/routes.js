import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import AppContainer from './components/App/AppContainer';
import Main from './components/Main/Main';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

export default (
    <Route path="/" component={AppContainer}>
        <IndexRedirect to="main"/>
        <Route path="/main" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="*" component={Main}/>
    </Route>
);
