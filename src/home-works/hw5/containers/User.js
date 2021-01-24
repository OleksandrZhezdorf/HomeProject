import React from 'react'
import { Container, Grid, Card, Image, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import LoadingOverlay from '../../../class-works/cw2/life-cycle-example/components/LoadingOverlay';
import useData from '../hooks/useData'

export default function User() {
    const [users, isLoading] = useData('/users', []);

    return (
        <Container>
            <LoadingOverlay active={isLoading} />
            <Grid columns={4}>
                {users.map(user => (
                    <Grid.Column>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                                <Link to={`/users/${user.id}`}>{user.name}</Link>
                                <Card.Meta>
                                    <span className='date'>{user.email}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {user.address.street}, {user.address.suite}, {user.address.city}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                ))}
            </Grid>
        </Container>
    )
}
