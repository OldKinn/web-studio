/**
 * 菜单项组件
 * Created by Leon on 2016/8/27.
 */

import React, {Component} from 'react'
import {Link} from 'react-router'

class MenuItem extends Component {
    render() {
        const {name, path, icon, collapse} = this.props;
        let {textClass, iconClass} = {
            textClass: 'menu-title text-truncate',
            iconClass: 'glyphicon glyphicon-' + icon
        }
        if (collapse) {
            textClass += ' hidden';
        }
        return (
            <Link to={path} className="menu-item" draggable={false}>
                <span className={iconClass}/>
                <span className={textClass}>{name}</span>
            </Link>
        )
    }
}

export default MenuItem