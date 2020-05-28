import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Input,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
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
  const {isAria} = props;
  const { SearchBar } = Search;
  const { ExportCSVButton } = CSVExport;
  function deletefn(e) {
    swal({
      text: "Place Deleted Successfully",
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
        className="custom-select custom-select-sm d-inline col-1"
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
      dataField: "price",
      text: "Price",
      sort: true,
    },
    {
      dataField: "booking",
      text: "Total Bookings",
      sort: true,
    },
    {
      dataField: "actions",
      text: "Actions",
      sort: false,
      formatter: (cellContent, row) => (
        <div className="d-flex">
          <Link to="/view-place">
            {" "}
            <button className="btn btn-primary mr-3">View</button>
          </Link>
          <Link to="/edit-place">
            {" "}
            <button className="btn btn-secondary mr-3">Edit</button>
          </Link>
          <button className="btn btn-danger mr-3" onClick={deletefn}>
            Delete
          </button>
        </div>
      ),
    },
  ];

  const records = [
    {
      id: 1,

      name: "Kodaikanal Resort",
      price: "Rs. 40000",
      booking: "127",
    },
    {
      id: 2,

      name: "Panama Beech House",
      price: "Rs 500000",
      booking: "44",
    },
    {
      id: 3,

      name: "Goa Beach Resort ",
      price: "Rs.40000",
      booking: "100",
    },
  ];
  return (
    <Layout isAria={isAria}>
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between">
            <h3 className="header-title mt-0 mb-1">Places</h3>
            <div className="d-flex justify-content-end">
              <Link to="/edit-place">
                <button className="btn btn-primary">
                  <Icon.Plus className="mr-1 p-1" />
                  Add Place
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

export default Places;
