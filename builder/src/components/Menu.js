/**
 * 导航菜单组件
 * Created by Leon on 2016/8/26.
 */

import React, {Component} from 'react'
import {Scrollbars} from 'react-custom-scrollbars'
import MenuAvatar from './MenuAvatar'
import MenuItem from './MenuItem'

class Menu extends Component {

    handleClick() {
        const {actions, cache} = this.props;
        actions.setCache('collapse', !cache.collapse);
    }

    render() {
        const {cache} = this.props;
        const createMenu = (item, index) => {
            return <MenuItem key={index} collapse={cache.collapse} {...item}/>
        };
        const renderScrollbar = (props) => {
            return <span {...props} className="hidden"/>
        }
        let {width, menuClass, btnClass} = {
            width: 220,
            menuClass: 'frame-menu',
            btnClass: 'glyphicon glyphicon-menu-left'
        }
        if (cache.collapse) {
            width = 54;
            menuClass += ' collapsed';
            btnClass = 'glyphicon glyphicon-menu-right';
        }
        return (
            <div className={menuClass} style={{width}}>
                <Scrollbars
                    autoHide={true}
                    autoHideTimeout={800}
                    autoHideDuration={200}
                    renderTrackHorizontal={renderScrollbar}
                >
                    <MenuAvatar/>
                    <div className="menu-content">
                        {cache.menus.map(createMenu)}
                    </div>
                </Scrollbars>
                <div className="menu-footer">
                    <button className="btn btn-sm pull-right" onClick={this.handleClick.bind(this)}>
                        <span className={btnClass}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Menu