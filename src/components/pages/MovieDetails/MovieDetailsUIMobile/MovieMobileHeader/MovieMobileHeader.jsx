import React from "react";
import { bool, string, number } from "prop-types";

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
  duration,
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
          {duration && (
            <StyledDuration>
              <StyledDurationIcon />
              {duration}
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
  duration: string,
  rating: number,
  isLoading: bool
};

export { MovieMobileHeader };
