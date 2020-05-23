import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  FormGroup,
  Button,
  Alert,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from "availity-reactstrap-validation";
import { Mail, Lock } from "react-feather";
import { Link } from "react-router-dom";

function Login() {
  return (
    <React.Fragment>
      <div
        className="account-pages my-5 d-flex align-items-center"
        style={{ height: "80vh" }}
      >
        <Container>
          <Row className="justify-content-center ">
            <Col xl={10}>
              <Card className="">
                <CardBody className="p-0">
                  <Row>
                    <Col md={6} className="p-5 position-relative">
                      <div className="mx-auto mb-5">
                        <a href="/">
                          <img
                            src="../assets/images/logo.png"
                            alt=""
                            height="24"
                          />
                          <h3 className="d-inline align-middle ml-1 text-logo">
                            Shreyu
                          </h3>
                        </a>
                      </div>

                      <h6 className="h5 mb-0 mt-4">Welcome back!</h6>
                      <p className="text-muted mt-1 mb-4">
                        Enter your email address and password to access admin
                        panel.
                      </p>

                      <AvForm className="authentication-form">
                        <AvGroup className="">
                          <Label for="username">Username</Label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <span className="input-group-text">
                                <Mail className="icon-dual" />
                              </span>
                            </InputGroupAddon>
                            <AvInput
                              type="text"
                              name="username"
                              id="username"
                              placeholder="hello@coderthemes.com"
                              required
                            />
                          </InputGroup>

                          <AvFeedback>This field is invalid</AvFeedback>
                        </AvGroup>

                        <AvGroup className="mb-3">
                          <Label for="password">Password</Label>
                          <Link
                            to="/account/forget-password"
                            className="float-right text-muted text-unline-dashed ml-1"
                          >
                            Forgot your password?
                          </Link>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <span className="input-group-text">
                                <Lock className="icon-dual" />
                              </span>
                            </InputGroupAddon>
                            <AvInput
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Enter your password"
                              required
                            />
                          </InputGroup>
                          <AvFeedback>This field is invalid</AvFeedback>
                        </AvGroup>

                        <FormGroup className="form-group mb-0 text-center">
                          <Link to="/">
                            {" "}
                            <Button color="primary" className="btn-block">
                              Log In
                            </Button>
                          </Link>
                        </FormGroup>
                      </AvForm>
                    </Col>

                    <Col md={6} className="d-none d-md-inline-block">
                      <div className="auth-page-sidebar">
                        <div className="overlay"></div>
                        <div className="auth-user-testimonial">
                          <p className="font-size-24 font-weight-bold text-white mb-1">
                            I simply love it!
                          </p>
                          <p className="lead">
                            "It's a elegent templete. I love it very much!"
                          </p>
                          <p>- Admin User</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className="col-12 text-center">
              <p className="text-muted">
                Don't have an account?{" "}
                <Link
                  to="/account/register"
                  className="text-primary font-weight-bold ml-1"
                >
                  Sign Up
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Login;
