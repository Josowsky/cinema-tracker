import styled from "styled-components";
import defaultBanner from "./banner.jpg";

export const StyledContainer = styled.div`
  background: white;
  width: 100%;
  position: relative;
`;

export const StyledBanner = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
  display: flex;
  padding: 0 32px;
  background: ${({ bannerUrl }) =>
      bannerUrl
        ? "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
        : `linear-gradient(rgba(56, 216, 213, 0.7), rgba(56, 216, 213, 0.7))`},
    url(${({ bannerUrl }) => (bannerUrl ? bannerUrl : defaultBanner)});
  background-size: cover;
`;

export const StyledBannerContent = styled.div`
  display: flex;
  position: relative;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  flex-grow: 1;
`;

export const StyledPoster = styled.img`
  width: 250px;
  position: absolute;
  top: -24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.6);
`;

export const StyledMovieInfo = styled.div`
  color: white;
  margin-left: 282px;
  margin-bottom: 32px;
`;

export const StyledContentContainer = styled.div`
  max-width: 1300px;
  padding: 0 32px 0 314px;
  box-sizing: border-box;
  margin: auto;
`;
