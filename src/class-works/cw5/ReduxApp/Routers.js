import React from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import TodoControl from './components/TodoControl';




function Routers() {
    return (
        <Container>
            <Router>
                <Header>
                </Header>
                <Menu>
                    <NavLink to="/products" className="item">
                        Products
                    </NavLink>
                </Menu>
                <Switch>
                    <Route path='/products' component={TodoControl} />
                </Switch>
            </Router>
        </Container>
    )
}

export default Routers
