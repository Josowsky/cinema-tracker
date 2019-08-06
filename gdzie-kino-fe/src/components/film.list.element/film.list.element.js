import React from 'react';
import { bool, object } from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { FilmFavoriteIcon } from '../film.favorite.icon';

const FilmListElement = ({ isLogged = false, film }) => {
  const { genre, id, image:posterUrl, rating, name:title, showings: showingsRaw } = film;

  const showings = Object.keys(showingsRaw)
    .map((showingKey) => showingsRaw[showingKey]);

  return (
    <div className="film-list-element-container">
      <Link to={ `/film/${ id }` }>
        <div className="film-list-element d-flex align-items">
          <div className="film-list-element__poster" style={{ backgroundImage: `url(${posterUrl})` }} ></div>
          <div className="film-list-element__description">
            <div className="film-list-element__top">
              <div className="film-list-element__title">{ title }</div>
              {isLogged && (
                <div className="film-list-element__isFavourite">
                  <FilmFavoriteIcon film={ film } />
                </div>
              )}
            </div>
            <div className="film-list-element__showing-section d-flex flex-wrap">
              {
                showings.slice(0, 4).map((showing, index) => {
                  const showingTime = moment(showing.dateTime.date, 'YYYY-MM-DD HH:mm Z').format('HH:mm');
                  return <div key={index} className="film-list-element__showing-block d-flex align-items-center justify-content-center">{showingTime}</div>;
                })
              }
            </div>
            <div className="film-list-element__genre">
              { genre }
            </div>
            <div className="film-list-element__bottom d-flex">
              <div className="film-list-element__rating">
                { rating }
              </div>
              <div className="film-list-element__star">
                <i className="fas fa-star" />
              </div>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
};

FilmListElement.propTypes = {
  isLogged: bool,
  film: object.isRequired,
};

export { FilmListElement };
