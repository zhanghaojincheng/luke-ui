import React from 'react';
import './home.scss';
import { Button } from '../../components';

class HomeContainer extends React.Component {
    render() {
        return (
            <div className="home-page-wrapper">
                <div className="sider">
                    <div className="menu-item"></div>
                </div>
                <div className="content">
                    <Button className="small" disabled size="small" type="primary" icon="icon-add">按钮</Button>
                    <Button disabled={true} type="success" onClick={this.btnClick} icon="icon-add">添加</Button>
                    <Button type="danger" size="big" icon="icon-add">大按钮</Button>
                    <Button icon="icon-del">删除</Button>
                </div>
            </div>
        )
    }

    btnClick = () => {
        console.log(123);
    }

    
}

export default HomeContainer;