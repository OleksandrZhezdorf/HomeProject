import React, { useEffect } from 'react';
import { Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentAuthState } from "../redux/selectors/auth";
import { Link } from "react-router-dom";
import { fetchSessionDeclined } from '../redux/slices/auth';

function Logout() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSessionDeclined());
    }, []);
    const { user } = useSelector(getCurrentAuthState);
    return (
        <Container>
            <h1>
                {user && <span>Welcome {user}, please visit <Link to='/products'>store</Link> to buy something</span>}
                {!user && <span>Hello, please <Link to='/signin'>login</Link> to see products</span>}
            </h1>
        </Container>
    );
}

export default Logout;
