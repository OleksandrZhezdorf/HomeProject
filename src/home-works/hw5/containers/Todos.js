import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Container, Header, List } from "semantic-ui-react";
import LoadingOverlay from '../../../class-works/cw2/life-cycle-example/components/LoadingOverlay';
import useData from "../hooks/useData";


function Todos() {
    const { userId, todoId } = useParams();
    const [todos] = useData(`/users/${userId}/todos`, []);
    const [todo, , error] = useData(`/todos/${todoId}`, {});
    const [user, isLoading] = useData(`/users/${userId}`, null);

    if (error && error.status === 404) {
        console.log(error);
        return <Redirect to={`/users/${userId}`} />
    }

    return (
        <Container>
            <LoadingOverlay active={isLoading} />
            <Header>{todo.title}</Header>
            <List>
              {todos.map(todo => <List.Item>{todo.title}</List.Item> )}
            </List>
        </Container>
    )
}

export default Todos