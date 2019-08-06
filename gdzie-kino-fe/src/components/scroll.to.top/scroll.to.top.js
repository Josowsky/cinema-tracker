import { Component } from 'react';
import { func, node, oneOfType, shape, string } from 'prop-types';
import { withRouter } from 'react-router-dom';


class _ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location: { pathname } } = this.props;
    const { location: { pathname:prevPathname } } = prevProps;

    if (pathname !== !prevPathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

_ScrollToTop.propTypes = {
  children: oneOfType([ func, node ]),
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};

const ScrollToTop = withRouter(_ScrollToTop);

export { ScrollToTop };
