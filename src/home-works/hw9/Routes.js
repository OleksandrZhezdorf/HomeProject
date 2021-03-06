import { Container, Header, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import Register from "./containers/Register";
import NotFoundPage from "./containers/404";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/products";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import { getCurrentAuthState } from "./redux/selectors/auth";
import { fetchSession, fetchSessionDeclined } from "./redux/slices/auth";
import LoadingOverlay from "../../class-works/cw2/life-cycle-example/components/LoadingOverlay";
import Logout from "./containers/Logout";

export default function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSession());
    dispatch(fetchSessionDeclined());
  }, []);
  const { hasLoaded } = useSelector(getCurrentAuthState);
  if (!hasLoaded) {
    return <LoadingOverlay active={true} />
  }
  return (
    <Container>
      <Router>
        <Header>
          <NavLink to='/' activeClassName='active-nav'>Shop</NavLink>
        </Header>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={Register} />
          <Route path='/signin' exact component={Login} />
          <Route path='/logout' exact component={Logout} />
          <Route path='/products' exact component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </Container>
  )
}
