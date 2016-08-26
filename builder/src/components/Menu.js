/**
 * 导航菜单组件
 * Created by Leon on 2016/8/26.
 */

import React, {Component} from 'react'

class Menu extends Component {
    render() {
        const createMenu = () => {
            let menus = [];
            for (let i = 0; i < 20; i++) {
                menus.push(<div className="menu-item" key={i}>{'菜单：' + i}</div>);
            }
            return menus;
        };
        return (
            <div className="frame-menu">
                {createMenu()}
            </div>
        )
    }
}

export default Menu