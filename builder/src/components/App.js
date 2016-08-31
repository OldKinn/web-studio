import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'

class App extends Component {

    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this)
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        const {actions} = this.props;
        actions.setCache('windowHeight', window.innerHeight);
    }

    render() {
        const {actions, cache, children} = this.props;
        return (
            <div className="root-container">
                <Header title="Web Studio 编辑器管理" logo="public/images/logo.png"/>
                <Menu actions={actions} cache={cache}/>
                <Content cache={cache}>
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