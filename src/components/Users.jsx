import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Input,
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

function Users() {
  const { SearchBar } = Search;
  const { ExportCSVButton } = CSVExport;

  function deletefn(e) {
    swal({
      title: "Are you sure?",
      text: "You want to Delete the User?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        swal("Deleted!", "User Deleted Successfully", "success");
      }
    });
  }

  function blockfn(e){
    swal({
      text: "User Blocked Successfully",
      icon: "success",
    })
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
      text: "Name",
      sort: true,
    },
    {
      dataField: "booking",
      text: "Total Bookings",
      sort: true,
    },
    {
      dataField: "lastBookedPlace",
      text: "Last Booked Place",
      sort: true,
    },
    
    {
      dataField: "lastBookedDate",
      text: "Last Booked Date",
      sort: true,
    },
    {
      dataField: "actions",
      text: "Actions",
      sort: false,
      formatter: (cellContent, row) => (
        <div className="d-flex">
          <Link to="/view-users">
            {" "}
            <button className="btn btn-primary mr-3">View</button>
          </Link>
          <Link to="/edit-users">
            {" "}
            <button className="btn btn-secondary mr-3">Edit</button>
          </Link>
          <button className="btn btn-danger mr-3" onClick={deletefn}>
            Delete
          </button>
          <button className="btn btn-primary mr-3" onClick={blockfn}>
                  <Icon.Slash className="mr-1 p-1" />
          </button>
        </div>
      ),
    },
  ];

  const records = [
    {
      id: 1,

      name: "User 1",
      price: "Rs. 40000",
      booking: "127",
      lastBookedPlace: "Place1",
      lastBookedDate: "22/5/2019"
    },
    {
      id: 2,

      name: "User 2",
      price: "Rs 500000",
      booking: "44",
      lastBookedPlace: "Place2",
      lastBookedDate: "27/5/2019"
    },
    {
      id: 3,

      name: "User 3",
      price: "Rs.40000",
      booking: "100",
      lastBookedPlace: "Place3",
      lastBookedDate: "22/8/2019"
    },
  ];
  return (
    <Layout>
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between">
            <h3 className="header-title mt-0 mb-1">Users</h3>
            <div className="d-flex justify-content-end">
              <Link to="/edit-users">
                <button className="btn btn-primary">
                  <Icon.Plus className="mr-1 p-1" />
                  Add Users
                </button>
              </Link>
            </div>
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
    </Layout>
  );
}

export default Users;
