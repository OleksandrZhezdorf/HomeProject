import React, { useState, useEffect } from 'react';
import { Card, Icon, Image, List } from "semantic-ui-react";
import LoadingOverlay from "./LoadingOverlay";

function AuthorInfo({ authorId }) {
  const [author, setAuthor] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAuthor = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setAuthor(data);
      })
  };

  const fetchAlbums = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
      .then(response => response.json())
      .then(albums =>{
        setLoading(false);
        setAlbums(albums);
      })
  };

  useEffect(() => {
    if (authorId) {
      fetchAuthor();
      fetchAlbums();
    }
  }, [authorId]);

  return (
    <div className='author-fixed'>
      <LoadingOverlay active={loading} />
      {author &&
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false}/>
        <Card.Content>
          <Card.Header>{author.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{author.email}</span>
          </Card.Meta>
          <Card.Description>
            {author.address.city}, {author.address.street} {author.address.zipcode}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='camera'/>
            {albums.length} Albums
            <List>
              {albums.map(album => <List.Item>{album.title}</List.Item> )}
            </List>
          </a>
        </Card.Content>
      </Card>
      }
    </div>
  )
}

export default AuthorInfo;