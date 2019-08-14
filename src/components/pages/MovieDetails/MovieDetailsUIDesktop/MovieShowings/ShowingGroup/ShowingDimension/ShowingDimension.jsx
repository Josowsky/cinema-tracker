import React from "react";
import { oneOf } from "prop-types";

import {
  StyledContainer,
  Styled2DIcon,
  Styled3DIcon
} from "./ShowingDimension.style";

const ShowingDimension = ({ type }) => (
  <StyledContainer>
    {type === "2D" && (
      <>
        <Styled2DIcon />
        <p>2D</p>
      </>
    )}
    {type === "3D" && (
      <>
        <Styled3DIcon />
        <p>3D</p>
      </>
    )}
  </StyledContainer>
);

ShowingDimension.propTypes = {
  type: oneOf(["2D", "3D"]).isRequired
};

export { ShowingDimension };
