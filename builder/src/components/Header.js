/**
 * 页面框架的顶部
 * Created by Leon on 2016/8/26.
 */

import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component {
    render() {
        const {title, logo} = this.props;
        return (
            <div className="frame-header">
                <Link className="app-brand" to="/">
                    <img className="app-logo" src={logo}/>
                    <span className="app-title">{title}</span>
                </Link>
            </div>
        )
    }
}

export default Header