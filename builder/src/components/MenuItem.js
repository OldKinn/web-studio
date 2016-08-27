/**
 * 菜单项组件
 * Created by Leon on 2016/8/27.
 */

import React, {Component} from 'react'
import {Link} from 'react-router'

class MenuItem extends Component {
    render() {
        const {name, path, collapse} = this.props;
        let {textClass} = {
            textClass: 'menu-title text-truncate'
        }
        if (collapse) {
            textClass += ' hidden';
        }
        return (
            <div className="menu-item">
                <div className="menu-icon">
                    <span className="glyphicon glyphicon-piggy-bank"/>
                </div>
                <div className={textClass}>
                    <Link to={path}>{name}</Link>
                </div>
            </div>
        )
    }
}

export default MenuItem