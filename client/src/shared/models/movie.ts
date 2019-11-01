import { ShowingGroup } from './showingGroup';

export interface Movie {
  id: number;
  genre: string;
  posterUrl: string;
  bannerUrl?: string;
  rating: number;
  duration: {
    hours: number;
    minutes: number;
  };
  title: string;
  description: string;
  showings: ShowingGroup[];
}

export interface MovieShortInfo {
  id: number;
  genre: string;
  posterUrl: string;
  rating: number;
  title: string;
  showingsTime: string[];
}
