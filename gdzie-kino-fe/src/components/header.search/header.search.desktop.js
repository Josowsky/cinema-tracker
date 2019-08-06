import React from "react";
import { func, string } from "prop-types";
import { connect } from "react-redux";

import { MaterialInput } from "../material.input";
// import { searchUpdate, searchClear } from 'store/search';

const searchUpdate = () => ({ type: 'olden' });
const searchClear = () => ({ type: 'olden' });

class _HeaderSearchDesktop extends React.Component {
  static propTypes = {
    search: string.isRequired,
    searchClear: func.isRequired,
    searchUpdate: func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleTextRemove = this.handleTextRemove.bind(this);
  }

  componentWillUnmount() {
    this.props.searchClear();
  }

  handleSearchChange(event) {
    this.props.searchUpdate(event.target.value);
  }

  handleTextRemove() {
    this.props.searchClear();
  }

  render() {
    const { search } = this.props;

    return (
      <div className="header-search d-flex align-items-center">
        <MaterialInput
          name="search"
          className="header-search__input-desktop"
          type="text"
          label="Szukaj..."
          value={search}
          onChange={this.handleSearchChange}
        />
        <i className="header-search__search-icon fas fa-search" />
        {search && (
          <div
            className="header-search__remove-text-box"
            onClick={this.handleTextRemove}
          >
            <i className="header-search__remove-icon fas fa-times" />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchUpdate: search => dispatch(searchUpdate(search)),
    searchClear: () => dispatch(searchClear())
  };
};

const HeaderSearchDesktop = connect(
  mapStateToProps,
  mapDispatchToProps
)(_HeaderSearchDesktop);

export { HeaderSearchDesktop };
