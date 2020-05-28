import React, { Component } from 'react';
import Layout from "../Layout";
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';

import UserBox from './UserBox';
import Bookings from './Bookings';


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

<Row style={{marginTop:'20px'}}>
    <Col lg={3}>
        {/* User information */}
        <UserBox />
    </Col>

    <Col lg={9}>
        <Card>
            <CardBody>
                <h2 style={{textAlign: "center"}}>Bookings</h2>
                <Bookings/>
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
