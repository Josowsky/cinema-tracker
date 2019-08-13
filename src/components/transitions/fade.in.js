import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Transition, {
  ENTERING,
  ENTERED,
  EXITING,
  EXITED,
} from 'react-transition-group/Transition';

const FadeIn = ({ children, classNames, ...props }) => {
  props = {
    timeout: 300,
    ...props,
  };

  return (
    <Transition
      { ...props }>
      {
        (state) => {
          return React.cloneElement(children, {
            className: classnames(classNames[state], children.props.className),
          });
        }
      }
    </Transition>
  );
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.object,
};

FadeIn.defaultProps = {
  classNames: {
    [ENTERING]: 'fade-in-enter fade-in-enter--active',
    [ENTERED]: 'fade-in-enter',
    [EXITING]: 'fade-in-exit fade-in-exit--active',
    [EXITED]: 'fade-in-exit',
  },
};

export { FadeIn };
