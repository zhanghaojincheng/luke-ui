import React from "react";
import PropTypes from "prop-types";

import "./buttondropdown.scss";

import Button from "../button/button.jsx";
import DropDown from "../dropdown/dropdown.jsx";

class ButtonDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  static propTypes = {
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
    selectedValue: PropTypes.object,
    labelField: PropTypes.string,
    valueField: PropTypes.string
  };

  static defaultProps = {
    labelField: 'label',
    valueField: 'value'
  };

  triggerVisible = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  onSelect = selectedValue => {
    let { onSelect } = this.props;
    onSelect(selectedValue);
    this.triggerVisible();
  };

  render() {
    let { selectedValue, labelField } = this.props;
    return (
      <div className="button-dropdown-component">
        <div onClick={this.triggerVisible}>
          <Button className={`btn-dropdown ${selectedValue && selectedValue.value ? 'had-value' : ''}`}>
            {(selectedValue && selectedValue[labelField]) || "请选择"}
          </Button>
          <span className="dropdown-icon">
            <i
              className={`iconfont icon-arrow-up ${
                this.state.visible ? "is-reverse" : ""
              }`}
            />
          </span>
        </div>
        <DropDown
          {...this.props}
          onSelect={this.onSelect}
          visible={this.state.visible}
        />
      </div>
    );
  }
}

export default ButtonDropdown;
