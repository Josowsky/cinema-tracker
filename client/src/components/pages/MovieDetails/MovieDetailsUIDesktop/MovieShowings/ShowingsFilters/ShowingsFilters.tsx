import React, { FunctionComponent } from 'react';

import { Switch } from 'components/ui/Switch/Switch';
import { ShowingsFilters as ShowingsFiltersType } from '../../../MovieDetails.constants';

import { StyledContainer, StyledHeader, StyledFiltersContainer, StyledFilterContainer } from './ShowingsFilters.style';

interface ShowingsFiltersProps {
  filters: ShowingsFiltersType;
  onChange: (
    filterName: 'screenType' | 'dialoguesType',
    filterValue: ShowingsFiltersType['screenType'] | ShowingsFiltersType['dialoguesType'],
  ) => void;
}

const ShowingsFilters: FunctionComponent<ShowingsFiltersProps> = ({ filters, onChange }) => (
  <StyledContainer role="group" aria-labelledby="filtersHeader">
    <StyledHeader id="filtersHeader">Rodzaj seansu</StyledHeader>
    <StyledFiltersContainer>
      <StyledFilterContainer>
        <Switch
          name="dialoguesType"
          value={filters.dialoguesType}
          options={[{ value: 'subtitles', label: 'Napisy' }, { value: 'dubbing', label: 'Dubbing' }]}
          onChange={onChange}
        />
      </StyledFilterContainer>
      <StyledFilterContainer>
        <Switch
          name="screenType"
          value={filters.screenType}
          options={[{ value: '2D', label: '2D' }, { value: '3D', label: '3D' }]}
          onChange={onChange}
        />
      </StyledFilterContainer>
    </StyledFiltersContainer>
  </StyledContainer>
);

export { ShowingsFilters };
