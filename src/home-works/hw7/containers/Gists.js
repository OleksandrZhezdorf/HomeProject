import React, { useEffect } from 'react';
import { Container, Grid } from "semantic-ui-react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GistList from "../components/GistList";
import { getGistLoading, getGists } from "../redux/selectors/gists";
import LoadingOverlay from '../../../class-works/cw2/life-cycle-example/components/LoadingOverlay';
import { getGistsbyID } from '../redux/actions/gists';
import GetFiles from '../components/GistFiles';


function Gists() {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const gists = useSelector(getGists);
  const isFetching = useSelector(getGistLoading);




  useEffect(() => {
    dispatch(getGistsbyID());
  }, []);

  return (
    <Container>
      <LoadingOverlay active={isFetching} />
      <Grid>
        <Grid.Column width={7}>
          <GistList gists={gists} />
        </Grid.Column>
        <Grid.Column width={9}>
          <Switch>
            <Route path={`${path}/:gistId`} exact>
              <GetFiles />
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Gists;
