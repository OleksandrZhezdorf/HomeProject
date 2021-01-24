import React from 'react';
import "./blog-v2.css";
import { Container, Header, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import User from './containers/User';
import Posts from './containers/Posts';
import Home from './containers/Home';
import UserDetails from './containers/UserDetails';
import NotFound from './containers/NotFound';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition
            key={location.key} 
            classNames="slide"
            timeout={1000}
        >
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/users" exact component={User}/>
                <Route path="/posts" exact component={Posts}/>
                <Route path="/users/:userId" component={UserDetails}/>
                <Route path='*' component={NotFound}    />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));


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
                <AnimatedSwitch />
            </Router>
        </Container>
    )
}

export default BlogV2;