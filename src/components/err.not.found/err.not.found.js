import React from 'react';
import { Link } from 'react-router-dom';

class ErrNotFound extends React.Component {

  render() {

    return (
      <div className="err">
        <div className="err__container">
          <div className="err__container-top">
            <h1 className="err__title">404</h1>
            <p className="err__info">Nic nie znaleziono</p>
          </div>
          <hr className="err__division"/>
          <div className="err__container-bottom">
            <Link to={ `/` }>
              <p className="err__link">Wroć na <span className="err__link-section">stronę główną</span></p>
            </Link>
            <Link to={ `/ulubione` }>
              <p className="err__link">Odwiedź sekcję <span className="err__link-section">ulubione</span></p>
            </Link>
            <Link to={ `/konto` }>
              <p className="err__link">Wejdź do <span className="err__link-section">swojego konta</span></p>
            </Link>
            <Link to={ `/kina` }>
              <p className="err__link">Zobacz <span className="err__link-section">listę kin</span></p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export { ErrNotFound };
