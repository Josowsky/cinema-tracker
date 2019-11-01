import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { FaHome, FaInfoCircle, FaUser } from 'react-icons/fa';

import { routes } from 'shared/constants/constants.routes';
import { arePathsEqual } from 'shared/utils/arePathsEqual';

import { StyledContainer, StyledMenuElement, StyledIcon, StyledTitle } from './FooterMenu.style';

const MENU_ELEMENTS = [
  {
    route: routes.home,
    icon: FaHome,
    title: 'Filmy',
  },
  {
    route: '/credits',
    icon: FaUser,
    title: 'Autorzy',
  },
  {
    route: '/about',
    icon: FaInfoCircle,
    title: 'O aplikacji',
  },
];

const FooterMenu: FunctionComponent<RouteComponentProps> = ({ location: { pathname } }) => (
  <StyledContainer>
    {MENU_ELEMENTS.map(({ route, icon: Icon, title }) => {
      const isSelected = arePathsEqual(route, pathname);

      return (
        <StyledMenuElement key={route} to={route} isSelected={isSelected}>
          <StyledIcon isSelected={isSelected}>
            <Icon />
          </StyledIcon>
          <StyledTitle isSelected={isSelected}>{title}</StyledTitle>
        </StyledMenuElement>
      );
    })}
  </StyledContainer>
);

const FooterMenuHOC = withRouter(FooterMenu);

export { FooterMenuHOC as FooterMenu };
