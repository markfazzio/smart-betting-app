import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from 'semantic-ui-react';
import { MainMenu } from './components/MainMenu';
import { Home } from './pages/Home';
import { OpenTickets } from './pages/OpenTickets';

export const App = () =>  {
  return (
    <Router>
      <Container>
        <MainMenu />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/open-tickets">
            <OpenTickets />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
