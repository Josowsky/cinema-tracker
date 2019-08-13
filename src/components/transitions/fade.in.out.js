import React from 'react';
import PropTypes from 'prop-types';
import animate from 'gsap-promise';
import Transition, { EXITED } from 'react-transition-group/Transition';

class FadeInOut extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    timeout: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        enter: PropTypes.number,
        exit: PropTypes.number,
      }),
    ]),
    in: PropTypes.bool,
  };

  static defaultProps = {
    timeout: 500,
    in: false,
  };

  constructor(props) {
    super(props);

    this.handleOnEnter = this.handleOnEnter.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
  }

  _getTimeout(type) {
    const { timeout } = this.props;

    if (typeof timeout === 'number') {
      return timeout;
    }

    return timeout[type];
  }

  handleOnEnter(element) {
    const timeout = this._getTimeout('enter');

    animate.set(element, {
      willChange: 'transform',
      autoAlpha: 0,
    });

    requestAnimationFrame(() => {
      animate
        .fromTo(
          element,
          timeout / 1000,
          { autoAlpha: 0 },
          { autoAlpha: 1 },
        )
        .then(() => {
          animate.set(element, { willChange: 'auto' });
        });
    });
  }

  handleOnExit(element) {
    const timeout = this._getTimeout('exit');

    animate.set(element, { willChange: 'transform' });

    requestAnimationFrame(() => {
      animate
        .fromTo(
          element,
          timeout / 1000,
          { autoAlpha: 1 },
          { autoAlpha: 0 },
        )
        .then(() => {
          animate.set(element, { willChange: 'auto' });
        });
    });
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <Transition
        /*appear={ true }
        mountOnEnter={ true }
        unmountOnExit={ true }*/
        { ...props }
        onEnter={ this.handleOnEnter }
        onExit={ this.handleOnExit }
      >
        {
          (state) => {
            const childrenStyle = children && children.props && children.props.style || {};
            let style = {
              ...childrenStyle,
            };

            if (state === EXITED) {
              style = {
                ...style,
                opacity: 0,
              };
            }

            return React.cloneElement(children, {
              style: style,
            });
          }
        }
      </Transition>
    );
  }
}

export { FadeInOut };
