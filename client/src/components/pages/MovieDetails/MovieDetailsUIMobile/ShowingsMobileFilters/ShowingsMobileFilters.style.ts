import styled from 'styled-components';

import { grid, grey, accentColor2 } from 'shared/constants/constants.style';

export const StyledContainer = styled.section`
  margin: ${grid}px 0 ${grid * 2}px;
  border-bottom: 1px solid ${grey};
  display: flex;
  color: ${grey};
`;

export const StyledSwitchContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;

interface StyledOptionProps {
  isSelected: boolean;
}

export const StyledOption = styled.div.attrs(() => ({
  tabIndex: 1,
}))<StyledOptionProps>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${grid / 2}px 0;
  border-bottom: 4px solid ${({ isSelected }) => (isSelected ? accentColor2 : 'transparent')};

  svg {
    margin-right: ${grid / 2}px;
    color: ${({ isSelected }) => (isSelected ? accentColor2 : grey)};
  }
`;
