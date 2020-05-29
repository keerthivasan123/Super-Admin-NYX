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

function Admins() {
  const { SearchBar } = Search;
  const { ExportCSVButton } = CSVExport;

  function deletefn(e) {
    swal({
      title: "Are you sure?",
      text: "You want to Delete the User?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: true,
        confirm: true,
      },
    })
    .then(willDelete => {
      if (willDelete) {
        swal("Deleted!", "User Deleted Successfully", "success");
      }
    });
  }

  function Blockfn(e){
    swal({
      title: "Are you sure?",
      text: "You want to Block the Admin?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: true,
        confirm: true,
      },
    })
    .then(willReport => {
      if (willReport) {
        swal("Blocked!", "Admin Blocked Successfully", "success");
      }
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
      text: "Name",
      sort: true,
    },
    {
      dataField: "noOfPlaces",
      text: "No. Of Places",
      sort: true,
    },
    {
      dataField: "totalRevenue",
      text: "Total Revenue",
      sort: true,
    },
    {
      dataField: "currentRevenue",
      text: "Current Month Revenue",
      sort: true,
    },
    {
      dataField: "actions",
      text: "Actions",
      sort: false,
      formatter: (cellContent, row) => (
        <div className="d-flex">
          <Link to="/view-admins">
            {" "}
            <button className="btn btn-primary mr-3">View</button>
          </Link>
          <Link to="/edit-admins">
            {" "}
            <button className="btn btn-secondary mr-3">Edit</button>
          </Link>
          <button className="btn btn-danger mr-3" onClick={deletefn}>
            Delete
          </button>
          <button className="btn btn-primary mr-3" onClick={Blockfn}>
          <Icon.Slash className="mr-1 p-1" />
          </button>
        </div>
      ),
    },
  ];

  const records = [
    {
      id: 1,

      name: "Admin 1",
      noOfPlaces: "80",
      totalRevenue: "Rs.585888",
      currentRevenue: "Rs.85888"
    },
    {
      id: 2,

      name: "Admin 2",
      noOfPlaces: "70",
      totalRevenue: "Rs.5858488",
      currentRevenue: "Rs.852888"
    },
    {
      id: 3,

      name: "Admin 3 ",
      noOfPlaces: "60",
      totalRevenue: "Rs.5875888",
      currentRevenue: "Rs.858878"
    },
  ];
  return (
    <Layout>
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between">
            <h3 className="header-title mt-0 mb-1">Admins</h3>
            <div className="d-flex justify-content-end">
              <Link to="/edit-admins">
                <button className="btn btn-primary">
                  <Icon.Plus className="mr-1 p-1" />
                  Add Admins
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

export default Admins;
