import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Container, Header, List } from "semantic-ui-react";
import LoadingOverlay from '../../../class-works/cw2/life-cycle-example/components/LoadingOverlay';
import useData from "../hooks/useData";


function Todos() {
    const { userId } = useParams();
    const [error] = useData(`/users/${userId}/todos`, {});
    const [todos, isLoading] = useData(`/users/${userId}/todos`, []);
    console.log(todos);

    if (error && error.status === 404) {
        console.log(error);
        return <Redirect to={`/users/${userId}`} />
    }

    return (
        <Container>
            <Header>Todo list</Header>
            <LoadingOverlay active={isLoading} />
            <List>
                {todos.map(todo => <List.Item>{todo.title}</List.Item>)}
            </List>
        </Container>
    )
}

export default Todos