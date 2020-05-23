import React from "react";
import Layout from "./Layout";
import {
  Row,
  Col,
  Card,
  CardBody,
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
import Select from "react-select";
import FileUploader from "./FileUploader";

function EditPlaces() {
  const shadow = {
    boxShadow: `  inset 0 0 30px rgba(55, 84, 170,0),
    inset 0 0 20px rgba(255, 255, 255,0),
    7px 7px 15px rgba(55, 84, 170,.15),
    -7px -7px 20px rgba(255, 255, 255,1),
    inset 0px 0px 4px rgba(255, 255, 255,.2)`,
    borderRadius: "10px",
  };
  return (
    <Layout>
      <div className="container-fluid">
        <Row>
          <Col>
            <Card className="m-3">
              <CardBody>
                <h3>Feedback</h3>
                <Form>
                  <div className="card" style={shadow}>
                    <div className="card-body">
                      <FormGroup>
                        <Label for="exampleText">Name</Label>
                        <Input
                          type="text"
                          name="text"
                          id="exampleText"
                          rows="5"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleText"
                          rows="5"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">Phone Number</Label>
                        <Input
                          type="number"
                          name="phoneNumber"
                          id="exampleText"
                          rows="5"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">Rating</Label>
                        <Input
                          type="text"
                          name="text"
                          id="exampleText"
                          rows="5"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">Review</Label>
                        <Input
                          type="textarea"
                          name="text"
                          id="exampleText"
                          rows="5"
                        />
                      </FormGroup>
                    </div>
                  </div>

                  
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary p-3 fa-2x">
                      Submit
                    </button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default EditPlaces;
