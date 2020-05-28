import React, { Component } from 'react';
import Layout from "../Layout";
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';

import UserBox from './UserBox';
import Places from './Places';


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

<Row className="pt-3">
    <Col lg={3}>
        <UserBox />
    </Col>

    <Col lg={9}>
        <Card>
            <CardBody>
                <h1 style={{textAlign: "center"}}> Places</h1>
                <Places/>
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
