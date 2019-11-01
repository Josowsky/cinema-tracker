import styled from 'styled-components';

import { grey, accentColor2 } from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  display: inline-flex;
`;

interface StyledOptionProps {
  isSelected: boolean;
}

export const StyledOption = styled.div<StyledOptionProps>`
  cursor: pointer;
  padding: 8px 16px;
  color: ${({ isSelected }) => (isSelected ? '#fff' : grey)};
  background-color: ${({ isSelected }) => (isSelected ? accentColor2 : '#fff')};
  border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid rgba(69, 69, 69, 0.3)')};
  margin-right: -1px;
`;
