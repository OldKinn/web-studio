/**
 * 属性维护模块
 * 2016年8月28日08:05:51
 * Created by Leon on 2016/8/28.
 */

import React, {Component} from 'react'
import Dialog from 'rc-dialog'
import Alert from 'react-s-alert'
import GroupList from './GroupList'

class Attribute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        const {actions} = this.props;
        event.preventDefault();
        $.ajax({
            url: '/attribute/group/add',
            data: {name: this.state.name},
            dataType: 'json',
            type: 'post',
            cache: false,
            success: (resp) => {
                if (!resp.success) {
                    Alert.error('保存失败！');
                    return false;
                }
                this.setState({name: ''});
                actions.setCache('dialog', false);
                Alert.success('保存成功！');
            }
        });
    }

    render() {
        const {actions, cache} = this.props;
        const closeDialog = () => {
            this.setState({name: ''});
            actions.setCache('dialog', false)
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-3 padding-none bg-gray">
                        <GroupList cache={cache} actions={actions}/>
                    </div>
                    <div className="col-xs-9">
                        {this.props.children && React.cloneElement(this.props.children, {
                            cache: cache,
                            actions: actions
                        })}
                    </div>
                </div>
                <Dialog
                    visible={cache.dialog}
                    title="新建分组"
                    className="app-dialog"
                    style={{width: 500}}
                    animation="zoom"
                    maskAnimation="fade"
                    onClose={closeDialog}
                >
                    <form method="post" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <label>分组名称</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="输入分组名称"
                                value={this.state.name}
                                required
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">保存</button>
                    </form>
                </Dialog>
            </div>
        )
    }
}

module.exports = Attribute