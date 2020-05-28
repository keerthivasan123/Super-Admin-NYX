import React, {useState, useEffect} from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  FormGroup,
  Form,
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import swal from "sweetalert";

import Layout from "./Layout";

function Places(props) {
  const [modal, setModal] = useState(false);
  const {isAria} = props;
  const { SearchBar } = Search;
  const { ExportCSVButton } = CSVExport;
  const shadow = {
    boxShadow: `  inset 0 0 30px rgba(55, 84, 170,0),
    inset 0 0 20px rgba(255, 255, 255,0),
    7px 7px 15px rgba(55, 84, 170,.15),
    -7px -7px 20px rgba(255, 255, 255,1),
    inset 0px 0px 4px rgba(255, 255, 255,.2)`,
    borderRadius: "10px",
  };

  function toggle() {
    setModal(!modal);
  }

  function approveFun(e) {
    swal({
      text: "Approved",
      icon: "success",
    })
  }

  function denyFun(e) {
    swal({
      text: "Request Denyed",
      icon: "success",
    }).then(() => {
      toggle();
    });
  }

  const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange,
  }) => (
    <React.Fragment>
      <label className="d-inline mr-1">Show</label>
      <Input
        type="select"
        name="select"
        id="no-entries"
        className="custom-select custom-select-sm d-inline col-2"
        defaultValue={currSizePerPage}
        onChange={(e) => onSizePerPageChange(e.target.value)}
      >
        {options.map((option, idx) => {
          return <option key={idx}>{option.text}</option>;
        })}
      </Input>
      <label className="d-inline ml-1">entries</label>
    </React.Fragment>
  );
  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "name",
      text: "Place Name",
      sort: true,
    },
    {
      dataField: "admin",
      text: "Admin",
      sort: true,
    },
    {
      dataField: "date",
      text: "Requested Date",
      sort: true,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
    },
    {
      dataField: "actions",
      text: "Actions",
      sort: false,
      formatter: (cellContent, row) => (
        <div className="d-flex">
          <Link to="/view-place-request">
            {" "}
            <button className="btn btn-danger mr-3">View</button>
          </Link>
          <button className="btn btn-success mr-3" onClick={approveFun}>
            Approve
          </button>
          <button className="btn btn-primary mr-3" onClick={toggle}>
            Deny
          </button>
        </div>
      ),
    },
  ];

  const records = [
    {
      id: 1,

      name: "Kodaikanal Resort",
      admin: "Admin1",
      date: "22/4/2019",
      price: "Rs. 40000",
      booking: "127",
    },
    {
      id: 2,

      name: "Panama Beech House",
      admin: "Admin2",
      date: "25/4/2019",
      price: "Rs 500000",
      booking: "44",
    },
    {
      id: 3,

      name: "Goa Beach Resort ",
      admin: "Admin3",
      date: "23/4/2019",
      price: "Rs.40000",
      booking: "100",
    },
  ];
  return (
    <Layout isAria={isAria}>
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between">
            <h3 className="header-title mt-0 mb-1">Places Requests</h3>
            
          </div>
          <p className="sub-header"></p>

          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={records}
            columns={columns}
            search
            exportCSV={{ onlyExportFiltered: true, exportAll: false }}
          >
            {(props) => (
              <React.Fragment>
                <Row>
                  <Col>
                    <SearchBar {...props.searchProps} />
                  </Col>
                  <Col className="text-right">
                    <ExportCSVButton
                      {...props.csvProps}
                      className="btn btn-primary"
                    >
                      Export CSV
                    </ExportCSVButton>
                  </Col>
                </Row>

                <BootstrapTable
                  {...props.baseProps}
                  bordered={false}
                  defaultSorted={defaultSorted}
                  pagination={paginationFactory({
                    sizePerPage: 5,
                    sizePerPageRenderer: sizePerPageRenderer,
                    sizePerPageList: [
                      { text: "5", value: 5 },
                      { text: "10", value: 10 },
                      { text: "25", value: 25 },
                      { text: "All", value: records.length },
                    ],
                  })}
                  wrapperClasses="table-responsive"
                />
              </React.Fragment>
            )}
          </ToolkitProvider>
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle} centered={true} size={"xl"}>
        <ModalHeader toggle={toggle}>Feedback</ModalHeader>
        <ModalBody className="table-responsive">
        <Table className="mb-0 table-bordered table-striped" responsive>
            <tbody>
              <tr>
                <th>Id</th>
                <td>01</td>
              </tr>
              <tr>
                <th>Place Name</th>
                <td>Goa Beach Resort</td>
              </tr>
              <tr>
                <th>Admin</th>
                <td>Admin 1</td>
              </tr>
              <tr>
                <th>Requested Date</th>
                <td>22/5/2020</td>
              </tr>
              <tr>
                <th>Feedback</th>
                <td>
                <Input
                          type="textarea"
                          name="text"
                          id="exampleText"
                          rows="5"
                />
                </td>
              </tr>
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" className="ml-1" onClick={toggle}>
            Cancel
          </Button><Button color="primary" className="ml-1" onClick={denyFun}>
            Confirm Deny
          </Button>
        </ModalFooter>
      </Modal>
    </Layout>
  );
}

export default Places;
