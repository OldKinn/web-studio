/**
 * 页面框架的内容区域
 * Created by Leon on 2016/8/26.
 */

import React, {Component} from 'react'

class Content extends Component {
    render() {
        return (
            <div className="frame-content">
                {this.props.children}
            </div>
        )
    }
}

export default Content