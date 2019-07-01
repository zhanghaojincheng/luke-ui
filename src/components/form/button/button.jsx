import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

import { classnames } from '../../js/utils';

class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    icon: PropTypes.string
  };

  static defaultProps = {
    className: '',
  };

  render() {
    let { children, className, type, size, disabled, icon } = this.props;
    if (!children) {
      throw new Error(
        `For Button Component, The prop 'children' is undefined!`
      );
    }
    disabled && (className += ' disabled');
    icon && (icon = 'iconfont ' + icon);
    let classname = classnames('button-component', className, type, size, icon);
    
    return (
      <button {...this.props} className={classname}>
        <span className="btn-text">{children}</span>
      </button>
    );
  }
}

export default Button;
