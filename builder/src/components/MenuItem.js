/**
 * 菜单项组件
 * Created by Leon on 2016/8/27.
 */

import React, {Component} from 'react'
import {Link} from 'react-router'

class MenuItem extends Component {
    render() {
        const {name, path, icon, collapse} = this.props;
        let {textClass, iconClass, style} = {
            textClass: 'menu-title text-truncate',
            iconClass: 'glyphicon glyphicon-' + icon,
            style: {
                padding: '0 15px'
            }
        }
        if (collapse) {
            textClass += ' hidden';
            style.padding = '0 20px';
        }
        return (
            <div className="menu-item">
                <div className="menu-icon" style={style}>
                    <span className={iconClass}/>
                </div>
                <div className={textClass}>
                    <Link to={path}>{name}</Link>
                </div>
            </div>
        )
    }
}

export default MenuItem