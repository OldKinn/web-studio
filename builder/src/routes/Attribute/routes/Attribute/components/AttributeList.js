/**
 * 属性列表组件
 * 2016年9月2日12:54:50
 */

import React, {Component} from 'react'
import Alert from 'react-s-alert'
import Dialog from 'rc-dialog'
import {Scrollbars} from 'react-custom-scrollbars'
import get from 'lodash/get'
import AttrForm from './AttrForm'

class AttributeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            list: []
        }
    }

    componentDidMount() {
        this.requestAttributes();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id != this.props.params.id) {
            this.requestAttributes();
        }
    }

    requestAttributes() {
        const {params} = this.props;
        $.ajax({
            url: '/attribute/list/' + params.id,
            dataType: 'json',
            cache: false,
            success: (resp) => {
                if (!resp.success) {
                    Alert.error(resp.message);
                    return false;
                }
                this.setState({list: get(resp, 'output', [])});
            }
        });
    }

    openDialog() {
        this.setState({visible: true});
    }

    closeDialog() {
        this.setState({visible: false});
    }

    render() {
        const {actions, cache, params} = this.props;
        const style = {
            height: cache.windowHeight - 50
        }

        const createItem = (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.dataType}</td>
                    <td>{item.category}</td>
                    <td>{item.widget}</td>
                    <td>{item.remark}</td>
                    <td>
                        <div className="btn-group btn-group-xs">
                            <button type="button" className="btn btn-primary">修改</button>
                            <button type="button" className="btn btn-primary">删除</button>
                        </div>
                    </td>
                </tr>
            )
        }

        const createBlank = () => {
            if (this.state.list.length == 0) {
                return (
                    <tr>
                        <td colSpan="7" className="text-center text-muted">没有数据！</td>
                    </tr>
                )
            }
        }

        return (
            <div>
                <Scrollbars style={style} autoHide={true} autoHideTimeout={800} autoHideDuration={200}>
                    <div className="padding clearfix">
                        <h4 className="pull-left margin-none" style={{lineHeight: '50px'}}>属性列表</h4>
                        <button className="btn-circle pull-right" onClick={this.openDialog.bind(this)}>
                            <span className="glyphicon glyphicon-plus"/>
                        </button>
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>编码</th>
                            <th>名称</th>
                            <th>数据类型</th>
                            <th>分类</th>
                            <th>控件类型</th>
                            <th>说明</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.list.map(createItem)}
                        {createBlank()}
                        </tbody>
                    </table>
                </Scrollbars>
                <Dialog
                    visible={this.state.visible}
                    title="新建属性"
                    className="app-dialog"
                    style={{width: 800}}
                    bodyStyle={{padding: '20px 0'}}
                    animation="zoom"
                    maskAnimation="fade"
                    onClose={this.closeDialog.bind(this)}
                >
                    <AttrForm closeDialog={this.closeDialog.bind(this)} group={params.id}/>
                </Dialog>
            </div>
        )
    }
}

module.exports = AttributeList