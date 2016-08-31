/**
 * 属性维护模块
 * 2016年8月28日08:05:51
 * Created by Leon on 2016/8/28.
 */

import React, {Component} from 'react'
import GroupList from './GroupList'

class Attribute extends Component {
    render() {
        const {cache} = this.props;
        return (
            <div>
                <GroupList cache={cache}/>
                <div className="pull-left">
                    这是表格
                </div>
            </div>
        )
    }
}

module.exports = Attribute