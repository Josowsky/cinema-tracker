import React, { FunctionComponent } from 'react';
import { FaFileAlt, FaComments, FaSquare, FaClone } from 'react-icons/fa';

import { ShowingsFilters } from '../../MovieDetails.constants';

import { StyledContainer, StyledSwitchContainer, StyledOption } from './ShowingsMobileFilters.style';

interface ShowingsMobileFiltersProps {
  filters: ShowingsFilters;
  onFilterChange: (
    filterName: 'screenType' | 'dialoguesType',
    filterValue: ShowingsFilters['screenType'] | ShowingsFilters['dialoguesType'],
  ) => void;
}

const ShowingsMobileFilters: FunctionComponent<ShowingsMobileFiltersProps> = ({
  filters: { dialoguesType, screenType } = {},
  onFilterChange,
}) => (
  <StyledContainer>
    <StyledSwitchContainer>
      <StyledOption
        onClick={() => onFilterChange('dialoguesType', 'subtitles')}
        isSelected={dialoguesType === 'subtitles'}
      >
        <FaFileAlt /> Napisy
      </StyledOption>
      <StyledOption onClick={() => onFilterChange('dialoguesType', 'dubbing')} isSelected={dialoguesType === 'dubbing'}>
        <FaComments /> Dubbing
      </StyledOption>
      <StyledOption onClick={() => onFilterChange('screenType', '2D')} isSelected={screenType === '2D'}>
        <FaSquare /> 2D
      </StyledOption>
      <StyledOption onClick={() => onFilterChange('screenType', '3D')} isSelected={screenType === '3D'}>
        <FaClone /> 3D
      </StyledOption>
    </StyledSwitchContainer>
  </StyledContainer>
);

export { ShowingsMobileFilters };
