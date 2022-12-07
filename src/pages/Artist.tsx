import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { IArtist, Paths } from '../helpers/constantsTypes';
import { filterArtists } from '../utils/filterArtist';
import ArtistsInfo from '../components/ArtistsInfo';
import { fetchAlbums } from '../Redux/thunks/fetchAlbums';
import Albums from '../components/Albums';

const Artist = () => {
  const { artistID } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { artists } = useAppSelector((state) => state.mainPage);

  const [artist, setArtist] = useState<IArtist | null>(null);

  useEffect(() => {
    artists.length
      ? setArtist(filterArtists(artists, Number(artistID)))
      : navigate(Paths.MAIN_PAGE);
  }, []);

  useEffect(() => {
    if (artist) dispatch(fetchAlbums(Number(artistID)));
  }, [artist]);

  return (
    <div>
      <ArtistsInfo artist={artist} />
      <Albums />
    </div>
  );
};

export default Artist;
