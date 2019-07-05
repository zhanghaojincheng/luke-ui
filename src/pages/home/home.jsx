import React from "react";
import "./home.scss";
import { Button, ButtonDropdown } from "../../components";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          name: "张浩张浩张",
          value: '1'
        },
        {
          name: "里斯",
          value: '2'
        },
        {
          name: "luke",
          value: '3'
        }
      ]
    };
  }
  selectedValue = "";

  onSelect = selectedValue => {
    this.setState({
      selectedValue
    });
    console.log(selectedValue);
  };

  render() {
    return (
      <div className="home-page-wrapper">
        <div className="sider">
          <div className="menu-item" />
        </div>
        <div className="content">
          <div>
            <Button
              className="small"
              disabled
              size="small"
              type="primary"
              icon="icon-add"
            >
              按钮
            </Button>
          </div>
          <div>
            <Button
              disabled={false}
              type="success"
              onClick={this.btnClick}
              icon="icon-add"
            >
              添加
            </Button>
          </div>
          <div>
            <Button type="danger" size="big" icon="icon-add">
              大按钮
            </Button>
          </div>

          <div>
            <ButtonDropdown
              options={this.state.options}
              onSelect={this.onSelect}
              selectedValue={this.state.selectedValue}
              haveNullValue
              labelField="name"
              valueField="value"
            />
          </div>
        </div>
      </div>
    );
  }

  btnClick = () => {
    console.log(123);
  };
}

export default HomeContainer;
