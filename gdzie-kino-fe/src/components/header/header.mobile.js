import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { compose } from "redux";
import { func, object, shape, string } from "prop-types";
import { withRouter } from "react-router-dom";

import {
  FILTERS_VISIBLE_ROUTES,
  SEARCH_VISIBLE_ROUTES
} from "./header.constants";
import { HeaderSearch } from "../header.search";
import { Logo } from "../logo";
// import { modalOpen, MODAL_FILMS_FILTERS } from 'store/modals';
const modalOpen = () => ({ type: 'olden' });
const MODAL_FILMS_FILTERS = "";

class _HeaderMobile extends React.Component {
  static propTypes = {
    location: object.isRequired,
    filters: shape({
      genre: string.isRequired
    }).isRequired,
    openFiltersModal: func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { isSearchVisible: false };

    this.handleToggleSearchInput = this.handleToggleSearchInput.bind(this);
  }

  handleToggleSearchInput() {
    this.setState({
      isSearchVisible: !this.state.isSearchVisible
    });
  }

  render() {
    const { isSearchVisible } = this.state;
    const { location, openFiltersModal, filters } = this.props;

    const { pathname } = location;
    const isFilterAvailable = FILTERS_VISIBLE_ROUTES.includes(pathname);
    const isSearchAvailable = SEARCH_VISIBLE_ROUTES.includes(pathname);

    return (
      <div className="header-mobile d-flex align-items-center">
        <div
          className={cx("d-flex header-mobile__content-container", {
            "header-mobile__content-container--visible": !isSearchVisible
          })}
        >
          <div className="header-mobile__logo-box d-flex align-items-center justify-content-center">
            <Logo width="80" />
          </div>
          {isFilterAvailable && (
            <div
              onClick={openFiltersModal}
              className={cx(
                filters.genre && "header-mobile__filter-box--active",
                "header-mobile__filter-box d-flex justify-content-center align-items-center"
              )}
            >
              <i className="header-mobile__filter-icon fas fa-filter" />
            </div>
          )}
          {isSearchAvailable && (
            <div
              className="header-mobile__search-box d-flex justify-content-center align-items-center"
              onClick={this.handleToggleSearchInput}
            >
              <span>
                <i className="fas fa-search" />
              </span>
            </div>
          )}
        </div>
        {isSearchAvailable && (
          <div
            className={cx("d-flex header-mobile__search-container", {
              "header-mobile__search-container--visible": isSearchVisible
            })}
          >
            <div className="header-mobile__search-input">
              <HeaderSearch isSearchVisible={isSearchVisible} />
            </div>
            <div
              onClick={this.handleToggleSearchInput}
              className="d-flex align-items-center header-mobile__search-close-icon"
            >
              <i className="fas fa-angle-up" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const HeaderMobile = compose(
  withRouter,
  connect(
    state => ({
      filters: state.films.filters
    }),
    dispatch => ({
      openFiltersModal: () => dispatch(modalOpen(MODAL_FILMS_FILTERS))
    })
  )
)(_HeaderMobile);

export { HeaderMobile };
