import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  Media,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  Input,
} from "reactstrap";
import { Grid, CheckSquare, Users, Clock } from "react-feather";
import classNames from "classnames";
import swal from "sweetalert";

function ViewPlaces() {
  const [activeTab, setActiveTab] = useState("reviews");
  const [height, setHeight] = useState("inherit");
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  function toggle() {
    setModal(!modal);
  }

  function Submitfn() {
    swal({
      text: "Successfully changed payment status",
      icon: "success",
    }).then(() => {
      toggle();
    });
  }

  function toggleTab(tab) {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  useEffect(() => {
    const height = document.querySelector("#heightCol").clientHeight;

    setHeight(height);
  });

  return (
    <Layout>
      <Row className="m-3">
        <Col xl={4}>
          <Card id="heightCol">
            <CardBody>
              <div className="container p-3">
                <div className="container">
                  <h3>Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet consequatur repudiandae consequuntur enim debitis
                    mollitia! Minima magni itaque, consequuntur dolor ex libero?
                    Sequi fugiat deleniti quia, minus beatae consectetur vero!
                  </p>
                </div>

                <div className="container">
                  <h3>Location</h3>
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <th>Block No</th>
                        <td>No.223</td>
                      </tr>
                      <tr>
                        <th>Street</th>
                        <td>Panjim Street</td>
                      </tr>
                      <tr>
                        <th>City</th>
                        <td>North Goa</td>
                      </tr>
                      <tr>
                        <th>State</th>
                        <td>Goa</td>
                      </tr>
                      <tr>
                        <th>Country</th>
                        <td>India</td>
                      </tr>
                      <tr>
                        <th>Google Map Location</th>
                        <td>url</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4}>
          <Card style={{ height: height }}>
            <CardBody>
              <div className="container p-3">
                <div className="container">
                  <h3>Ameneties</h3>
                  <ListGroup className="mt-3">
                    <ListGroupItem>Hotel</ListGroupItem>
                    <ListGroupItem>Restaurant</ListGroupItem>
                    <ListGroupItem>Parking</ListGroupItem>
                    <ListGroupItem>1400sq free space</ListGroupItem>
                    <ListGroupItem>Spot lights</ListGroupItem>
                    <ListGroupItem>Generator Support</ListGroupItem>
                  </ListGroup>
                </div>
                <div className="container mt-3">
                  <h3>Categories</h3>
                  <div className="d-flex justify-content-center align-items-center p-3">
                    <span className="badge badge-info mr-3">Resort</span>
                    <span className="badge badge-info mr-3">Beach</span>
                    <span className="badge badge-info mr-3">Tourist Spot</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4}>
          <Card style={{ height: height }}>
            <CardBody>
              <div className="container p-3">
                <div className="container">
                  <h3>Policy And House Rules</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi soluta eum voluptatum beatae dolor enim consequatur
                    sint, placeat mollitia illum magni autem, ipsam doloribus
                    ab, cumque officiis corrupti sapiente. Dignissimos!
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio quae libero possimus aspernatur repellendus iusto
                    aliquam rem voluptate quod quibusdam, at minus saepe, animi
                    nobis reiciendis dolorem sunt recusandae vero!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis odio facere quod nesciunt molestias libero
                    numquam nihil non facilis, maiores aperiam, earum voluptatum
                    eaque sit in incidunt aut similique enim.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <Card>
            <CardBody>
              <Nav className="nav-pills navtab-bg">
                <NavItem>
                  <NavLink
                    href="#"
                    className={classNames({
                      active: activeTab === "reviews",
                    })}
                    onClick={() => {
                      toggleTab("reviews");
                    }}
                  >
                    Reviews
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    className={classNames({
                      active: activeTab === "Media",
                    })}
                    onClick={() => {
                      toggleTab("Media");
                    }}
                  >
                    Gallery
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="reviews">
                  <Row>
                    <Col>
                      <h5 className="mb-4 pb-1 header-title">Reviews (3)</h5>

                      <Media className="mb-4 font-size-14">
                        <div className="mr-3">
                          <a href="/">
                            <img
                              src="./assets/images/users/avatar-2.jpg"
                              className="media-object rounded-circle avatar-sm"
                              alt=""
                            />
                          </a>
                        </div>
                        <Media body>
                          <h5 className="mt-0 font-size-15">John Cooks</h5>
                          <p className="text-muted mb-1">
                            Their separate existence is a myth.
                          </p>
                        </Media>
                      </Media>

                      <Media className="mb-4 font-size-14">
                        <div className="mr-3">
                          <a href="/">
                            <img
                              src="./assets/images/users/avatar-3.jpg"
                              className="media-object rounded-circle avatar-sm"
                              alt=""
                            />
                          </a>
                        </div>
                        <Media body>
                          <h5 className="mt-0 font-size-15">Jayden Dowie</h5>
                          <p className="text-muted mb-1">
                            It will be as simple as occidental in fact be
                            Occidental will seem like simplified.
                          </p>
                        </Media>
                      </Media>

                      <Media className="mb-4 font-size-14">
                        <div className="mr-3">
                          <a href="/">
                            <img
                              src="./assets/images/users/avatar-2.jpg"
                              className="media-object rounded-circle avatar-sm"
                              alt=""
                            />
                          </a>
                        </div>
                        <Media body>
                          <h5 className="mt-0 font-size-15">John Cooks</h5>
                          <p className="text-muted mb-1">
                            Itaque earum rerum hic
                          </p>
                        </Media>
                      </Media>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="Media">
                  <Row>
                    <Col sm={4} className="p-3">
                      <img
                        src="https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
                        alt="resort"
                        className="img img-fluid img-responsive"
                      ></img>
                    </Col>
                    <Col sm={4} className="p-3">
                      <img
                        src="https://images.unsplash.com/photo-1525908106172-c366bafe972e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
                        alt="resort"
                        className="img img-fluid img-responsive"
                      ></img>
                    </Col>
                    <Col sm={4} className="p-3">
                      <img
                        src="https://images.unsplash.com/photo-1575641754416-ebad8bb38531?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
                        alt="resort"
                        className="img img-fluid img-responsive"
                      ></img>
                    </Col>
                    <Col sm={4} className="p-3">
                      <img
                        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
                        alt="resort"
                        className="img img-fluid img-responsive"
                      ></img>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle} centered={true} size={"xl"}>
        <ModalHeader toggle={toggle}>Booking</ModalHeader>
        <ModalBody className="table-responsive">
          <Table className="mb-0 table table-bordered table-striped" responsive>
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Date of Booking</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Payment</th>
              <th>Price</th>

              <th>Invoice</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Chris Hemsworth</td>
                <td>20/05/2020</td>
                <td>31/05/2020</td>
                <td>20/06/2020</td>
                <td>Pending</td>
                <td>Rs.40000</td>
                <td>
                  <div className="d-flex">
                    <Link to="/invoice">
                      <button className="btn btn-primary mr-3">Invoice</button>
                    </Link>
                    <button
                      className="btn btn-outline-primary"
                      onClick={toggleNested}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Robert Downey Jr</td>
                <td>21/04/2020</td>
                <td>21/05/2020</td>
                <td>2/06/2020</td>
                <td>Pending</td>
                <td>Rs.40000</td>
                <td>
                  <div className="d-flex">
                    <Link to="/invoice">
                      <button className="btn btn-primary mr-3">Invoice</button>
                    </Link>
                    <button
                      className="btn btn-outline-primary"
                      onClick={toggleNested}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Johnny Depp</td>
                <td>05/04/2020</td>
                <td>24/05/2020</td>
                <td>2/06/2020</td>
                <td>Pending</td>
                <td>Rs.40000</td>
                <td>
                  <div className="d-flex">
                    <Link to="/invoice">
                      <button className="btn btn-primary mr-3">Invoice</button>
                    </Link>
                    <button
                      className="btn btn-outline-primary"
                      onClick={toggleNested}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Edit Payment Status</ModalHeader>
            <ModalBody>
              <Table className="mb-0 table-bordered table-striped" responsive>
                <tbody>
                  <tr>
                    <th>Id</th>
                    <td>01</td>
                  </tr>
                  <tr>
                    <th>Place</th>
                    <td>Goa Beach Resort</td>
                  </tr>
                  <tr>
                    <th>Payment Status</th>
                    <td>
                      <Input type="select" name="select" id="exampleSelect">
                        <option value="recieved">Recieved</option>
                        <option value="not-recieved">Not Recieved</option>
                      </Input>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>
                Submit
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={Submitfn}>
            Submit
          </Button> */}
          <Button color="secondary" className="ml-1" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Layout>
  );
}

export default ViewPlaces;
