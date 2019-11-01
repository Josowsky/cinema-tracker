import React, { FunctionComponent } from 'react';

import { Movie } from 'shared/models';

import { StyledContainer, StyledTitle } from './MovieDescription.style';

type MovieDescriptionProps = Pick<Movie, 'description'>;

const MovieDescription: FunctionComponent<MovieDescriptionProps> = ({ description }) => (
  <StyledContainer>
    <StyledTitle>Opis</StyledTitle>
    <p>{description}</p>
  </StyledContainer>
);

export { MovieDescription };
