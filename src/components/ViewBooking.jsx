import React, { useState } from "react";
import Layout from "./Layout";
import {
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "reactstrap";
import swal from "sweetalert";

function ViewBooking() {
  const [modal, setModal] = useState(false);

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
  return (
    <Layout>
      <div className="d-flex justify-content-center align-items center">
        <Card className="col-sm-6 ml-auto mr-auto mt-3">
          <CardBody>
            <h4 className="header-title mt-0 mb-1">Booking Detail</h4>

            <Table className="mb-0" responsive>
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
                  <th>User</th>
                  <td>Chris Hemsworth</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>Rs.40000</td>
                </tr>

                <tr>
                  <th>From Date</th>
                  <td>12/05/2020</td>
                </tr>
                <tr>
                  <th>To Date</th>
                  <td>22/05/2020</td>
                </tr>
                <tr>
                  <th>Payment Status</th>
                  <td>Not Recieved</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" onClick={toggle}>
                Edit
              </button>
            </div>
          </CardBody>
        </Card>
      </div>

      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Edit Payment status</ModalHeader>
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
          <Button color="primary" onClick={Submitfn}>
            Submit
          </Button>
          <Button color="secondary" className="ml-1" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Layout>
  );
}

export default ViewBooking;
