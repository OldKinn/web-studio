import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'

class App extends Component {

    render() {
        const {cache, children} = this.props;
        return (
            <div className="root-container">
                <Header title="我的项目名称" logo="public/images/logo.png"/>
                <Menu slide={cache.slide}/>
                <Content>
                    {React.cloneElement(children, {cache: cache})}
                </Content>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);