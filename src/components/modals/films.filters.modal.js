import React from "react";
import { func, shape, string } from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

// import { modalClose } from 'store/modals';
// import { filmsFiltersClear, filmsFiltersSet } from 'store/films';
import { MaterialInput } from "../material.input";
const filmsFiltersClear = () => ({ type: 'olden' });
const filmsFiltersSet = () => ({ type: 'olden' });
const modalClose = () => ({ type: 'olden' });

class _FilmsFiltersModal extends React.Component {
  static propTypes = {
    className: string,
    closeModal: func.isRequired,
    filters: shape({
      genre: string.isRequired
    }).isRequired,
    filmsFiltersClear: func.isRequired,
    filmsFiltersSet: func.isRequired,
    id: string.isRequired
  };

  handleCloseClick() {
    const { closeModal, id } = this.props;
    closeModal(id);
  }

  updateGenreFilter(genre) {
    this.props.filmsFiltersSet({ genre });
  }

  render() {
    const { className, filters, filmsFiltersClear } = this.props;
    const modalClasses = classnames("modal", className);

    return (
      <div className="modal__container">
        <div
          className="modal__overlay"
          onClick={() => this.handleCloseClick()}
        />
        <div className={modalClasses}>
          <div className="modal__close" onClick={() => this.handleCloseClick()}>
            <i className="fa fa-times" aria-hidden="true" />
          </div>
          <div className="filters-modal">
            <div className="filters-modal__title">Filtruj wg. gatunku</div>
            <MaterialInput
              className="filters-modal__input"
              name="Gatunek"
              onChange={event => this.updateGenreFilter(event.target.value)}
              value={filters.genre}
            />
            <div
              onClick={() => filmsFiltersClear()}
              className="filters-modal__clear-button"
            >
              Usuń filtry
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const FilmsFiltersModal = connect(
  state => ({
    filters: state.films.filters
  }),
  dispatch => ({
    closeModal: id => dispatch(modalClose(id)),
    filmsFiltersClear: () => dispatch(filmsFiltersClear()),
    filmsFiltersSet: filters => dispatch(filmsFiltersSet(filters))
  })
)(_FilmsFiltersModal);

export { FilmsFiltersModal };
