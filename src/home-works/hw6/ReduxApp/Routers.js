import React from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import NotFound from '../../hw5/containers/NotFound';
import ProductControl from './components/ProductControl';
import CartList from './components/CartList';
import CartIcon from './components/CartIcon';
import Shop from './components/Shop';



function Routers() {
    return (
        <Container>
            <Router>
                <Header>
                    <NavLink to='/'>Shop</NavLink>
                </Header>
                <Menu>
                    <NavLink to="/products" className="item">
                        Products
                    </NavLink>
                    <NavLink to='/cart' className='item' activeClassName='active-nav'>
                        Cart
                        <CartIcon />
                    </NavLink>
                </Menu>
                <Switch>
                    <Route path='/' exact component={Shop} />
                    <Route path='/products' component={ProductControl} />
                    <Route path='/cart' component={CartList} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
        </Container>
    )
}

export default Routers
