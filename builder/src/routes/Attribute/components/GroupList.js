/**
 * 属性分组的列表组件
 * 2016年8月30日19:39:46
 * Created by Leon on 2016/8/30.
 */

import React, {Component} from 'react'
import {Scrollbars} from 'react-custom-scrollbars'

class GroupList extends Component {

    componentDidMount() {

    }

    render() {
        const {cache} = this.props;
        const style = {
            height: cache.windowHeight - 50,
            width: 300,
            backgroundColor: '#F5F5F5'
        }
        return (
            <div className="pull-left">
                <Scrollbars
                    style={style}
                    autoHide={true}
                    autoHideTimeout={800}
                    autoHideDuration={200}
                >
                    <div className="title-bar">
                        <h3 className="title margin-none">属性分组</h3>
                        <button className="btn-circle">
                            <span className="glyphicon glyphicon-plus"/>
                        </button>
                    </div>
                    <div className="list-group attribute-group">
                        <div className="list-group-item">
                            <span>基本</span>
                            <button className="btn btn-xs pull-right">
                                <span className="glyphicon glyphicon-option-vertical"/>
                            </button>
                        </div>
                        <div className="list-group-item">
                            <span>布局</span>
                            <button className="btn btn-xs pull-right">
                                <span className="glyphicon glyphicon-option-vertical"/>
                            </button>
                        </div>
                        <div className="list-group-item">
                            <span>模型</span>
                            <button className="btn btn-xs pull-right">
                                <span className="glyphicon glyphicon-option-vertical"/>
                            </button>
                        </div>
                        <div className="list-group-item">
                            <span>样式</span>
                            <button className="btn btn-xs pull-right">
                                <span className="glyphicon glyphicon-option-vertical"/>
                            </button>
                        </div>
                    </div>
                </Scrollbars>
            </div>
        )
    }
}

export default GroupList