import React from 'react';
import './buttondropdown.scss';

import Button from '../button/button.jsx';

class ButtonDropdown extends React.Component {
    render() {
        let { children, options } = this.props;
        console.log(children)
        return (
            <div className="button-dropdown-component">
                <Button className="btn-dropdown">
                    {children}
                </Button>
                <span className="dropdown-icon iconfont icon-add"></span>
            </div>
            
        )
    }
}

export default ButtonDropdown;