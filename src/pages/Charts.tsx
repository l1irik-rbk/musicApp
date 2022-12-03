import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../components/Filters';
import { useAppDispatch } from '../Redux/hooks';
import { fetchChartArtists } from '../Redux/thunks/fetchChartArtists';

const Charts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('useEffect');
    // dispatch(fetchChartArtists());
  }, []);

  return (
    <div>
      <Filters />
    </div>
  );
};

export default Charts;
