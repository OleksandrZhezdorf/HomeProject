import React from 'react';
import "./blog-v2.css";
import { Container, Header, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import User from './containers/User';
import Posts from './containers/Posts';
import Home from './containers/Home';
import UserDetails from './containers/UserDetails';
import NotFound from './containers/NotFound';

function BlogV2() {
    return (
        <Container>
            <Router>
                <Header>
                    <NavLink to="/">
                        Blog v2
                    </NavLink>
                </Header>
                <Menu>
                    <NavLink to="/users" className="item">
                        Users
                    </NavLink>
                    <NavLink to="/posts" className="item">
                        Posts
                    </NavLink>
                </Menu>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/users" exact>
                        <User />
                    </Route>
                    <Route path="/posts" exact>
                        <Posts/>
                    </Route>
                    <Route path = "/users/:userId">
                        <UserDetails />
                    </Route>
                    <Route path = '*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default BlogV2;