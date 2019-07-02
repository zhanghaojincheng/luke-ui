import React from "react";
import "./home.scss";
import { Button, ButtonDropdown } from "../../components";

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [{
                label: '001',
                value: 1
            },{
                label: '002',
                value: 2
            },{
                label: '003',
                value: 3
            }]
        }
    }

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
            <ButtonDropdown options={this.state.options}>
                下拉列表
            </ButtonDropdown>
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
