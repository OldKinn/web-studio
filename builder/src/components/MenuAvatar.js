/**
 * 用户简要信息展示组件
 * Created by Leon on 2016/8/28.
 */

import React, {Component} from 'react'

class MenuAvatar extends Component {
    render() {
        return (
            <div className="menu-header">
                <div className="avatar">
                    <img className="img-circle size-100-percent" src="public/images/avatar.jpg"/>
                </div>
                <div className="brief-info">
                    <h3 className="user-name">LEON</h3>
                    <p className="margin-none">项目经理</p>
                </div>
            </div>
        )
    }
}

export default MenuAvatar