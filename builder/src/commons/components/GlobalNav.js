import React, {Component} from 'react'
import {Link} from 'react-router'
import Ripples from 'commons/components/Ripples'

class GlobalNav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom">
                <ul className="toolbar">
                    <li>
                        <Ripples center>
                            <Link to="/home" activeClassName="active">
                                <span className="glyphicon glyphicon-camera"/>
                                <span className="center-block">拍记</span>
                            </Link>
                        </Ripples>
                    </li>
                    <li>
                        <Ripples center>
                            <Link to="/relation" activeClassName="active">
                                <span className="glyphicon glyphicon-stats"/>
                                <span className="center-block">汇总</span>
                            </Link>
                        </Ripples>
                    </li>
                    <li>
                        <Ripples center>
                            <Link to="/explore" activeClassName="active">
                                <span className="glyphicon glyphicon-search"/>
                                <span className="center-block">发现</span>
                            </Link>
                        </Ripples>
                    </li>
                    <li>
                        <Ripples center>
                            <Link to="/profile" activeClassName="active">
                                <span className="glyphicon glyphicon-user"/>
                                <span className="center-block">我</span>
                            </Link>
                        </Ripples>
                    </li>
                </ul>
            </nav>
        )
    }
}

module.exports = GlobalNav
