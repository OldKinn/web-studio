/**
 * 属性表单
 * 2016年9月2日22:51:58
 * Created by Leon on 2016/9/2.
 */

import React, {Component} from 'react'
import Alert from 'react-s-alert'
import clone from 'lodash/clone'
import set from 'lodash/set'

class AttrForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            name: '',
            dataType: 'string',
            category: '',
            widget: '',
            remark: '',
            AttributeGroupId: ''
        }
    }

    handleChange(key, event) {
        let state = this.state;
        set(state, key, event.target.value);
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = clone(this.state);
        set(data, 'AttributeGroupId', this.props.group);
        $.ajax({
            url: '/attribute/add',
            data: data,
            dataType: 'json',
            type: 'post',
            success: (resp) => {
                if (!resp.success) {
                    Alert.error(resp.message);
                    return false;
                }
                Alert.success('保存成功！');
                this.props.closeDialog();
            }
        });
    }

    render() {
        return (
            <form className="form-horizontal" method="post" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label className="col-xs-2 control-label">编码</label>
                    <div className="col-xs-4">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.code}
                            onChange={this.handleChange.bind(this, 'code')}
                        />
                    </div>
                    <label className="col-xs-1 control-label">名称</label>
                    <div className="col-xs-4">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this, 'name')}
                        />
                    </div>
                </div>
                <hr className="dashed"/>
                <div className="form-group">
                    <label className="col-xs-2 control-label">数据类型</label>
                    <div className="col-xs-4">
                        <select
                            className="form-control"
                            value={this.state.dataType}
                            onChange={this.handleChange.bind(this, 'dataType')}
                        >
                            <option value="string">字符串</option>
                            <option value="number">数字</option>
                            <option value="boolean">布尔</option>
                            <option value="function">函数</option>
                        </select>
                    </div>
                    <label className="col-xs-1 control-label">分类</label>
                    <div className="col-xs-4">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange.bind(this, 'category')}
                        />
                    </div>
                </div>
                <hr className="dashed"/>
                <div className="form-group">
                    <label className="col-xs-2 control-label">控件类型</label>
                    <div className="col-xs-9">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.widget}
                            onChange={this.handleChange.bind(this, 'widget')}
                        />
                    </div>
                </div>
                <hr className="dashed"/>
                <div className="form-group">
                    <label className="col-xs-2 control-label">说明</label>
                    <div className="col-xs-9">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.remark}
                            onChange={this.handleChange.bind(this, 'remark')}
                        />
                    </div>
                </div>
                <hr className="dashed"/>
                <div className="form-group">
                    <div className="col-xs-offset-2 col-xs-10">
                        <button type="submit" className="btn btn-primary margin-right">
                            <span className="glyphicon glyphicon-ok"/> 保存
                        </button>
                        <button type="button" className="btn btn-default" onClick={() => {this.props.closeDialog()}}>
                            <span className="glyphicon glyphicon-remove"/> 取消
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AttrForm