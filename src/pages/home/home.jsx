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
                    <Button className="small" disabled size="small" type="primary">按钮</Button>
                    <Button disabled={true} type="success" onClick={this.btnClick}>中按钮</Button>
                    <Button type="danger" size="big">大按钮</Button>
                    <Button>大按钮</Button>
                </div>
            </div>
        )
    }

    btnClick = () => {
        console.log(123);
    }

    
}

export default HomeContainer;