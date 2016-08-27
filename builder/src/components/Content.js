/**
 * 页面框架的内容区域
 * Created by Leon on 2016/8/26.
 */

import React, {Component} from 'react'

class Content extends Component {
    render() {
        const {cache} = this.props;
        const style = {
            left: cache.collapse ? 54 : 220
        }
        return (
            <div className="frame-content" style={style}>
                {this.props.children}
            </div>
        )
    }
}

export default Content