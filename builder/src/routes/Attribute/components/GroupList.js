/**
 * 属性分组的列表组件
 * 2016年8月30日19:39:46
 * Created by Leon on 2016/8/30.
 */

import React, {Component} from 'react'
import {Scrollbars} from 'react-custom-scrollbars'

class GroupList extends Component {
    render() {
        const {cache} = this.props;
        const style = {
            height: cache.windowHeight - 50,
            width: 300,
            backgroundColor: '#E0E0E0'
        }
        return (
            <div className="pull-left">
                <Scrollbars
                    style={style}
                    autoHide={true}
                    autoHideTimeout={800}
                    autoHideDuration={200}
                >
                    <h3>属性分组</h3>
                </Scrollbars>
            </div>
        )
    }
}