import React, { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import { getSelectedGistById } from "../redux/selectors/gists";
import { fetchRawsByID } from '../redux/actions/raws';
import { getRawLoading, getSelectedRawById } from '../redux/selectors/raws';

function GetFiles() {

  const { gistId } = useParams();
  const selectedGists = useSelector(state => getSelectedGistById(state, gistId));
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedGists) {
      dispatch(fetchRawsByID({files: selectedGists.files, gistId}))
    }
  }, [gistId, selectedGists]);
  const files = useSelector(state => getSelectedRawById(state, gistId));


  return (
    <Container>
      <div>
        {selectedGists.owner.login}
      </div>
      {files.map(file =>
       <div>
         <div>
           {file.filename}
         </div>
         <SyntaxHighlighter language={file.language && file.language.toLowerCase()} style={dark}>
           {file.fileContent}
         </SyntaxHighlighter>
       </div>
      )}
    </Container>
  );
}

export default GetFiles;