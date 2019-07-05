import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import "./dropdown.scss";

class DropDown extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selectedValue: PropTypes.object,
    visible: PropTypes.bool,
    labelField: PropTypes.string,
    valueField: PropTypes.string,
    haveNullValue: PropTypes.bool
  };

  static defaultProps = {
    options: [],
    visible: false,
    labelField: "label",
    valueField: "value",
    haveNullValue: false
  };

  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options
    };
  }

  onSelect(selectedValue) {
    let { onSelect } = this.props;
    onSelect(selectedValue);
  }

  componentDidMount() {
    let { haveNullValue, options } = this.props;
    options = _.clone(options);
    options.unshift({
      label: "",
      value: ""
    });
    if (haveNullValue) {
      this.setState({
        options
      });
    }
  }

  render() {
    let { visible, labelField, valueField, selectedValue } = this.props;
    let options = this.state.options;
    let style = { height: visible ? options.length * 30 + 11 + "px" : 0 };
    return (
      <div className="dropdown-component" style={style}>
        <ul>
          <If condition={options && options.length > 0}>
            {options.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`item-li ${
                    selectedValue &&
                    item[valueField] === selectedValue[valueField]
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => this.onSelect(item)}
                >
                  {item[labelField]}
                </li>
              );
            })}
          </If>
        </ul>
      </div>
    );
  }
}

export default DropDown;
