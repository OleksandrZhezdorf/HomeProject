import { Container, Header, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import React from "react";
import HomePage from "./containers/HomePage";
import Gists from "./containers/Gists";
import NotFound from "../hw5/containers/NotFound";



export default function Navigation() {
  return (
    <Container>
      <Router>
        <Header>
          <NavLink to='/' activeClassName='active-nav'>Gists Explorer</NavLink>
        </Header>
        <Menu>
          <NavLink to='/gists' exact className='item' activeClassName='active-nav'>All the gists are here</NavLink>
        </Menu>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/gists' component={Gists} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </Container>
  )
}