import { useEffect, useState } from 'react';
import { ITrackA, Paths } from '../helpers/constantsTypes';
import { useAppSelector } from '../Redux/hooks';

export const useCurrentTracks = (locationPath: string) => {
  const [currentTracks, setCurrentTracks] = useState<ITrackA[] | null>(null);

  const { tracks } = useAppSelector((state) => state.mainPage);
  const { albumTracks } = useAppSelector((state) => state.currentAlbum);
  const { chartTracks } = useAppSelector((state) => state.chartTracks);

  useEffect(() => {
    if (locationPath.includes(Paths.ALBUM)) {
      setCurrentTracks(albumTracks);
      return;
    }

    if (locationPath.includes(Paths.CHARTS)) {
      setCurrentTracks(chartTracks);
      return;
    }

    setCurrentTracks(tracks);
  }, [tracks, albumTracks, chartTracks]);

  return currentTracks;
};
