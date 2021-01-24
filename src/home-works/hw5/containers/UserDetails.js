import React from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { Card, Container, Grid, Header, Icon, Image, List } from "semantic-ui-react";
import LoadingOverlay from '../../../class-works/cw2/life-cycle-example/components/LoadingOverlay';

import useData from "../hooks/useData";
import Album from "./Album";
import NotFound from './NotFound';
import Todos from './Todos';


function UserDetails() {
  const { userId } = useParams();
  const { path, url } = useRouteMatch();  // /users/:userId, /users/1

  const [user, isLoading] = useData(`/users/${userId}`, null);
  const [albums] = useData(`/users/${userId}/albums`, []);
  const [todos] = useData(`/users/${userId}/todos`, []);

  return (
    <Container>
      <LoadingOverlay active={isLoading} />
      {user &&
        <Grid>
          <Grid.Column width={6}>
            <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>{user.name}</Card.Header>
                <Card.Meta>
                  <span className='date'>{user.email}</span>
                </Card.Meta>
                <Card.Description>
                  {user.address.city}, {user.address.street} {user.address.zipcode}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                {user.company.name}
              </Card.Content>
              <Card.Content extra>
                <Icon name='camera' />
                {albums.length} Albums
              <List>
                  {albums.map(album => <List.Item>
                    <Link to={`${url}/albums/${album.id}`}>{album.title}</Link>
                  </List.Item>)}
                </List>
              </Card.Content>
              <Card.Content extra>
                <Icon name='clock' />
                <Link to={`${url}/todos`}>{todos.length} Todos</Link>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={10}>
            <Switch>
              <Route exact path={path}>
                <Header as='h3'>Select an album</Header>
              </Route>
              <Route path={`${path}/albums/:albumId`}>
                <Album />
              </Route>
              <Route path='*'>
                <Header as='h3'>Select an album</Header>
              </Route>
              <Route path={`${path}/todos`}>
                <Todos />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </Grid.Column>
        </Grid>
      }
    </Container>
  );
}

export default UserDetails;