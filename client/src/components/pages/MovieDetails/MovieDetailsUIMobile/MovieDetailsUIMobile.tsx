import React, { FunctionComponent } from 'react';

import { MovieMobileHeader } from './MovieMobileHeader/MovieMobileHeader';
import { ShowingsMobileFilters } from './ShowingsMobileFilters/ShowingsMobileFilters';
import { ShowingMobileGroup } from './ShowingMobileGroup/ShowingMobileGroup';

import { Movie } from 'shared/models';
import { ShowingsFilters } from '../MovieDetails.constants';

import { StyledContainer } from './MovieDetailsUIMobile.style';

interface MovieDetailsUIMobileProps {
  isLoading: boolean;
  movie: Movie;
  filters: ShowingsFilters;
  onFilterChange: (
    filterName: 'screenType' | 'dialoguesType',
    filterValue: ShowingsFilters['screenType'] | ShowingsFilters['dialoguesType'],
  ) => void;
}

const MovieDetailsUIMobile: FunctionComponent<MovieDetailsUIMobileProps> = ({
  isLoading = false,
  movie: { posterUrl, title, duration, description, rating, showings },
  filters,
  onFilterChange,
}) => (
  <StyledContainer>
    <MovieMobileHeader
      posterUrl={posterUrl}
      title={title}
      description={description}
      duration={duration}
      rating={rating}
      isLoading={isLoading}
    />
    <ShowingsMobileFilters filters={filters} onFilterChange={onFilterChange} />
    {showings && showings.map(group => <ShowingMobileGroup key={group.date} group={group} />)}
  </StyledContainer>
);

export { MovieDetailsUIMobile };
