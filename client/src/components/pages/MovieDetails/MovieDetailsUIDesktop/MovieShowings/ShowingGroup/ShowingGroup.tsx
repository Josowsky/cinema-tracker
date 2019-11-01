import React, { FunctionComponent } from 'react';

import { ShowingGroup as ShowingGroupType } from 'shared/models';

import { ShowingType } from './ShowingType/ShowingType';
import { ShowingDimension } from './ShowingDimension/ShowingDimension';

import {
  StyledTitle,
  StyledShowingsContainer,
  StyledShowing,
  StyledShowingRow,
  StyledTime,
  StyledCinemaName,
  StyledDimensionContainer,
  StyledTicketLink,
} from './ShowingGroup.style';

interface ShowingGroupProps {
  group: ShowingGroupType;
}

const ShowingGroup: FunctionComponent<ShowingGroupProps> = ({ group: { date, seances = [] } }) => {
  if (seances.length === 0) return null;

  return (
    <section>
      <StyledTitle>{date}</StyledTitle>
      <StyledShowingsContainer>
        {seances.map(({ time, cinema, subtitles, dimensionality, url }, index) => (
          <StyledShowing key={`${time}_${index}`}>
            <StyledShowingRow>
              <StyledTime>{time}</StyledTime>
              <StyledCinemaName>{cinema}</StyledCinemaName>
            </StyledShowingRow>
            <StyledShowingRow>
              <StyledDimensionContainer>
                <ShowingDimension type={dimensionality} />
              </StyledDimensionContainer>
              <ShowingType isSubtitled={subtitles} />
              <StyledTicketLink target="_blank" href={url}>
                Kup bilet
              </StyledTicketLink>
            </StyledShowingRow>
          </StyledShowing>
        ))}
      </StyledShowingsContainer>
    </section>
  );
};

export { ShowingGroup };
