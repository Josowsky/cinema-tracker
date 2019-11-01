import React, { FunctionComponent } from 'react';

import { Movie } from 'shared/models';

import { MobilePosterLoader } from './MobilePosterLoader/MobilePosterLoader';
import { MobileInfoLoader } from './MobileInfoLoader/MobileInfoLoader';

import {
  StyledContainer,
  StyledTopContainer,
  StyledPoster,
  StyledInfoContainer,
  StyledTitle,
  StyledDescription,
  StyledDurationIcon,
  StyledDuration,
  StyledRatingContainer,
  StyledRating,
  StyledRatingIcon,
} from './MovieMobileHeader.style';

type MovieMobileHeaderProps = Pick<Movie, 'title' | 'description' | 'posterUrl' | 'duration' | 'rating'> & {
  isLoading: boolean;
};

const MovieMobileHeader: FunctionComponent<MovieMobileHeaderProps> = ({
  posterUrl,
  title,
  description,
  duration: { hours, minutes } = {},
  rating,
  isLoading,
}) => (
  <StyledContainer>
    <StyledTopContainer>
      {isLoading && <MobilePosterLoader />}
      {!isLoading && <StyledPoster src={posterUrl} alt={title} />}
      {isLoading && <MobileInfoLoader />}
      {!isLoading && (
        <StyledInfoContainer>
          <StyledTitle>{title}</StyledTitle>
          {hours && minutes && (
            <StyledDuration>
              <StyledDurationIcon />
              {`${hours} godz. ${minutes} min.`}
            </StyledDuration>
          )}
          <StyledDescription>{description}</StyledDescription>
        </StyledInfoContainer>
      )}
    </StyledTopContainer>
    {rating && (
      <StyledRatingContainer>
        {!isLoading && (
          <StyledRating>
            <StyledRatingIcon />
            {rating}
          </StyledRating>
        )}
      </StyledRatingContainer>
    )}
  </StyledContainer>
);

export { MovieMobileHeader };
