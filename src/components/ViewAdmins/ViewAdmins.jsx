import React, { Component } from 'react';
import Layout from "../Layout";
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';

import UserBox from './UserBox';
import Activities from '../ViewUsers/Activities';
import Messages from './Messages';
import Bookings from './Projects';


class Profile extends Component {
    constructor(props) {
        super(props);

        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    /**
     * Toggles tab
     * @param {*} tab 
     */
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Layout>
                <React.Fragment>

<Row>
    <Col lg={3}>
        {/* User information */}
        <UserBox />
    </Col>

    <Col lg={9}>
        <Card>
            <CardBody>
                <Nav className="nav nav-pills navtab-bg nav-justified">
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classNames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggleTab('1'); }}
                        >Activity</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classNames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggleTab('2'); }}
                        >Messages</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Activities />
                    </TabPane>
                    <TabPane tabId="2">
                        <Messages />
                    </TabPane>
                    <TabPane tabId="5">
                        <Bookings />
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    </Col>
</Row>
</React.Fragment>
            </Layout>
        );
    }
}

export default Profile;
