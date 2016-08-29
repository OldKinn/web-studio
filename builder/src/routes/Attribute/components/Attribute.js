/**
 * 属性维护模块
 * 2016年8月28日08:05:51
 * Created by Leon on 2016/8/28.
 */

import React, {Component} from 'react'
import {Scrollbars} from 'react-custom-scrollbars'

class Attribute extends Component {
    render() {
        const {cache} = this.props;
        return (
            <div>
                <div className="pull-left">
                    <Scrollbars
                        style={{height: cache.windowHeight - 50, width: 300, backgroundColor: '#E0E0E0'}}
                        autoHide={true}
                        autoHideTimeout={800}
                        autoHideDuration={200}
                    >
                        <h3>属性分组</h3>
                    </Scrollbars>
                </div>
                <div className="layout-right">
                    这是表格
                </div>
            </div>
        )
    }
}

module.exports = Attribute