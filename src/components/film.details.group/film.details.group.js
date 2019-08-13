import React from 'react';
import { object } from 'prop-types';
import sortBy from 'lodash.sortby';

import { FilmDetailsGroupSeance } from '../film.details.group.seance';

class FilmDetailsGroup extends React.Component {
  render() {
    const { group } = this.props;
    const { seances } = group;

    return (
      <div className="film-details-group">
        <div className="film-details-group__header">
          <h1 className="film-details-group__date">{ group.date }</h1>
        </div>
        {
          sortBy(seances, 'dateTime.date').map((seance) => <FilmDetailsGroupSeance key={ seance.id } seance={ seance } />)
        }
      </div>
    );
  }
}

FilmDetailsGroup.propTypes = {
  group: object.isRequired,
};

export { FilmDetailsGroup };
