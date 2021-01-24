import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Container, Header, Image } from "semantic-ui-react";
import LoadingOverlay from '../../../class-works/cw2/life-cycle-example/components/LoadingOverlay';
import useData from "../hooks/useData";
import Glider from '../../hw2/glider';



function Album() {
  const { userId, albumId } = useParams();
  const [album, , error] = useData(`/albums/${albumId}`, {});
  const [photos, isFetching] = useData(`/albums/${albumId}/photos`, []);

  if (error && error.status === 404) {
    console.log(error);
    return <Redirect to={`/users/${userId}`}/>
  }

  return (
    <Container>
      <LoadingOverlay active={isFetching} />
      <Header>{album.title}</Header>
      {photos.length > 0 &&
      <Glider>
        {photos.map(photo => <Image src={photo.url} rounded/>)}
      </Glider>
      }
    </Container>
  );
}

export default Album;
