import React from 'react';
import { bool, func, string } from 'prop-types';
import { connect } from 'react-redux';

import { searchUpdate, searchClear } from '../../store/search';


class _HeaderSearch extends React.Component {
  static propTypes = {
    isSearchVisible: bool.isRequired,
    search: string.isRequired,
    searchClear: func.isRequired,
    searchUpdate: func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleTextRemove = this.handleTextRemove.bind(this);

    this.searchRef = null;
  }

  componentWillReceiveProps(nextProps) {
    const { isSearchVisible } = this.props;
    const { isSearchVisible:nextIsSearchVisible } = nextProps;

    const searchIsShowingUp = nextIsSearchVisible && !isSearchVisible;
    const searchIsHiding = !nextIsSearchVisible && isSearchVisible;

    if (searchIsShowingUp) {
      return this.searchRef.focus();
    }

    if (searchIsHiding) {
      this.handleTextRemove();
      return this.searchRef.blur();
    }
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
        <input
          ref={(ref) => this.searchRef = ref}
          className="header-search__input"
          type="text" placeholder="Szukaj..."
          value={ search }
          onChange={ this.handleSearchChange }
        />
        <i className="header-search__search-icon fas fa-search" />
        {
          search &&
            (
              <div className="header-search__remove-text-box" onClick={ this.handleTextRemove }>
                <i className="header-search__remove-icon fas fa-times" />
              </div>
            )
        }
      </div>
    );
  }


}
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUpdate: (search) => dispatch(searchUpdate(search)),
    searchClear: () => dispatch(searchClear()),
  };
};

const HeaderSearch = connect(mapStateToProps, mapDispatchToProps)(_HeaderSearch);


export { HeaderSearch };
