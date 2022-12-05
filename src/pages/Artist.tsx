import React from 'react';
import { useParams } from 'react-router-dom';

const Artist = () => {
  const { artistID } = useParams();

  return <div>Artist {artistID}</div>;
};

export default Artist;
