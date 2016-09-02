/**
 * 属性分组的列表组件
 * 2016年8月30日19:39:46
 * Created by Leon on 2016/8/30.
 */

import React, {Component} from 'react'
import {Scrollbars} from 'react-custom-scrollbars'
import get from 'lodash/get'

class GroupList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: []
        }
    }

    componentDidMount() {
        const {actions, cache} = this.props;
        $.ajax({
            url: '/attribute/group/list',
            dataType: 'json',
            cache: false,
            success: (resp) => {
                if (!resp.success) {
                    actions.setCache('aaa', 'aaa');
                    return false;
                }
                this.setState({groups: get(resp, 'output', [])});
            }
        });
    }

    render() {
        const {actions, cache} = this.props;
        const style = {
            height: cache.windowHeight - 50
        }
        const createItem = (item, index) => {
            return (
                <div key={index} className="list-group-item">
                    <span>{item.name}</span>
                    <button className="btn btn-xs pull-right">
                        <span className="glyphicon glyphicon-option-vertical"/>
                    </button>
                </div>
            )
        }
        const createBlank = () => {
            if (this.state.groups.length == 0) {
                return (
                    <div className="list-group-item">
                        <span>没有数据</span>
                    </div>
                )
            }
        }
        return (
            <Scrollbars style={style} autoHide={true} autoHideTimeout={800} autoHideDuration={200}>
                <div className="title-bar">
                    <h3 className="title margin-none">属性分组</h3>
                    <button className="btn-circle" onClick={() => {actions.setCache('dialog', true)}}>
                        <span className="glyphicon glyphicon-plus"/>
                    </button>
                </div>
                <div className="list-group attribute-group padding-bottom">
                    {this.state.groups.map(createItem)}
                    {createBlank()}
                </div>
            </Scrollbars>
        )
    }
}

export default GroupList