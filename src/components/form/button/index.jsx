import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

import { classnames } from '../../js/utils';

class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    let { children, className, type, size, disabled } = this.props;
    if (!children) {
      throw new Error(
        `For Button Component, The prop 'children' is undefined!`
      );
    }
    disabled && (className += ' disabled');
    let classname = classnames('button-component', className, type, size);
    
    return (
      <button {...this.props} className={classname}>
        <span>{children}</span>
      </button>
    );
  }
}

export default Button;
