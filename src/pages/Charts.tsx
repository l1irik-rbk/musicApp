import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../Redux/hooks';
import { fetchChartArtists } from '../Redux/thunks/fetchChartArtists';

const Charts = () => {
  const { chartName } = useParams();
  const dispatch = useAppDispatch();
  console.log(chartName);

  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchChartArtists());
  }, []);

  return <div>{chartName}</div>;
};

export default Charts;
