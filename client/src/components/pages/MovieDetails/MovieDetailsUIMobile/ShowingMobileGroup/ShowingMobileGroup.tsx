import React, { FunctionComponent } from 'react';
import { FaRegFileAlt, FaRegComments, FaRegSquare, FaRegClone, FaRegClock } from 'react-icons/fa';

import { ShowingGroup } from 'shared/models';

import {
  StyledTitle,
  StyledTitleLine,
  StyledTitleText,
  StyledShowing,
  StyledRow,
  StyledTicketLink,
  StyledType,
  StyledCinema,
  StyledTime,
} from './ShowingMobileGroup.style';

interface ShowingMobileGroupProps {
  group: ShowingGroup;
}

const ShowingMobileGroup: FunctionComponent<ShowingMobileGroupProps> = ({ group: { date, seances = [] } }) => {
  if (seances.length === 0) return null;

  return (
    <section>
      <StyledTitle>
        <StyledTitleLine />
        <StyledTitleText>{date}</StyledTitleText>
        <StyledTitleLine />
      </StyledTitle>
      <div>
        {seances.map(({ time, cinema, subtitles, dimensionality, url }, index) => (
          <StyledShowing key={`${time}_${index}`}>
            <StyledRow>
              <StyledTicketLink href={url} target="__blank">
                Kup bilet
              </StyledTicketLink>
              <StyledType>
                {dimensionality === '2D' ? <FaRegSquare /> : <FaRegClone />}
                {dimensionality === '2D' ? '2D' : '3D'}
              </StyledType>
              <StyledType>
                {subtitles ? <FaRegFileAlt /> : <FaRegComments />}
                {subtitles ? 'Napisy' : 'Dubbing'}
              </StyledType>
            </StyledRow>
            <StyledRow>
              <StyledCinema>{cinema}</StyledCinema>
              <StyledTime>
                <FaRegClock /> {time}
              </StyledTime>
            </StyledRow>
          </StyledShowing>
        ))}
      </div>
    </section>
  );
};

export { ShowingMobileGroup };
