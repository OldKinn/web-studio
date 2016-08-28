/**
 * 导航菜单组件
 * Created by Leon on 2016/8/26.
 */

import React, {Component} from 'react'
import {Scrollbars} from 'react-custom-scrollbars'
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
        let {width, btnClass} = {
            width: 220,
            btnClass: 'glyphicon glyphicon-menu-left'
        }
        if (cache.collapse) {
            width = 54;
            btnClass = 'glyphicon glyphicon-menu-right';
        }
        return (
            <div className="frame-menu" style={{width}}>
                <Scrollbars
                    autoHide={true}
                    autoHideTimeout={800}
                    autoHideDuration={200}
                    renderTrackHorizontal={renderScrollbar}
                >
                    <div className="menu-header">
                        <button className="btn btn-sm">
                            <i className="glyphicon glyphicon-cog"/>
                        </button>
                        <button className="btn btn-sm">
                            <i className="glyphicon glyphicon-star"/>
                        </button>
                        <button className="btn btn-sm">
                            <i className="glyphicon glyphicon-star"/>
                        </button>
                        <button className="btn btn-sm">
                            <i className="glyphicon glyphicon-star"/>
                        </button>
                    </div>
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