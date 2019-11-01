import React, { FunctionComponent } from 'react';

import { Movie } from 'shared/models';

import { MovieShortInfo } from './MovieShortInfo/MovieShortInfo';
import { MovieDescription } from './MovieDescription/MovieDescription';
import { MovieShowings } from './MovieShowings/MovieShowings';
import { MovieDetailsContentLoader } from './MovieDetailsContentLoader/MovieDetailsContentLoader';
import { MovieShortInfoLoader } from './MovieShortInfoLoader/MovieShortInfoLoader';
import { MoviePosterLoader } from './MoviePosterLoader/MoviePosterLoader';
import { ShowingsFilters } from '../MovieDetails.constants';

import {
  StyledContainer,
  StyledBanner,
  StyledBannerContent,
  StyledPoster,
  StyledMovieInfo,
  StyledContentContainer,
} from './MovieDetailsUIDesktop.style';

interface MovieDetailsUIDesktopProps {
  isLoading: boolean;
  movie: Movie;
  filters: ShowingsFilters;
  onFilterChange: (
    filterName: 'screenType' | 'dialoguesType',
    filterValue: ShowingsFilters['screenType'] | ShowingsFilters['dialoguesType'],
  ) => void;
}

const MovieDetailsUIDesktop: FunctionComponent<MovieDetailsUIDesktopProps> = ({
  isLoading = false,
  movie: { posterUrl, bannerUrl, title, duration, description, rating, genre, showings },
  filters,
  onFilterChange,
}) => (
  <StyledContainer>
    <StyledBanner bannerUrl={bannerUrl}>
      <StyledBannerContent>
        {isLoading && <MoviePosterLoader />}
        {posterUrl && <StyledPoster src={posterUrl} alt={title} />}
        <StyledMovieInfo>
          {isLoading && <MovieShortInfoLoader />}
          {!isLoading && <MovieShortInfo title={title} duration={duration} rating={rating} genre={genre} />}
        </StyledMovieInfo>
      </StyledBannerContent>
    </StyledBanner>
    <StyledContentContainer>
      {isLoading && <MovieDetailsContentLoader />}
      {!isLoading && <MovieDescription description={description} />}
      {!isLoading && <MovieShowings groups={showings} filters={filters} onFiltersChange={onFilterChange} />}
    </StyledContentContainer>
  </StyledContainer>
);

export { MovieDetailsUIDesktop };
