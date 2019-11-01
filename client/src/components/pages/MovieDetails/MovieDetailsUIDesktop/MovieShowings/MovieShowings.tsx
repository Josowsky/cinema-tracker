import React, { FunctionComponent } from 'react';

import { ShowingGroup as ShowingGroupType } from 'shared/models';

import { ShowingGroup } from './ShowingGroup/ShowingGroup';
import { ShowingsFilters } from './ShowingsFilters/ShowingsFilters';
import { ShowingsFilters as ShowingsFiltersType } from '../../MovieDetails.constants';

import { StyledContainer, StyledTitle, StyledShowingsGroup } from './MovieShowings.style';

interface MovieDetailsUIDesktopProps {
  filters: ShowingsFiltersType;
  groups: ShowingGroupType[];
  onFiltersChange: (
    filterName: 'screenType' | 'dialoguesType',
    filterValue: ShowingsFiltersType['screenType'] | ShowingsFiltersType['dialoguesType'],
  ) => void;
}

const MovieShowings: FunctionComponent<MovieDetailsUIDesktopProps> = ({ filters, groups, onFiltersChange }) => (
  <StyledContainer>
    <StyledTitle>Sense</StyledTitle>
    <ShowingsFilters filters={filters} onChange={onFiltersChange} />
    {groups &&
      groups.map(group => (
        <StyledShowingsGroup key={group.date}>
          <ShowingGroup group={group} />
        </StyledShowingsGroup>
      ))}
  </StyledContainer>
);

export { MovieShowings };
