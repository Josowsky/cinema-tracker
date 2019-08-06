import React from 'react';
import { bool, shape, string } from 'prop-types';
import moment from 'moment';

class FilmDetailsGroupSeance extends React.Component {
  static propTypes = {
    seance: shape({
      dimensionality: string.isRequired,
      cinema: shape({
        name: string.isRequired,
      }).isRequired,
      dateTime: shape({
        date: string.isRequired,
      }).isRequired,
      dubbing: bool.isRequired,
      subtitles: bool.isRequired,
      url: string.isRequired,
    }).isRequired,
  };

  render() {
    const { seance: { dimensionality, cinema: { name: cinemaName }, dateTime: { date }, dubbing, subtitles, url } } = this.props;
    const time = moment(date, 'YYYY-MM-DD HH:mm Z').format('HH:mm');

    return (
      <div className="film-details-group-seance">

        <div className="film-details-group-seance__details-section">
          <div className="film-details-group-seance__hour-box d-flex align-items-center">
            <i className="film-details-group-seance__icon far fa-clock"/>
            <p className="film-details-group-seance__hour">{ time }</p>
          </div>
          <div className="d-flex align-items">
            {dimensionality === '2D' && (
              <div>
                <i className="film-details-group-seance__bottom-icon far fa-square"/>
              </div>
            )}
            {dimensionality === '3D' && (
              <div>
                <i className="film-details-group-seance__bottom-icon far fa-clone"/>
              </div>
            )}
            {dubbing && (
              <div>
                <i className="film-details-group-seance__bottom-icon right-icon far fa-comments"/>
              </div>
            )}
            {subtitles && (
              <div>
                <i className="film-details-group-seance__bottom-icon right-icon far fa-file-alt"/>
              </div>
            )}
          </div>
        </div>

        <div className="film-details-group-seance__cinema-section">
          <div className="film-details-group-seance__cinema-box d-flex align-items-center">
            <i className="film-details-group-seance__icon far fa-building"/>
            <p className="film-details-group-seance__cinema">{ cinemaName }</p>
          </div>
        </div>

        <div className="film-details-group-seance__ticket-box">
          <i className="film-details-group-seance__ticket-icon fas fa-ticket-alt"/>
          <a href={url} target="_blank" className="film-details-group-seance__ticket">
            <p>Kup bilet</p>
          </a>
        </div>
      </div>
    );
  }
}

export { FilmDetailsGroupSeance };
