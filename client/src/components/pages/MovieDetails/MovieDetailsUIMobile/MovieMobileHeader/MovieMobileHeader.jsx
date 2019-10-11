import React from "react";
import { bool, string, number, shape } from "prop-types";

import { MobilePosterLoader } from "./MobilePosterLoader/MobilePosterLoader";
import { MobileInfoLoader } from "./MobileInfoLoader/MobileInfoLoader";

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
  StyledRatingIcon
} from "./MovieMobileHeader.style";

const MovieMobileHeader = ({
  image,
  title,
  description,
  duration: { hours, minutes } = {},
  rating,
  isLoading
}) => (
  <StyledContainer>
    <StyledTopContainer>
      {isLoading && <MobilePosterLoader />}
      {!isLoading && <StyledPoster src={image} alt={title} />}
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

MovieMobileHeader.propTypes = {
  image: string,
  title: string,
  description: string,
  duration: shape({
    hours: number,
    minutes: number
  }),
  rating: number,
  isLoading: bool
};

export { MovieMobileHeader };
